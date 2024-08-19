import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<{
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}> = ({ imageUrl, title, description, id }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative pb-8">
      <Image
        src={imageUrl}
        alt={`${title}${id}`}
        width={500}
        height={500}
        priority
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-secondary-700 mb-2">{title}</div>
        <p className="text-secondary-300 text-sm line-clamp-2">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 ">
        <Link
          href={`pokemon/${id}`}
          className="text-primary-700 hover:text-primary-500"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
