import * as React from "react";

interface GalleryItemProps {
  videoUrl: string;
  caption: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ videoUrl, caption }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[220px] h-[450px] bg-black rounded-[2.5rem] shadow-lg overflow-hidden border-4 border-zinc-600">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium">{caption}</p>
    </div>
  );
};
