const Navbar = () => {
  return (
    <header className="flex border-b border-gray-800 justify-between items-center bg-[#0f2017] text-white py-3 sticky top-0 z-10">
      <div className="flex items-center gap-3 pl-5">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold">TailorCV</h1>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex gap-8 text-sm pr-5">
          <button>Resumes</button>
          <button>Cover Letters</button>
          <button>ATS Checker</button>
        </div>

        {/* <div className="rounded-full p-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
