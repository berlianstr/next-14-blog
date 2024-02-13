import { IUserProps } from "../types";

export async function fetchBlogs(page: number = 1, perPage: number = 10) {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts?page=${page}&per_page=${perPage}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}
export async function fetchUsers(
  page: number = 1,
  perPage: number = 10,
  name: string = ""
) {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}&name=${name}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}
export async function fetchBlogDetails(blogId: number) {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${blogId}`
    );
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}
export async function fetchUserDetails(id: number) {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}
export async function fetchBlogComment(blogId: number) {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${blogId}/comments`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}

export async function addUser(data: IUserProps) {
  const response = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send data");
  }

  const result = await response.json();
  return result;
}
export async function updateUser(id: number, data: IUserProps) {
  const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send data");
  }

  const result = await response.json();
  return result;
}
export async function deleteUser(id: number) {
  await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_API_KEY}`,
    },
  });
}
