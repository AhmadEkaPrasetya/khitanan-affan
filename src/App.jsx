import { useState, useEffect, useRef } from "react";
import HalamanUtama from "./components/HalamanUtama";
import HalamanMain from "./components/HalamanMain";
import music from "./assets/backsound_undangan.mp3";

function App() {
  const [page, setPage] = useState("utama");
  const [nama, setNama] = useState("");
  const audioRef = useRef(null);

  const startMusic = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");

    if (to) {
      const decode = decodeURIComponent(to).replace(/\+/g, " ");
      setNama(decode);
    }
  }, []);

  const capitalizeNama = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-[390px] min-h-screen relative overflow-hidden">
          {page === "utama" && (
            <HalamanUtama
              nama={nama}
              capitalizeNama={capitalizeNama}
              onFinish={() => {
                startMusic();
                setPage("main");
              }}
            />
          )}

          {page === "main" && (
            <HalamanMain nama={nama} capitalizeNama={capitalizeNama} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
