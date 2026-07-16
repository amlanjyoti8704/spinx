import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function SignupPage() {
  return (
    <AuthShell
      badge="Account creation"
      subtitle="Create your account so SPINX can start the move from landing page to real developer profile."
      title="Create your SPINX account"
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
