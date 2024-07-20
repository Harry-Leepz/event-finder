import SkeletonCard from "@/components/skeletons/skeleton-card";

export default function Loading() {
  return (
    <div className='flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-40 gap-20'>
      {Array.from({ length: 9 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
