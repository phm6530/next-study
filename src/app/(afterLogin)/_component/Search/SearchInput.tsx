"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import classes from "./SearchInput.module.scss";
import { useRouter } from "next/navigation";

interface Searchprops {
  q?: string;
  f?: string;
  pf?: string;
}

export default function SearchInput(props: Searchprops) {
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.q || "");

  useEffect(() => {
    if (!props.q) return;
    setValue(props.q);
  }, [props]);

  const router = useRouter();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //Search
  const queryStringSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value && value.trim() !== "") {
      router.push(`/search?q=${value.trim()}`);
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
          value={value}
          onChange={onChangeHandler}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}
