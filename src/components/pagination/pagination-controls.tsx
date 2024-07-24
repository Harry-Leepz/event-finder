import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const paginationBtnStyles =
  "text-white px-5 flex items-center gap-x-2 py-2 rounded-md hover:bg-white/10 opacity-80 transition text-sm";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className='flex w-full justify-between'>
      {/* Render empty div if no previouspath to mantain space between styling */}
      {previousPath ? (
        <Link className={paginationBtnStyles} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link className={paginationBtnStyles} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
