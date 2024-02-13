import React from "react";
import Container from "@/components/Container";
import { fetchBlogComment, fetchBlogDetails } from "@/utils/service";
import Image from "next/image";
import { CircleUserIcon } from "lucide-react";
import { ICommentProps } from "@/utils/types";

export default async function DetailBlogs({
  params,
}: {
  params: { blogId: string };
}) {
  const blogDetails = await fetchBlogDetails(Number(params.blogId));
  const blogComment = await fetchBlogComment(Number(params.blogId));
  return (
    <div className="relative flex flex-col gap-8 py-8">
      <Container className="pt-20 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto  items-center ">
        <div className="md:w-6/12 w-full flex-col md:h-[500px] h-[300px] flex-shrink-0 relative bg-gray-100 ">
          <Image
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            src={
              "https://images.unsplash.com/photo-1707301451916-faa7d4114b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-lg object-cover object-center mb-9"
            alt={blogDetails?.title}
          />
        </div>
        <div className={`md:w-6/12  md:ml-12 lg:ml-16 md:order-last`}>
          <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide mt-4 lg:leading-tight text-left">
            {blogDetails?.title}
          </h2>
          <p className="mt-4 text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
            {blogDetails?.body}
          </p>
        </div>
      </Container>
      <Container className="gap-2">
        <h5 className="font-semibold text-xl">
          Comment ({blogComment.length})
        </h5>
        <div className="flex flex-col justify-center gap-3">
          {blogComment.length > 0 &&
            blogComment?.map((comment: ICommentProps) => (
              <div className="flex items-start gap-1 " key={comment.id}>
                <CircleUserIcon size={22} />
                <div>
                  <p className="text-sm font-semibold">{comment.name}</p>
                  <p className="text-sm ">{comment.body}</p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
