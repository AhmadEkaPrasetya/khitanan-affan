import { useState } from "react";
import bg_tampilan1 from "../assets/bg_tampilan1.svg";
import amplop from "../assets/amplop.svg";

export default function HalamanUtama({ onFinish }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) return;
    setOpen(true);

    setTimeout(() => {
      onFinish();
    }, 700);
  };

  return (
    <div
      className={`
       relative w-full h-full overflow-hidden
    transition-all duration-700 ease-in-out
    ${open ? "brightness-100" : "brightness-65"}
    `}
    >
      <img
        src={bg_tampilan1}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <img
        src={amplop}
        alt="Amplop"
        onClick={handleClick}
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          w-[150px]
          cursor-pointer
          transition-all
          duration-700
          ease-in-out
          ${
            open
              ? "top-[120px] scale-110"
              : "top-[171px] scale-100 hover:scale-105 hover:-translate-y-2"
          }
        `}
      />
    </div>
  );
}
