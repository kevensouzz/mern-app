import { X } from "lucide-react";

export default function SuccessModal({
  onClose,
  message,
}: {
  onClose: () => void;
  message: string;
}) {
  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[450px] h-[125px] flex flex-col rounded-2xl border bg-black bg-opacity-75
        max-sm:w-[375px] max-sm:h-[100px] max-[400px]:w-[275px]`}
      >
        <header className={`flex items-center justify-end pr-4 h-2/5 w-full max-[400px]:h-1/5 max-[400px]:items-start`}>
          <X className={`cursor-pointer max-[400px]:mt-1`} size={28} onClick={onClose} />
        </header>
        <span
          className={`w-full h-3/5 flex items-start justify-center uppercase font-medium text-lg
        max-sm:text-sm max-[400px]:text-xs max-[400px]:items-center max-[400px]:h-4/5`}
        >
          {message}
        </span>
      </div>
    </section>
  );
}
