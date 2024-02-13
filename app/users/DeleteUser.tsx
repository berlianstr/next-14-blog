"use client";
import Button from "@/components/Button";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { deleteUser } from "@/utils/service";
import { IUserProps } from "@/utils/types";
import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import ModalDelete from "@/components/Modal/ModalConfirm";

export default function DeleteUser({ id }: { id: number }) {
  const router = useRouter();
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //   console.log(dataUser);

  const onDelete = async () => {
    if (!!id) {
      setLoading(true);
      try {
        await deleteUser(id);
        setLoading(false);
        setOpenModalDelete(false);
        setOpenModalSuccess(true);
      } catch (error) {
        setOpenModalDelete(false);
        setLoading(false);
        router.refresh();
        setOpenModalSuccess(true);
        console.log("error", error);
      }
    }
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
        message="Data Updated Successfully!"
      />
      <ModalDelete
        open={openModalDelete}
        loading={loading}
        onDeleteConfirm={() => onDelete()}
        onDeleteCancel={() => setOpenModalDelete(false)}
      />
    </div>
  );
}
