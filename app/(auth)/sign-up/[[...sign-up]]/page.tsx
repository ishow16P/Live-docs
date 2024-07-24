import { SignIn } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default SignUpPage;
