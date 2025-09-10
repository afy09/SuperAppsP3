import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer";
import MenuItem from "./menuItem";
import MenuPopup from "./menuPopup";

const menuData = [
  {
    title: "Info",
    description: "Adalah fitur yang menyajikan info tentang SuperApps, info partai, info jajaran pengurus dari DPP sampai Ranting.",
    image: "/images/info.png",
  },
  {
    title: "News / Update",
    description: "Fitur penyebaran konten informasi secara luas melalui video, grafis, audio, teks dan berita-berita.",
    image: "/images/news.png",
  },
  {
    title: "Streaming Live",
    description: "Fitur interaksi satu arah dan dua arah dari pengurus, kader, dan konstituen. Bisa berupa chat, pengumuman, atau live streaming.",
    image: "/images/live.png",
  },
  {
    title: "E-Wallet",
    description: "Fitur berbasis keuangan seperti Gopay, Ovo, dll. Bisa digunakan untuk pembayaran, voucher diskon, atau penukaran hadiah undian.",
    image: "/images/ewallet.png",
  },
  {
    title: "Polling",
    description: "Fitur polling/survey dengan responden besar untuk hasil akurat. Bisa digunakan untuk survey elektabilitas partai atau kebijakan pemerintah.",
    image: "/images/vote.png",
  },
  {
    title: "Games",
    description: "Fitur hiburan agar masyarakat betah di SuperApps, sekaligus memperkuat keterikatan dengan partai.",
    image: "/images/GAME.png",
  },
];

const BerandaPageUtama: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  return (
    <motion.div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full h-screen overflow-hidden text-white">
        <img src="/images/bg-p32.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 mx-2 lg:mx-20 -mt-10">
          <img src="/images/maskot.png" alt="Maskot" className="w-36 h-48 my-2 mt-10" />

          {/* 🔥 Ganti tombol login & register → jadi grid menu */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {menuData.map((menu, index) => (
              <MenuItem key={index} title={menu.title} image={menu.image} onClick={() => setSelectedMenu(index)} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedMenu !== null && <MenuPopup title={menuData[selectedMenu].title} description={menuData[selectedMenu].description} image={menuData[selectedMenu].image} onClose={() => setSelectedMenu(null)} />}
    </motion.div>
  );
};

export default BerandaPageUtama;
