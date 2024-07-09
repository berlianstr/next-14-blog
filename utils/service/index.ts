import { IUserProps } from "../types";

export async function fetchBlogs(skip: number = 0) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}posts?limit=6&skip=${skip}`,
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
      `${process.env.NEXT_PUBLIC_DUMMY_API}posts/${blogId}`
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

export async function fetchBlogComment(blogId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}posts/${blogId}/comments`,
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
