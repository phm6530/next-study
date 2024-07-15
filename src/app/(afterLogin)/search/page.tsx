import FixedHeader from "@/app/(afterLogin)/_component/FixedHeader";
import SearchInput from "@/app/(afterLogin)/_component/Search/SearchInput";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection/TrendSection";

type SearchProps = { searchParams: { [key: string]: string } };

export default function page({ searchParams }: SearchProps) {
  console.log(searchParams);
  return (
    <>
      <FixedHeader>
        <SearchInput q={searchParams.q} />
      </FixedHeader>
    </>
  );
}
