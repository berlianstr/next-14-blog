import { CheckIcon } from "lucide-react";
import ModalContainer from "./ModalContainer";
// import Button from "../Button";

export default function ModalSuccess({
  open,
  // setOpen,
  message,
}: // fn = () => null,
{
  open: boolean;
  message?: string;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fn?: () => void;
}) {
  return (
    <ModalContainer open={open}>
      <div className="w-[480px] flex flex-col bg-white p-6 rounded-2xl items-center gap-8">
        <div className="w-[129px] h-[129px] bg-[#12B569] rounded-full flex items-center justify-center">
          <CheckIcon color="white" size={75} />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-[24px] text-[#313030] font-semibold">
            Success!
          </label>
          <span className="text-[#393737] text-[16px]">{message}</span>
        </div>
        <div className="flex gap-3 w-full justify-center">
          {/* <Button
            label="Close"
            onClick={() => {
              setOpen(false);
              fn();
            }}
          /> */}
        </div>
      </div>
    </ModalContainer>
  );
}
