// "use client";
import Container from "@/components/Container";
import React, { Suspense } from "react";
import TableUser from "./ui/TableUser";
import { fetchUsers } from "@/utils/service";
import Pagination from "@/components/Pagination";
import AddUser from "./ui/AddUser";
import SearchUser from "./ui/SearchUser";

export default async function page(context: {
  params: {};
  searchParams: { query?: string; page: string };
}) {
  const query = context.searchParams?.query || "";
  const allUsers = await fetchUsers(
    Number(context.searchParams.page),
    10,
    query
  );
  return (
    <Container className="py-20 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <SearchUser />
        <AddUser />
      </div>
      <Suspense
        key={query + context.searchParams.page}
        fallback={
          <div className="flex justify-center items-start h-screen">
            <p className="text-center">Loading...</p>
          </div>
        }
      >
        <TableUser data={allUsers} />
      </Suspense>
      <Pagination
        totalPage={5}
        currentPage={Number(context.searchParams.page)}
      />
    </Container>
  );
}
