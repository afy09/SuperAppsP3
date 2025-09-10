import { useRef, useEffect, useState } from "react";

const About: React.FC = () => {
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
    <section className="max-w-[1440px] mx-auto  h-auto bg-white mt-[40px]  md:mt-[100px] z-50">
      <div className="grid mb-[50px] rounded-[16px] bg-white lg:rounded-[32px] md:rounded-[10px] opacity-100 md:grid-cols-2 grid-cols-1 gap-14 items-center lg:mx-[56px] mx-[16px] md:mx-[32px]">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} lg:w-[588px] md:w-[300px] h-full`}>
          <div className="">
            <img src="/images/profile.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"} font-poppins md:text-left -pt-[20px] md:pt-0`}>
          {/* <div className="flex justify-center">
            <img src="/images/koptentang.png" alt="" className="object-contain w-40 h-40" />
          </div> */}
          <div className="flex gap-7 items-center">
            <h1 className="lg:text-[30px] font-poppins font-semibold text-[18px]  text-primary2 ">About</h1>

            <div className="w-full h-[4px] bg-black2 text-black2"></div>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px] text-left  lg:text-justify ">
              <span className="rounded-full  bg-secondary text-white px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">1</span>
              HANTARA (Hasil Bumi Nusantara) is a platform that bridges the gap between farmers and consumers. We exist to solve the long, inefficient food supply chain, putting farmers back in a central position and ensuring their
              well-being.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify">
              <span className="rounded-full  bg-secondary text-white px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">2</span>
              HANTARA as an Integrated Solution, We use this approach to tackle supply chain issues like unstable prices and limited access to fresh produce. By doing so, we create a healthy ecosystem that benefits everyone involved.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify ">
              <span className="rounded-full  bg-secondary text-white px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">3</span>
              HANTARA: Professional and Trustworthy, We operate independently and professionally. We facilitate transactions, promote fruit and vegetable products, and serve consumers' needs for healthy, high-quality produce, providing a
              real solution for the global food industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
