"use server";

import { fetchHelper } from "./fetchUtils";

export async function getFeedbacks() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  return response;
}

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

export async function getFeedbackDetailComments(id) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}/${id}/comments`
  );

  return response;
}

export async function getCategory() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_CATEGORIES_ENDPOINT}`
  );
  return response;
}

// export async function getCategory(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json(); // ya da response.data; API'nizin döndüğü format
// }

export async function getDetailSuggestion(id) {
  const response = await fetchHelper(url + id);
  return response;
}
