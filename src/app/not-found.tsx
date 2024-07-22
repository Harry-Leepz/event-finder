"use client";

import { useRouter } from "next/navigation";

import MainHeading from "@/components/shared/MainHeading";

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <main className='flex items-center justify-center pt-24 flex-col '>
      <MainHeading>Wooops this page does not exist!!!</MainHeading>

      <button
        onClick={handleClick}
        className='bg-white/20 border-2 border-white/10 text-lg capitalize rounded-md py-2 w-[75%] sm:w-[50%]  bg-blur state-effect mt-40'
      >
        Take me back home
      </button>
    </main>
  );
}
