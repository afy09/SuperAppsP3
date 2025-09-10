import React from "react";

interface MenuItemProps {
  title: string;
  image: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center px-4 py-4 rounded-xl border border-white/30 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-lg text-purple-900 shadow-lg hover:shadow-xl transition p-6 text-center">
      <img src={image} alt={title} className="w-20 h-20 mb-2" />
      <span className="text-sm font-semibold">{title}</span>
    </button>
  );
};

export default MenuItem;
