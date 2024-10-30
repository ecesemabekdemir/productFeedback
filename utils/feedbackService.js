"use server";

import { fetchHelper } from "./fetchUtils";

export async function getFeedbacks() {
  // feedbackleri getiriyor
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  return response;
}

export async function getFeedbackDetail(id) {
  // feedbackdetaya gidiyor
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
  // commentleri getirmek için
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}/${id}${process.env.API_COMMENTS_ENDPOINT}`
  );

  return response;
}

export async function getCategory() {
  // kategorileri getiriyor
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_CATEGORIES_ENDPOINT}`
  );
  return response;
}
