import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[70vh] min-h-[550px] mx-auto flex flex-col justify-center`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 w-full`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]' />
          <div className='w-1 sm:h-40 h-24 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ffffff]'>Thiện Sang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Sinh viên Kỹ thuật máy tính <br className='sm:block hidden' />
            Trường Đại học Công nghệ - ĐHQGHN
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
