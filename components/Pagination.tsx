"use client";
import Button from "./Button";
import { useRouter } from "next/navigation";
const Pagination = ({
  currentPage,
  totalPage = 5,
}: {
  currentPage: number;
  totalPage?: number;
}) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Button
        onClick={() => router.push(`?page=${currentPage - 1}`)}
        className={`border border-gray-300 p-2 bg-white text-black rounded-l-md hover:bg-primary-300 hover:text-white ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed hover:bg-white hover:text-black"
            : ""
        }`}
        disabled={currentPage === 1}
        label="Prev"
      />
      <div className="flex items-center justify-center space-x-2">
        {[...Array(totalPage)].map((_, index) => (
          <Button
            key={index}
            className={`border bg-white text-black font-normal hover:bg-primary-300 hover:text-white border-gray-300 py-2 px-4 ${
              currentPage === index + 1 && "bg-primary-300 text-white"
            }`}
            onClick={() => router.push(`?page=${index + 1}`)}
            label={`${index + 1}`}
          />
        ))}
      </div>
      <Button
        onClick={() => router.push(`?page=${currentPage + 1}`)}
        className={`border border-gray-300 p-2 bg-white text-black rounded-r-md hover:bg-primary-300 hover:text-white ${
          currentPage === totalPage
            ? "opacity-50 cursor-not-allowed hover:bg-white hover:text-black"
            : ""
        }`}
        disabled={currentPage === totalPage}
        label="Next"
      />
    </div>
  );
};

export default Pagination;
