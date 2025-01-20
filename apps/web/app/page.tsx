import Link from "next/link";
import { LoginButton } from "./components/crypto-connect-button";

export default function Index() {
  return (
    <main className="flex h-full flex-col bg-black text-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <Logo />
        <Header />
        <Description />
        <LoginButton />
        <Footer />
      </div>
    </main>
  );
}

const Header = () => (
  <h1 className="text-4xl font-bold mb-6">Your Keys, Your Crypto</h1>
);

const Description = () => (
  <p className="text-gray-400 mb-12 max-w-md">
    Secure your Solana assets with Panda Shield - the self-custodial wallet
    where you're in complete control
  </p>
);

const Footer = () => (
  <p className="mt-6 text-sm text-gray-500">
    By tapping "Get Started" you agree to our{" "}
    <Link href="/terms" className="text-[#00E18F] hover:underline">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/privacy" className="text-[#00E18F] hover:underline">
      Privacy Policy
    </Link>
  </p>
);

const Logo = () => (
  <div className="relative w-52 h-52 mb-12">
    <div className="absolute inset-0 bg-gradient-to-br from-[#00E18F]/20 to-blue-600/20 rounded-lg blur-xl" />
    <div className="relative bg-black border border-[#00E18F]/30 rounded-lg px-4 py-2 flex items-center justify-center text-gray-400">
      Panda Shield 2025
    </div>
  </div>
);
