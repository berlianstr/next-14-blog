"use client";
import Button from "@/components/Button";
import ModalForm from "@/components/Modal/ModalForm";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { IUserProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormUser from "./FormUser";
import { cleanAndCapitalize } from "@/utils";

interface AddUserProps {
  setUsers: React.Dispatch<React.SetStateAction<IUserProps[]>>;
}

export default function AddUser({ setUsers }: AddUserProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserProps>({
    values: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: IUserProps) => {
    setLoading(true);

    // Clean and format the input values
    const cleanedData: IUserProps = {
      name: cleanAndCapitalize(data.name),
      email: data.email.trim(),
      message: cleanAndCapitalize(data.message),
    };

    // Fetch existing users from localStorage
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Add new user to the list
    users.push(cleanedData);

    // Save updated list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Update the users state to trigger a re-render
    setUsers(users);

    setLoading(false);
    setOpenModal(false);
    setOpenModalSuccess(true);

    // Refresh the page or trigger a re-fetch
    reset();
    router.refresh();
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
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          messageLength={watch("message").length}
          loading={loading}
          register={register}
        />
      </ModalForm>
      <ModalSuccess
        open={openModalSuccess}
        setOpen={setOpenModalSuccess}
        message="Data Created Successfully!"
      />
    </div>
  );
}
