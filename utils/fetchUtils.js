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
    console.error("HTTP Durum Kodu:", response.status);
    // Yanıtın durumu kontrol ediliyor
    if (!response.ok) {
      const errorData = await response.text(); // Yanıtı düz metin olarak al
      console.error("API Yanıtı:", errorData); // Yanıtı konsola yazdır
      throw new Error(`Hata: ${errorData || "Bilinmeyen hata"}`);
    }

    const responseData = await response.json().catch(() => {
      throw new Error("Yanıt geçersiz JSON formatında");
    });
    return { response: responseData, status: response.status, error: null };
  } catch (error) {
    console.error("Fetch Hatası:", error.message);
    return { response: null, status: 500, error: error.message };
  }
}
