"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SidebarFilter({ response }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const router = useRouter();
  const categoryParam = searchParams.get("tags");

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };
  console.log(response);

  return (
    <div className="sidebarFilter">
      <div className="item">
        <button
          onClick={() => router.push(`${pathname}`)}
          className={`${categoryParam ? "select" : ""}`}
        >
          All
        </button>
      </div>
      <div className="item">
        {response?.response.slice(0, 5).map((tags, index) => (
          <button
            onClick={() => {
              router.push(
                `${pathname}?${createQueryString("tags", tags.slug)}`
              );
            }}
            key={index}
            className={`${categoryParam === tags.slug ? "select" : ""}`}
          >
            {tags.name}
          </button>
        ))}
      </div>
    </div>
  );
}
