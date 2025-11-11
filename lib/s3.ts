import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const accessKeyId = process.env.TEBI_ACCESS_KEY_ID;
const secretAccessKey = process.env.TEBI_SECRET_ACCESS_KEY;
const bucketName = process.env.TEBI_BUCKET_NAME;

if (!accessKeyId || !secretAccessKey || !bucketName) {
  throw new Error("Tebi.io credentials are not set in the environment variables.");
}

const s3Client = new S3Client({
  endpoint: "https://s3.tebi.io",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region: "global",
});

export async function uploadFileToTebi(file: File) {
  if (!file || file.size === 0) {
    return null;
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const fileExtension = file.name.split(".").pop();
  const newFileName = `${uuidv4()}.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: newFileName,
    Body: fileBuffer,
    ContentType: file.type,
    ACL: "public-read", // Make the file publicly accessible
  });

  try {
    await s3Client.send(command);
    // Construct the public URL
    const fileUrl = `https://s3.tebi.io/${bucketName}/${newFileName}`;
    return fileUrl;
  } catch (error) {
    console.error("Error uploading file to Tebi.io:", error);
    throw new Error("Failed to upload file.");
  }
}
