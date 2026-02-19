import { useState } from "react";
import HalamanUtama from "./components/HalamanUtama";
import HalamanMain from "./components/HalamanMain";

function App() {
  const [page, setPage] = useState("utama");

  return (
    <div className="w-screen min-h-[100dvh] overflow-x-hidden">
      {page === "utama" && <HalamanUtama onFinish={() => setPage("main")} />}

      {page === "main" && <HalamanMain />}
    </div>
  );
}

export default App;
