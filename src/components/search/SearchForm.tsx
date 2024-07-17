"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    router.push(`/events/${searchText}`);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className='w-full sm:w-[580px]'>
      <input
        onChange={onChangeHandler}
        value={searchText}
        className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent transition focus:ring-2 focus:bg-white/10'
        type='text'
        spellCheck={false}
        placeholder='Search for events in any city...'
      />
    </form>
  );
}
