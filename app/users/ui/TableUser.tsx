// "use client";
import { IUserProps } from "@/utils/types";
import React from "react";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

export default async function TableUser({ data }: { data: IUserProps[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Gender
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((user: IUserProps) => (
            <tr className="hover:bg-gray-100" key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                {user.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center  gap-2">
                  <div
                    className={`h-2 w-2 ${
                      user.status === "active" ? "bg-[#12B569]" : "bg-[#858D9D]"
                    } rounded-full `}
                  />
                  <p
                    className={`capitalize ${
                      user.status === "active"
                        ? "text-[#313030]"
                        : "text-[#858D9D]"
                    }`}
                  >
                    {user.status}
                  </p>
                </div>
              </td>
              <td className="text-start p-4 text-base text-[#313030] h-[42px] w-0">
                <div className="flex items-center gap-2">
                  <EditUser dataUser={user} />
                  <DeleteUser id={user.id || 0} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
