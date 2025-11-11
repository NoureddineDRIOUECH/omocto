import LoginForm from "@/components/auth/login-form";
import "../admin/admin.css";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
}
