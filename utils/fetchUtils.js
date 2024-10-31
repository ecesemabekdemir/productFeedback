"use server";

export async function fetchHelper(url, method = "GET", data = null) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
      cache: "no-cache",
    });

    if (!response.ok) {
      const errorData = await response.json(); // Hata mesajını almak için
      throw new Error(`Hata: ${errorData.message || "Bilinmeyen hata"}`); // Hata fırlatma
    }

    const responseData = await response.json();
    return { response: responseData, status: response.status, error: null };
  } catch (error) {
    console.error("Fetch Hatası:", error.message);
    return { response: null, status: 500, error: error.message };
  }
}
