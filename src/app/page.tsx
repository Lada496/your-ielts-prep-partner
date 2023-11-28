import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Your <span className="text-rose-300">IELTS</span> Prep Partner
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/writing"
          >
            <h3 className="text-2xl font-bold">Writing →</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/speaking"
          >
            <h3 className="text-2xl font-bold">Speaking →</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
