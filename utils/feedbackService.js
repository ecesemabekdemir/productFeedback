"use server";
import { cookies } from "next/headers";
import { fetchHelper } from "./fetchUtils";

// Kullanıcı kaydı
export async function registerUser(userData) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_AUTH_ENDPOINT}${process.env.API_REGISTER_ENDPOINT}`,
    "POST",
    userData
  );
  return response;
}

// Kullanıcı girişi
export async function loginUser(prevState, formData) {
  // Formdan gelen email ve şifreyi alıyoruz
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetchHelper(
      `${process.env.API_ROOT_URL}${process.env.API_AUTH_ENDPOINT}${process.env.API_LOGIN_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include", // Cookie'leri almak için
      }
    );

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Giriş başarısız:", errorData);
      return { error: "Giriş Yapılamadı" }; // Hata durumunda dönüş yap
    }

    // Eğer giriş başarılıysa, cookies'i alalım
    const responseCookie = response.headers.get("set-cookie");
    console.log(responseCookie);

    if (!responseCookie) {
      console.error("Cookie alınamadı.");
      return { error: "Cookie alınamadı." };
    }

    // Cookies'i ayrıştırıyoruz
    const cookiesArray = responseCookie.split(",");
    const a = cookiesArray.flatMap((x) => x.split(";"));
    const cookiesObject = {};
    a.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookiesObject[key] = value;
    });

    console.log("Cookies:", cookiesObject);

    // Cookies'i doğru şekilde Next.js cookies API'si ile ayarlıyoruz
    cookies().set(
      ".AspNetCore.Identity.Application", // Cookie anahtarınız burada
      cookiesObject[".AspNetCore.Identity.Application"]
    );

    return { success: true }; // Başarılı giriş durumunda
  } catch (error) {
    // Genel hata yönetimi
    console.error("Giriş hatası:", error);
    return { error: "Bir hata oluştu." };
  }
}
// feedbackleri getiriyor
export async function getFeedbacks() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  console.log(response);
  return response;
}

// feedback atma
export async function postFeedback(formData) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}/api${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_SAVE_ENDPOINT}`,
    "POST",
    {
      title: formData.title,
      category: formData.category,
      description: formData.description,
    }
  );
  if (response.error) {
    console.error("Geri Bildirim Gönderilemedi:", response.error);
  }

  return response;
}

//feedback silme
export async function deleteFeedback(id) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_DELETE_ENDPOINT}/${id}`,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    }
  );
  return response;
}

// feedbackdetaya gidiyor
export async function getFeedbackDetail(id) {
  const { response, status, error } = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_FEEDBACKS_ENDPOINT}/${id}`
  );

  if (error) {
    console.error("API Hatası:", error);
    throw new Error("Veri alımında bir hata oluştu.");
  }

  if (status !== 200) {
    throw new Error(`API'den alınan hata: ${status}`);
  }

  if (typeof response !== "object" || response === null) {
    throw new Error("API'den alınan veri geçersiz.");
  }

  return response;
}

// feedback güncellicek
export async function updateFeedback(formData) {
  const response = await fetchHelper(`${blblabla}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
    },
    body: JSON.stringify({
      title: formData.title,
      description: formData.description,
    }),
  });
  return response;
}

// // export async function getFeedbackDetailComments(id) {
// //   // commentleri getirmek için
// //   const response = await fetchHelper(
// //     `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}/${id}${process.env.API_COMMENTS_ENDPOINT}`
// //   );

//   return response;
// }

export async function getCategory() {
  // kategorileri getiriyor
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_CATEGORIES_ENDPOINT}`
  );
  return response;
}

// export async function postCategory() {
//   // kategorileri post
//   const response = await fetchHelper(
//     `${process.env.API_ROOT_URL}${process.env.API_CATEGORIES_ENDPOINT}`,
//     "POST"
//   );
//   return response;
// }

//feedback atma
