import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

type BlogSearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};
export function BlogSearch({ search, setSearch }: BlogSearchProps) {
  return (
    <div className="container max-w-6xl mx-auto mt-6">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        name="search"
        id="search"
        className="w-full"
        aria-label="Search blog"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        maxLength={100}
        placeholder="Search blog"
      />
    </div>
  );
}
