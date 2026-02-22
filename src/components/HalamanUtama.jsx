import { useState } from "react";
import bg_tampilan1 from "../assets/bg_tampilan1.svg";
import amplop from "../assets/amplop.svg";

export default function HalamanUtama({ onFinish, nama, capitalizeNama }) {
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
       relative w-full min-h-screen overflow-hidden
    transition-all duration-700 ease-in-out
    ${open ? "brightness-100" : "brightness-65"}
    `}
    >
      <img
        src={bg_tampilan1}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 z-10 text-Url text-lg font-arapey text-center ">
        <h1 className="text-[29px] font-bold drop-shadow-lg">
          Undangan untuk {nama ? capitalizeNama(nama) : " Tamu Spesial "}
        </h1>
        <p className="mt-2">Silahkan buka amplop ini</p>
      </div>
      <img
        src={amplop}
        alt="Amplop"
        onClick={handleClick}
        className={`
          absolute
          left-1/2
          z-20
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
