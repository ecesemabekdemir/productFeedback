"use server";

import { fetchHelper } from "./fetchUtils";

export async function getFeedbacks(url) {
  const { response, status, error } = await fetchHelper(url);

  if (error || status !== 200) {
    throw new Error("Feedbackler getirilemedi");
  }
  return { success: true, data: response };
}

export async function getData() {
  const response = await fetchHelper(url);
  return response;
}
