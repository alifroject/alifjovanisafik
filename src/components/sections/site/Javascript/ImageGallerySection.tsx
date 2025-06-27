import * as React from "react";
import Image from "next/image";

export const ImageGallerySection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 pt-36 pb-16 w-full bg-slate-400 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col ml-5 w-full max-w-[2161px] max-md:max-w-full">

        {/* 🖥️ Laptop with video */}
        <div className="relative w-full aspect-[1.67] max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9cde8bf114b6726d7385fae5e31f7c936a1b2dc?placeholderIfAbsent=true&apiKey=533b204a865e416d87d00b3e64c64775"
            alt="Laptop"
            className="object-contain w-full h-auto"
          />
          
          {/* 🎥 Video inside screen */}
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-[8.7%] left-[13.3%] w-[73%] h-[76%] object-cover  shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
