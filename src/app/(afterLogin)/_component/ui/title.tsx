import classes from "./ui.module.scss";

export default function PageTitle({ page }: { page: string }) {
  return <h1>{page}</h1>;
}
