import classes from "./TrendSection.module.scss";
import Link from "next/link";

export default function TrendItem() {
  return (
    <Link href={`/search?q=트랜드`}>
      <div>트랜드 </div>
      <div>1</div>
      <p>1</p>
    </Link>
  );
}
