"use client";
import Container from "@/components/Container";
import React, { Suspense, useEffect, useState } from "react";
import TableUser from "./ui/TableUser";
import Pagination from "@/components/Pagination";
import AddUser from "./ui/AddUser";
// import SearchUser from "./ui/SearchUser";
import { usersData } from "@/utils/dummy-users";
import { IUserProps } from "@/utils/types";

export default function Page(context: {
  params: {};
  searchParams: { query?: string; page: string };
}) {
  const query = context.searchParams?.query || "";
  const currentPage = parseInt(context.searchParams?.page || "1", 10);
  const itemsPerPage = 10;
  const [users, setUsers] = useState<IUserProps[]>([]);

  useEffect(() => {
    // Fetch users data from localStorage
    const storedUsers = localStorage.getItem("users");
    console.log(storedUsers);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // If no data exists in localStorage, initialize with default usersData
      localStorage.setItem("users", JSON.stringify(usersData));
      setUsers(usersData);
    }
  }, []);

  // Calculate the paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);
  const totalPage = Math.ceil(users.length / itemsPerPage);

  return (
    <Container className="py-20 bg-white min-h-screen">
      <div className="flex items-center justify-end">
        {/* <SearchUser /> */}
        <AddUser setUsers={setUsers} />
      </div>
      <Suspense
        key={query + context.searchParams.page}
        fallback={
          <div className="flex justify-center items-start h-screen">
            <p className="text-center">Loading...</p>
          </div>
        }
      >
        <TableUser data={paginatedUsers} setUsers={setUsers} />
      </Suspense>
      <Pagination totalPage={totalPage} currentPage={currentPage} />
    </Container>
  );
}
