"use client";

import { FormEvent, useRef, useState } from "react";
import classes from "./SearchInput.module.scss";
import { useRouter } from "next/navigation";

export default function SearchInput(): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  //Search
  const queryStringSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const curInput = ref.current;

    if (curInput && curInput.value.trim() !== "") {
      router.push(`/search?p=${curInput.value.trim()}`);
    } else {
      router.push(window.location.pathname);
    }
  };

  return (
    <div className={`${classes.SearchWrapper} ${focus ? classes.active : ""}`}>
      <form onSubmit={queryStringSearch}>
        <input
          type="text"
          name="search"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}
