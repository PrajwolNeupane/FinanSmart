import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col px-10 justify-center bg-dark-700 min-h-[100vh] gap-2">
      <h2 className="text-text-200 text-lg font-mb">Sign in</h2>
      <p className="text-text-300 text-4xs font-l mb-10">Unlock Your Account: Sign In to Access</p>
      <SignIn />
    </div>
  );
}
