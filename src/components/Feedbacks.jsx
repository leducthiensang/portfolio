import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My journey</p>
          <h2 className={styles.sectionHeadText}>Personal reflections.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center`}>
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className='bg-black-200 p-8 sm:p-10 rounded-3xl w-full max-w-4xl border border-white/5 shadow-2xl backdrop-blur-md'
        >
          <p className='text-white font-black text-[48px] leading-none mb-4'>"</p>

          <div className='flex flex-col gap-6 text-secondary text-[16px] sm:text-[17.5px] leading-[30px] sm:leading-[32px] text-justify font-light'>
            <p>
              Hành trình xây dựng Portfolio giúp mình hệ thống hóa lại toàn bộ những kiến thức đã học được trong suốt thời gian qua. Đây không chỉ là một bài tập kết thúc môn học, mà đã thực sự trở thành "tài sản số" đầu tiên mang đậm dấu ấn cá nhân, giúp mình lưu trữ kỷ niệm và tự tin giới thiệu năng lực của bản thân.
            </p>
            <p>
              Qua dự án này, mình đã trang bị được nhiều kỹ năng số cốt lõi. Mình học được cách quản lý tệp tin khoa học, đánh giá thông tin học thuật và phối hợp làm việc nhóm qua Google Meet, Trello và Docs. Đặc biệt, mình đã rèn luyện được tư duy ứng dụng AI hiệu quả—từ việc tối ưu Prompt cho đến việc dùng AI hỗ trợ lên kịch bản và làm video trên Capcut.
            </p>
            <p>
              Điều mình tâm đắc nhất là bản thân đã có thể tự tay thiết kế một trang web hoàn chỉnh. Dù ban đầu còn nhiều bỡ ngỡ với nền tảng tạo website hay những lúc loay hoay tìm cách tối ưu câu lệnh AI, nhưng qua đó mình lại rèn luyện được khả năng tự học và sử dụng các công cụ.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
