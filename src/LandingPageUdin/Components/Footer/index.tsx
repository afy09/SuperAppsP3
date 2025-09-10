import React from "react";

interface FooterProps {
  className?: string;
  handleMenuClick?: (page: string) => void; // opsional kalau belum digunakan
}

const Footer: React.FC<FooterProps> = ({ className, handleMenuClick }) => {
  return (
    <>
      <footer>
        <div className="text-center py-5 text-black font-poppins text-[9px] md:text-base  border-primary border-t-2">
          <p className="font-medium">
            © 2025 <span className="text-primary font-semibold">Super Apps P3</span> | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
