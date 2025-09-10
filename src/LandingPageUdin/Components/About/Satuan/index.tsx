import { useEffect, useState, useRef } from "react";

const VisiMisi = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageVisible(true);
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-6  md:mt-24 mx-4 md:mx-12 ">
      <div className="flex gap-5 items-center">
        <div className="w-full h-[4px] bg-secondary text-secondary"></div>

        <h1 className="lg:text-[25px]  font-semibold text-[18px]  text-[#cfa84d] w-28">Service</h1>
      </div>

      <div className=" lg:flex gap-4 justify-center mt-8">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} bg-secondary text-white px-8 lg:px-12 py-8 rounded-lg w-full`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d]">Hassle-free ordering</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-left  lg:text-justify mt-5 text-base md:text-lg">
            Simply contact our team via WhatsApp <strong>"0812 1068 1178"</strong> to place your order.
          </p>
        </div>

        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} bg-secondary text-white px-8 lg:px-12 py-8 rounded-lg w-full mt-4 lg:mt-0`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d]">Flexible Delivery</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-left  lg:text-justify mt-5">Choose your own delivery time, for example, 9 AM or Tuesday, you decide, FREE SHIPPING!! (Subject to Certain Conditions)</p>
        </div>

        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} bg-secondary text-white px-8 lg:px-12 py-8 rounded-lg w-full mt-4 lg:mt-0`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d]">Ready to export</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-left  lg:text-justify mt-5">We provide worldwide shipping through several stages that we have determined.</p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
