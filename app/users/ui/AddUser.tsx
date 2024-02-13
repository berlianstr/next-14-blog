"use client";
import Button from "@/components/Button";
import ModalForm from "@/components/Modal/ModalForm";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { addUser } from "@/utils/service";
import { IUserProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormUser from "./FormUser";

export default function AddUser() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit } = useForm<IUserProps>({
    values: {
      name: "",
      email: "",
      gender: "",
      status: "active",
    },
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: IUserProps) => {
    setLoading(true);
    try {
      await addUser(data);
      setLoading(false);
      setOpenModalSuccess(true);
      setOpenModal(false);
      formRef.current?.reset();
      setTimeout(() => {
        setOpenModalSuccess(false);
        router.refresh();
      }, 1000);
    } catch (error) {
      setOpenModalSuccess(false);
      setLoading(false);
      console.log("error", error);
    }
  };
  return (
    <div>
      <Button
        className="w-fit md:text-base text-md h-fit"
        label="Create"
        type="button"
        onClick={() => setOpenModal(true)}
      />
      <ModalForm
        title="Create New User"
        className="md:w-[500px] lg:h-auto md:h-[400px] w-[400px] h-[300px]"
        open={openModal}
        setClose={() => {
          setOpenModal(false), formRef.current?.reset();
        }}
      >
        <FormUser
          formRef={formRef}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          register={register}
        />
      </ModalForm>
      <ModalSuccess
        open={openModalSuccess}
        // setOpen={setOpenModalSuccess}
        message="Data Created Successfully!"
      />
    </div>
  );
}
