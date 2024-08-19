// import { IUserProps } from "../types";

export async function fetchPokemon(limit: number = 0) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}pokemon?limit=${limit}`,
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

export async function fetchPokemonDetails(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}pokemon/${id}`
    );
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    console.log("ini", result);
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
