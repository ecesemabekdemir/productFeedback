"use server";

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
export async function loginUser(credentials) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_AUTH_ENDPOINT}${process.env.API_LOGIN_ENDPOINT}`,
    "POST",
    credentials
  );
  return response;
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
