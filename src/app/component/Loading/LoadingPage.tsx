"use client";
import { usePathname } from "next/navigation";
import classes from "./LoadingPage.module.scss";
import { useEffect, useRef, useState } from "react";

export default function LoadingPage() {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className={classes.loadingWrap}>
          <span>loading....</span>
        </div>
      )}
    </>
  );
}
