// ResumeCardSkeleton.tsx
const ResumeCardSkeleton = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => {
        return (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow p-3 animate-pulse"
          >
            {/* Image placeholder */}
            <div className="rounded-md mb-3 h-[250px] w-full bg-[#1c2e24]"></div>

            {/* Title placeholder */}
            <div className="h-5 w-3/4 bg-green-950 rounded mb-2"></div>

            {/* Date placeholder */}
            <div className="h-4 w-1/2 bg-green-950 rounded"></div>
          </div>
        );
      })}
    </>
  );
};

export default ResumeCardSkeleton;
