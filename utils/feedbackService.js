"use server";

import { fetchHelper } from "./fetchUtils";

export async function getFeedbacks() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  return response;
}

export async function getData() {
  const response = await fetchHelper(url);
  return response;
}
