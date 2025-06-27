import * as React from "react";

interface ContentBlockProps {
  height: string;
  width: string;
  rounded?: string;
  className?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  height,
  width,
  rounded = "rounded-[87px]",
  className = "",
}) => {
  return (
    <>
    
    </>
  );
};
