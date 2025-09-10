import React from "react";

interface MenuPopupProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const MenuPopup: React.FC<MenuPopupProps> = ({ title, description, image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md p-6 text-gray-900 relative m-4">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <div className="flex flex-col items-center">
          <img src="/images/maskot2.png" alt="maskot" className="w-44 h-44" />
          <div className="mb-2 flex justify-center gap-3">
            <img src={image} alt={title} className="w-[35px] h-[35px] " />
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <p className="text-base leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
