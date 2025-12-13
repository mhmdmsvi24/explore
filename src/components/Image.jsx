import { useState } from "react";
import Loading from "./Loading";

export default function Image({ src, alt, style, loading = "lazy", decoding = "async" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!isLoaded && <Loading />}

      <img
        src={src}
        alt={alt}
        className={`${style} h-full w-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        loading={loading}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
