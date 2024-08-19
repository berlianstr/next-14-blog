// "use client";
import { IUserProps } from "@/utils/types";
import React from "react";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

interface TableUserProps {
  data: IUserProps[];
  setUsers: React.Dispatch<React.SetStateAction<IUserProps[]>>;
}

const TableUser: React.FC<TableUserProps> = ({ data, setUsers }) => {
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
              Message
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
          {data?.map((user: IUserProps, index) => (
            <tr className="hover:bg-gray-100" key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                {user.message}
              </td>
              <td className="text-start p-4 text-base text-[#313030] h-[42px] w-0">
                <div className="flex items-center gap-2">
                  <EditUser dataUser={user} setUsers={setUsers} />
                  <DeleteUser email={user.email} setUsers={setUsers} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
