// "use client";
import Container from "@/components/Container";
import React from "react";
import TableUser from "./TableUser";
import { fetchUsers } from "@/utils/service";
import Pagination from "@/components/Pagination";
import AddUser from "./AddUser";
import SearchUser from "./SearchUser";

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
    <Container className="py-20 bg-white h-screen">
      <div className="flex items-center justify-between">
        <SearchUser />
        <AddUser />
      </div>
      <TableUser data={allUsers} />
      <Pagination
        totalPage={5}
        currentPage={Number(context.searchParams.page)}
      />
    </Container>
  );
}
