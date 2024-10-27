"use server";

export async function getFeedbacks(url) {
  const { response, status, error } = await dataRequest(url);

  if (error || status !== 200) {
    throw new Error("Feedbackler getirilemedi");
  }
  return { success: true, data: response };
}
