import React from "react";
import type { ReactElement, CSSProperties } from "react";

interface IconButtonProps {
  icon: ReactElement; // 정확하게 JSX 요소
  onClick?: () => void;
  style?: CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {icon}
    </button>
  );
};

export default IconButton;
