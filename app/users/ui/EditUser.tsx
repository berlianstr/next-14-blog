"use client";
import Button from "@/components/Button";
import ModalForm from "@/components/Modal/ModalForm";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { updateUser } from "@/utils/service";
import { IUserProps } from "@/utils/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormUser from "./FormUser";
import { Edit3Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditUser({ dataUser }: { dataUser: IUserProps }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IUserProps>({
    values: {
      // id: dataUser.id,
      name: dataUser.name,
      email: dataUser.email,
      gender: dataUser.gender,
      status: dataUser.status,
    },
  });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //   console.log(dataUser);

  const onSubmit = async (data: IUserProps) => {
    if (!!dataUser.id) {
      setLoading(true);
      try {
        await updateUser(dataUser.id, data);
        setLoading(false);
        setOpenModal(false);
        setOpenModalSuccess(true);
        setTimeout(() => {
          setOpenModalSuccess(false);
          router.refresh();
        }, 1000);
      } catch (error) {
        setOpenModalSuccess(false);
        setLoading(false);
        console.log("error", error);
      }
    }
  };
  return (
    <div>
      <div className="flex justify-end">
        <Button
          icon={<Edit3Icon size={20} />}
          label=""
          className="w-[46px] h-[46px] p-0 bg-[#F79009] hover:bg-[#F79009] hover:opacity-80"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <ModalForm
        title="Update User"
        className="md:w-[500px] lg:h-auto md:h-[400px] w-[400px] h-[300px]"
        open={openModal}
        setClose={() => {
          setOpenModal(false);
        }}
      >
        <FormUser
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          register={register}
        />
      </ModalForm>
      <ModalSuccess
        open={openModalSuccess}
        // setOpen={setOpenModalSuccess}
        message="Data Updated Successfully!"
      />
    </div>
  );
}
