import { Loader2Icon, Trash2Icon } from "lucide-react";
import ModalContainer from "./ModalContainer";
import Button from "../Button";
export default function ModalDelete({
  open,
  loading,
  onDeleteConfirm,
  onDeleteCancel,
}: {
  open: boolean;
  loading: boolean;
  onDeleteConfirm: () => void;
  onDeleteCancel: () => void;
}) {
  return (
    <ModalContainer open={open}>
      <div className="w-[480px] flex flex-col bg-white p-6 rounded-2xl items-center gap-8">
        <div className="w-[129px] h-[129px] bg-[#F04438] rounded-full flex items-center justify-center">
          <Trash2Icon color="white" size={75} />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-[24px] text-[#313030] font-semibold">
            Delete?
          </label>
          <span className="text-[#393737] text-[16px]">
            Delete? Are you sure want to delete this data?
          </span>
        </div>
        <div className="flex gap-3 w-full justify-center">
          {loading ? (
            <Loader2Icon color="black" className="animate-spin" />
          ) : (
            <>
              <Button
                label="Cancel"
                className="bg-transparent border hover:bg-transparent hover:opacity-80 border-[#DA3E33] text-[#DA3E33] w-full"
                onClick={() => {
                  onDeleteCancel();
                }}
              />
              <Button
                label="Yes, Delete"
                onClick={() => {
                  onDeleteConfirm();
                }}
                className="bg-[#DA3E33] hover:bg-[#DA3E33] hover:opacity-80 w-full"
              />
            </>
          )}
        </div>
      </div>
    </ModalContainer>
  );
}
