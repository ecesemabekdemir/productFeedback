"use server";
export async function fetchHelper(url, method = "GET", data = null) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    });

    if (!response.ok) {
      return { response: null, status: response.status, error: response };
    }

    const responseData = await response.json();
    return { response: responseData, status: response.status, error: null };
  } catch (error) {
    console.log(error);
    return { response: null, status: 500, error: error.message };
  }
}

export const getDetailSuggestion = async (id) => {
  const response = await fetchHelper(url + id);
  return response;
};
