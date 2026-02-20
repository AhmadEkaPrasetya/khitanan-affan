import { useState } from "react";
import HalamanUtama from "./components/HalamanUtama";
import HalamanMain from "./components/HalamanMain";

function App() {
  const [page, setPage] = useState("utama");

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen relative overflow-hidden">
        {page === "utama" && <HalamanUtama onFinish={() => setPage("main")} />}

        {page === "main" && <HalamanMain />}
      </div>
    </div>
  );
}

export default App;
