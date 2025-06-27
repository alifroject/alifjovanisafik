import React from "react";

interface CircleIconProps {
  width: number;
  height: number;
  fill?: string;
}

export const CircleIcon: React.FC<CircleIconProps> = ({
  width,
  height,
  fill = "#D9D9D9",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={width / 2}
        cy={height / 2}
        rx={width / 2}
        ry={height / 2}
        fill={fill}
      />
    </svg>
  );
};
