// "use client";
import React, { Suspense } from "react";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { fetchBlogs } from "@/utils/service";
import { IBlogsProps } from "@/utils/types";
import Container from "@/components/Container";
export default async function BlogPage(context: {
  params: {};
  searchParams: { page: string };
}) {
  const allBlogs = await fetchBlogs(Number(context.searchParams.page));
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <p className="text-center">Loading...</p>
        </div>
      }
    >
      <Container className="py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {allBlogs?.map((blog: IBlogsProps) => (
            <Card
              id={blog.id.toString()}
              key={blog.id}
              title={blog.title}
              description={blog.body}
              imageUrl="https://images.unsplash.com/photo-1707301451916-faa7d4114b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ))}
        </div>

        <Pagination currentPage={Number(context.searchParams.page)} />
      </Container>
    </Suspense>
  );
}
