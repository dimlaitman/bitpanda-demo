import Link from "next/link";

export const Links = () => (
  <div className="grid grid-cols-3 gap-1 w-[400px]">
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URL}/docs`}
      className="bg-[#27d17f] hover:bg-[#146940]/90 text-black px-4 py-2 font-semibold rounded-lg  text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      API Docs
    </Link>
    <Link
      href="https://github.com/dimlaitman/solpanda"
      className="bg-[#27d17f] hover:bg-[#146940]/90 text-black px-4 py-2 font-semibold rounded-lg text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github Repo
    </Link>
    <Link
      href="https://www.linkedin.com/in/laitman/"
      className="bg-[#27d17f] hover:bg-[#146940]/90 text-black px-4 py-2 font-semibold rounded-lg text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </Link>
  </div>
);
