import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-white h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      <h3 className="text-5xl">Not found</h3>
      <Link href="/" className="mt-4 link-hover">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
