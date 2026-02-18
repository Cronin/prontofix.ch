import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="mt-4 text-neutral-500">Page not found</p>
        <Link
          href="/de"
          className="mt-6 inline-block rounded bg-black px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Back to ProntoFix
        </Link>
      </div>
    </div>
  );
}
