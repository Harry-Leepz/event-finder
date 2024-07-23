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
      <MainHeading> 404 Wooops this page does not exist!!!</MainHeading>
    </main>
  );
}
