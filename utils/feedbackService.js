"use server";
import { cookies } from "next/headers";
import { fetchHelper } from "./fetchUtils";
import { redirect } from "next/navigation";

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
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(
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
      credentials: "include",
    }
  );

  const data = await response.text();
  if (!response.ok) {
    console.log(data);

    return {
      error: "Giriş Yapılamadı",
    };
  }

  const responseCookie = response.headers.get("set-cookie");
  const cookiesArray = responseCookie.split(",");
  const a = cookiesArray.flatMap((x) => x.split(";"));
  const cookiesObject = {};
  a.forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookiesObject[key] = value;
  });
  console.log(cookiesObject);

  console.log(cookiesObject[".AspNetCore.Identity.Application"]);

  cookies().set(
    ".AspNetCore.Identity.Application",
    cookiesObject[".AspNetCore.Identity.Application"]
  );
  redirect("/");
}

// me
export async function GetMe() {
  try {
    const response = await fetch(`https://feedback.bariscakdi.com.tr/auth/me`, {
      method: "GET",
      headers: {
        accept: "*/*",
        Cookie: cookies().toString(),
      },
    });
    if (!response.ok) {
      return { error: "hata var" };
    }

    const data = await response.json();

    console.log("user dataa", data);

    return { data };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}

// logOut
export async function logOut() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_AUTH_ENDPOINT}${process.env.API_LOGOUT_ENDPOINT}`
  );
  return response;
}

// feedbackleri getiriyor
export async function getFeedbacks() {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );

  return response;
}

// feedback atma
export async function postFeedback(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  console.log("postttt", formData);

  const response = await fetch(
    `https://feedback.bariscakdi.com.tr/api/feedback/save`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        title,
        description,
        categoryId: parseInt(category),
        CategoryName: "UI",
      }),
    }
  );
  if (!response.ok) {
    console.error("Geri Bildirim Gönderilemedi:");
  }
  const data = await response.json();
  redirect("/");
}

// comment atma
export async function postComments(formData) {
  const description = formData.get("description");
  const created = formData.get("created");
  const userId = formData.get("userId");
  const userName = formData.get("userName");
  const commitId = formData.get("commitId");
  const feedBackId = formData.get("feedBackId");

  console.log("commmmeent", formData);

  const response = await fetchHelper(
    `https://feedback.bariscakdi.com.tr/api/commit/addcommit`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        description,
        created,
        userId: parseInt(userId),
        userName,
        commitId: parseInt(commitId),
        feedBackId: parseInt(feedBackId),
      }),
    }
  );
  if (!response.ok) {
    console.error("Geri Bildirim Gönderilemedi:");
  }
  const data = await response.json();
  redirect("/");
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

  // if (error) {
  //   throw new Error("Veri alımında bir hata oluştu.");
  // }

  // if (status !== 200) {
  //   throw new Error(`API'den alınan hata: ${status}`);
  // }

  // if (typeof response !== "object" || response === null) {
  //   throw new Error("API'den alınan veri geçersiz.");
  // }

  return response;
}

// feedback güncellicek
export async function updateFeedback(formData) {
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}/api${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_UPDATE_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
      }),
    }
  );
  return response;
}

// category gelcek
export async function getCategory() {
  // kategorileri getiriyor
  const response = await fetchHelper(
    `${process.env.API_ROOT_URL}${process.env.API_CATEGORIES_ENDPOINT}`
  );
  return response;
}
