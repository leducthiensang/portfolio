import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center leading-[1.3]'>
          {title.split(" & ").map((text, i, arr) => (
            <React.Fragment key={i}>
              {text}
              {i < arr.length - 1 && (
                <>
                  <br />
                  &
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id="about">
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Xin chào! Mình là <span className='text-[#ffffff] font-semibold'>Lê Đức Thiện Sang</span>, hiện đang theo học chuyên ngành <span className='text-white font-semibold'>Kỹ thuật máy tính</span> tại <span className='text-white font-semibold'>Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội</span>. Mình là một người đam mê công nghệ, luôn tò mò khám phá những giải pháp kỹ thuật số mới và đặc biệt yêu thích <span className='text-white font-semibold'>nghe nhạc, xem phim</span> sau giờ học tập và nghiên cứu.
        <br /><br />
        Với tinh thần không ngừng học hỏi, mục tiêu của mình là làm chủ các công cụ công nghệ số hiện đại và nâng cao năng lực ứng dụng Trí tuệ Nhân tạo (AI) vào thực tiễn. Định hướng của mình là phát triển bản thân thành một kỹ sư nhạy bén công nghệ, sẵn sàng thích ứng trước sự thay đổi nhanh chóng của kỷ nguyên số.
        <br /><br />
        <span className='text-[#ffffff] font-semibold'>Digital Portfolio</span> này sẽ tổng hợp những kiến thức, kỹ năng số mà mình đã gặt hái được từ môn học <span className='italic text-white'>"Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo"</span>, đồng thời lưu trữ những sản phẩm cá nhân của mình để dễ dàng chia sẻ trong tương lai.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
