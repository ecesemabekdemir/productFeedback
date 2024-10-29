"use server";

import { fetchHelper } from "./fetchUtils";

export async function getFeedbacks() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  return response;
}

export async function getFeedbackDetail(id) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}/${id}`
  );

  return response;
}

export async function getFeedbackDetailComments(id) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}/${id}/comments`
  );

  return response;
}

export async function getTags() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}`
  );
  return response;
}

export async function getDetailSuggestion(id) {
  const response = await fetchHelper(url + id);
  return response;
}
