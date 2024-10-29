"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SidebarFilter({ data }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const categoryParam = searchParams.get("tags");

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  // normal api den category gelmeli data'nın response.altındaki posts dizisini kullandık gercek apiden direkt de gelebilir
  const tagsArray = data?.response?.posts || [];

  return (
    <div className="sidebarFilter">
      <div className="item">
        <button
          onClick={() => router.push(`${pathname}`)}
          className={!categoryParam ? "select" : ""}
        >
          All
        </button>
      </div>
      {tagsArray.length > 0 ? (
        tagsArray.slice(0, 5).map((tag, index) => (
          <div key={index} className="item">
            <button
              onClick={() => {
                router.push(
                  `${pathname}?${createQueryString("tags", tag.slug)}`
                );
              }}
              className={categoryParam === tag.slug ? "select" : ""}
            >
              {tag.tags}
            </button>
          </div>
        ))
      ) : (
        <p>No tags available.</p>
      )}
    </div>
  );
}
