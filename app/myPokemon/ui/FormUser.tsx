import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import { IUserProps } from "@/utils/types";
import React from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export default function FormUser({
  loading,
  handleSubmit,
  onSubmit,
  register,
  formRef,
  errors,
  messageLength,
}: {
  handleSubmit: UseFormHandleSubmit<IUserProps>;
  register: UseFormRegister<IUserProps>;
  onSubmit: (data: IUserProps) => void;
  messageLength?: number;
  loading: boolean;
  errors: FieldErrors<IUserProps>;
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
}): JSX.Element {
  return (
    <form
      className="flex flex-col gap-4"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          // required
          placeholder="Input name"
          label="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 32,
              message: "Name cannot exceed 32 characters",
            },
          })}
        />
        {errors?.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          // required
          placeholder="Input email"
          label="Email"
          // type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[#667085] md:text-base text-sm font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 3,
              message: "Message must be at least 3 characters",
            },
            maxLength: {
              value: 80,
              message: "Message cannot exceed 80 characters",
            },
          })}
          className="h-full flex-1 md:text-base border-2 text-sm  outline-none text-[#514E4E] bg-transparent font-semibold w-full  focus:outline-none rounded-md focus:border-primary-500 focus:ring-primary-500 px-2"
        />
        <div
          className={` flex ${
            !!errors?.message ? " justify-between" : "justify-end"
          }`}
        >
          {errors?.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
          <p className="text-end">{messageLength}/80</p>
        </div>
      </div>
      <Button
        loading={loading}
        className="w-full"
        label={"Submit"}
        type="submit"
      />
    </form>
  );
}
