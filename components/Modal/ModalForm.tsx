import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ModalContainer from "./ModalContainer";
import Button from "../Button";

export default function ModalForm({
  open,
  children,
  title = "Title",
  setClose,
  fn = () => null,
  className,
}: {
  open: boolean;
  children: React.ReactNode;
  title: string;
  className?: string;
  setClose: () => void;
  fn?: () => void;
}) {
  return (
    <ModalContainer open={open}>
      <div
        className={twMerge(
          `w-fit flex flex-col bg-white p-6 rounded-2xl gap-4 max-h-[600px] overflow-y-auto`,
          className
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <label className="text-xl text-[#313030] font-semibold">
            {title}
          </label>
          <Button
            className="w-fit bg-white hover:bg-transparent text-primary"
            onClick={() => {
              fn();
              setClose();
            }}
            icon={<XIcon />}
          />
        </div>
        <hr />
        {children}
      </div>
    </ModalContainer>
  );
}
