"use client";

import { useEffect } from "react";

import MainHeading from "@/components/shared/MainHeading";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='text-center py-24'>
      <MainHeading className='mb-5'>Something went wrong!</MainHeading>
    </main>
  );
}
