import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#E34234]">
      <h1 className="text-[4rem] text-[#F5F5DC] font-sans">Red Fox</h1>
      <Link
        href="/contact"
        className="mt-8 text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors underline"
      >
        Contact
      </Link>
    </div>
  );
}
