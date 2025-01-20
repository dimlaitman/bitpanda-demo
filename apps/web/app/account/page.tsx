import { LoginButton } from "../components/crypto-connect-button";

export default function Account() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-full w-full space-y-4">
      <span className="">Protected page</span>
      <LoginButton />
    </div>
  );
}
