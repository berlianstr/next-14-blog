"use client";
import Button from "@/components/Button";
import ModalForm from "@/components/Modal/ModalForm";
import ModalSuccess from "@/components/Modal/ModalSuccess";
import { IUserProps } from "@/utils/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormUser from "./FormUser";
import { Edit3Icon } from "lucide-react";
import { cleanAndCapitalize } from "@/utils";
interface TableUserProps {
  dataUser: IUserProps;
  setUsers: React.Dispatch<React.SetStateAction<IUserProps[]>>;
}

export default function EditUser({ dataUser, setUsers }: TableUserProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserProps>({
    values: {
      // id: dataUser.id,
      name: dataUser.name,
      email: dataUser.email,
      message: dataUser.message,
    },
  });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //   console.log(dataUser);

  const onSubmit = async (data: IUserProps) => {
    setLoading(true);

    // Fetch existing users from localStorage
    const storedUsers = localStorage.getItem("users");
    const users: IUserProps[] = storedUsers ? JSON.parse(storedUsers) : [];

    // Find the index of the user being edited
    const userIndex = users.findIndex((user) => user.email === dataUser.email);

    // Update the user details
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        name: cleanAndCapitalize(data.name),
        email: data.email.trim(),
        message: cleanAndCapitalize(data.message),
      };
    }

    // Save updated list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Update the users state to trigger a re-render
    setUsers(users);

    setLoading(false);
    setOpenModal(false);
    setOpenModalSuccess(true);
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
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          register={register}
        />
      </ModalForm>
      <ModalSuccess
        open={openModalSuccess}
        setOpen={setOpenModalSuccess}
        message="Data Updated Successfully!"
      />
    </div>
  );
}
