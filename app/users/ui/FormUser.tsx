import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Select from "@/components/Input/Select";
import { IUserProps } from "@/utils/types";
import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export default function FormUser({
  loading,
  handleSubmit,
  onSubmit,
  register,
  formRef,
}: {
  loading: boolean;
  handleSubmit: UseFormHandleSubmit<IUserProps>;
  register: UseFormRegister<IUserProps>;
  onSubmit: any;
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
}): JSX.Element {
  return (
    <form
      className="flex flex-col gap-4"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        required
        placeholder="Input name"
        label="Name"
        {...register("name", { required: true })}
      />
      <Input
        required
        placeholder="Input email"
        label="Email"
        type="email"
        {...register("email", { required: true })}
      />
      <Select
        label="Select Gender"
        data={[
          { name: "Select Gender", value: "" },
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
        ]}
        {...register("gender", { required: true })}
      />
      <Select
        label="Status"
        data={[
          { name: "Active", value: "active" },
          { name: "Inactive", value: "inactive" },
        ]}
        {...register("status", { required: true })}
      />
      <Button
        loading={loading}
        className="w-full"
        label={"Submit"}
        type="submit"
      />
    </form>
  );
}
