import { useEffect } from "react";

const GoogleSearch = () => {
  useEffect(() => {
    // Load Google CSE script dynamically
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=e28407b1e91854f6d";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        🔍 Pencarian Web oleh Fluxo
      </h1>
      <div className="gcse-searchbox-only mb-4" />
      <div className="gcse-searchresults-only" />
    </div>
  );
};

export default GoogleSearch;