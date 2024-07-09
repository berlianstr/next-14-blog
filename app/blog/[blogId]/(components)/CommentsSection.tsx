// components/CommentsSection.tsx
"use client";

import React, { useState } from "react";
import { ICommentProps } from "@/utils/types";
import { CircleUserIcon } from "lucide-react";

const CommentsSection = ({ comments }: { comments: ICommentProps[] }) => {
  const [visibleComments, setVisibleComments] = useState(3);

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 3);
  };

  return (
    <div className="gap-2">
      <h5 className="font-semibold text-xl">Comment ({comments.length})</h5>
      <div className="flex flex-col justify-center gap-5 mt-5">
        {comments.length > 0 &&
          comments.slice(0, visibleComments).map((comment) => (
            <div className="flex items-start gap-2" key={comment.id}>
              <CircleUserIcon size={22} />
              <div>
                <p className="text-sm font-semibold">{comment.user.fullName}</p>
                <p className="text-sm">{comment.body}</p>
              </div>
            </div>
          ))}
      </div>
      {visibleComments < comments.length && (
        <button
          onClick={loadMoreComments}
          className="mt-3 p-2  text-violet-900 rounded"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CommentsSection;
