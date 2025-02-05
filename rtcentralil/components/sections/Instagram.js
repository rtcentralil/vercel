import { useEffect } from 'react';

export default function Instagram() {
  useEffect(() => {
    // Check if the Elfsight script is already loaded
    if (!document.getElementById('elfsight-platform-script')) {
      const script = document.createElement('script');
      script.id = 'elfsight-platform-script';
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="container mx-auto px-6">
      {/* Elfsight widget container */}
      <div
        className="elfsight-app-46e58cf7-3235-4178-b65d-957f8d9a9d19"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
