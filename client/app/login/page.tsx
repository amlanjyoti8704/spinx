import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      badge="Authentication slice"
      subtitle="Return to your account and continue into the resume-driven networking flow."
      title="Sign in to SPINX"
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
