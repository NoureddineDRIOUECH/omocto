// scripts/create-admin.mjs
import readline from "readline";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Using anon key for client-side script

if (!supabaseUrl || !supabaseServiceKey) {
  console.error(
    "Error: Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env.local file."
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("--- Create a new admin user ---");

rl.question("Enter username: ", (username) => {
  rl.question("Enter password (will be hidden): ", async (password) => {
    rl.close();

    if (!username || !password) {
      console.error("Username and password cannot be empty.");
      return;
    }

    try {
      console.log("Hashing password...");
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log(`Inserting admin user "${username}" into the database...`);
      const { data, error } = await supabase
        .from("admins")
        .insert([{ username, hashed_password: hashedPassword, email: `${username}@example.com` }])
        .select();

      if (error) {
        console.error("Error creating admin user:", error.message);
        if (error.code === '23505') { // Unique constraint violation
            console.error(`The username "${username}" already exists.`);
        }
      } else {
        console.log("✅ Admin user created successfully!");
        console.log(data);
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  });

  // Hide password input
  rl._writeToOutput = function _writeToOutput(stringToWrite) {
    if (rl.line.length > 0)
      rl.output.write("\b \b".repeat(rl.line.length));
    rl.output.write("*".repeat(rl.line.length));
  };
});
