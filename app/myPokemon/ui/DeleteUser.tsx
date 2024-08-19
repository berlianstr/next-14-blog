"use client";
import Button from "@/components/Button";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import ModalDelete from "@/components/Modal/ModalConfirm";
import { IUserProps } from "@/utils/types";

interface DeleteUserProps {
  email: string;
  setUsers: React.Dispatch<React.SetStateAction<IUserProps[]>>;
}

export default function DeleteUser({ email, setUsers }: DeleteUserProps) {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDelete = async () => {
    setLoading(true);

    // Fetch existing users from localStorage
    const storedUsers = localStorage.getItem("users");
    const users: IUserProps[] = storedUsers ? JSON.parse(storedUsers) : [];

    // Filter out the user to be deleted
    const updatedUsers = users.filter((user) => user.email !== email);

    // Save updated list to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update the users state to trigger a re-render
    setUsers(updatedUsers);

    setLoading(false);
    setOpenModalDelete(false);
    setOpenModalSuccess(true);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button
          icon={<Trash2Icon size={20} />}
          label=""
          onClick={() => setOpenModalDelete(true)}
          className="w-[46px] h-[46px] p-0 bg-[#F04438] hover:bg-[#F04438] hover:opacity-80"
        />
      </div>
      <ModalSuccess
        open={openModalSuccess}
        setOpen={setOpenModalSuccess}
        message="Data Deleted Successfully!"
      />
      <ModalDelete
        open={openModalDelete}
        loading={loading}
        onDeleteConfirm={onDelete}
        onDeleteCancel={() => setOpenModalDelete(false)}
      />
    </div>
  );
}
