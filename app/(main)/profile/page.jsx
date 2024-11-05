import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

async function updateUser() {
  "use server";
  revalidateTag("userme");
}

export default async function Profile() {
  const response = await fetch(`https://feedback.bariscakdi.com.tr/auth/me`, {
    next: { tags: ["userme"] },
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (response.ok) {
    const data = await response.json();
    return (
      <div>
        {JSON.stringify(data, null, 2)}

        <form action={updateUser}>
          <button>Profili Güncelle</button>
        </form>
      </div>
    );
  }
  console.log(response);

  return (
    <div>
      {JSON.stringify(response, null, 2)}

      <form action={updateUser}>
        <button>Profili Güncelle</button>
      </form>
    </div>
  );
}
