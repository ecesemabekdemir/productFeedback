"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SidebarFilter({ data }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  console.log("category data", data);

  // normal api den category gelmeli data'nın response.altındaki posts dizisini kullandık gercek apiden direkt de gelebilir
  const category = data?.response || [];

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
      {category.length > 0 ? (
        category.map((x) => (
          <div key={x.id} className="item">
            <button
              onClick={() => {
                router.push(
                  `${pathname}?${createQueryString("category", x.name)}`
                );
              }}
              className={categoryParam === x.slug ? "select" : ""}
            >
              {x.name}
            </button>
          </div>
        ))
      ) : (
        <p>No tags available.</p>
      )}
    </div>
  );
}
