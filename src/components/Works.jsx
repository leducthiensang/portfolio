import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  report_link,
}) => {
  return (
    <motion.div
      id={`project-${index + 1}`}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project preview"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
            {index <= 5 && (
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to={`/project/${index + 1}`}
                  className="inline-block bg-white hover:bg-gray-200 text-black font-semibold text-[13px] px-4 py-2 rounded-xl transition-colors duration-200 shadow-md"
                >
                  Xem chi tiết bài làm
                </Link>
                {report_link && (
                  <a
                    href={report_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#915EFF] hover:bg-[#804dee] text-white font-semibold text-[13px] px-4 py-2 rounded-xl transition-colors duration-200 shadow-md"
                  >
                    Xem file báo cáo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Dưới đây là các sản phẩm thực hành của mình. Mỗi bài tập thể hiện một
          kỹ năng số khác nhau, từ tổ chức dữ liệu, tìm kiếm học thuật, viết
          prompt cho AI, cộng tác trực tuyến đến sáng tạo nội dung số và sử
          dụng AI có trách nhiệm.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
