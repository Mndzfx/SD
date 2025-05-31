import { useEffect } from "react";

const GoogleSearch = () => {
  useEffect(() => {
    // Cek apakah script sudah ada, untuk menghindari double load
    if (!window.__gcse) {
      const cx = "e28407b1e91854f6d"; // Ganti dengan CX kamu
      const script = document.createElement("script");
      script.src = `https://cse.google.com/cse.js?cx=${cx}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">🔎 Pencarian Web oleh Fluxo</h1>

      {/* Jangan ubah struktur ini, Google hanya mengenali class berikut */}
      <div className="gcse-searchbox-only" />
      <div className="gcse-searchresults-only" />
    </div>
  );
};

export default GoogleSearch;