import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    if (!document.getElementById("elfsight-platform-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform-script";
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="instagram" className="instagram-section py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-outerSpace">Instagram Feed</h2>
        <p className="mt-4 text-base sm:text-lg text-outerSpace">Latest updates from our community</p>
        <div className="mt-6">
          <div className="elfsight-app-46e58cf7-3235-4178-b65d-957f8d9a9d19" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}