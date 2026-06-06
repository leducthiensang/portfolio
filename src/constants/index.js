import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Thiết bị & dữ liệu số",
    icon: web,
  },
  {
    title: "Trí tuệ nhân tạo (AI)",
    icon: mobile,
  },
  {
    title: "Sáng tạo & hợp tác số",
    icon: backend,
  },
  {
    title: "An toàn & liêm chính số",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Practice",
    company_name: "React Portfolio",
    icon: starbucks,
    iconBg: "#333333",
    date: "2026",
    points: [
      "Tùy biến giao diện portfolio bằng React, Tailwind và Framer Motion.",
      "Tổ chức nội dung học phần theo từng project riêng để dễ trình bày.",
      "Tối ưu bố cục để hiển thị tốt trên desktop và mobile.",
    ],
  },
  {
    title: "3D Web Practice",
    company_name: "Three.js",
    icon: tesla,
    iconBg: "#e5e5e5",
    date: "2026",
    points: [
      "Tích hợp mô hình 3D, hiệu ứng canvas và chuyển động vào giao diện.",
      "Giữ cân bằng giữa phần trình diễn thị giác và khả năng đọc nội dung.",
      "Tái sử dụng cấu trúc component để mở rộng thêm các bài tập mới.",
    ],
  },
  {
    title: "Academic Portfolio",
    company_name: "UET Coursework",
    icon: shopify,
    iconBg: "#333333",
    date: "2026",
    points: [
      "Đưa bài tập học phần vào portfolio dưới dạng case study có route riêng.",
      "Kết hợp văn bản, ảnh minh họa và phần tóm tắt kết quả để dễ theo dõi.",
      "Dùng project như hồ sơ số phục vụ học tập và báo cáo môn học.",
    ],
  },
  {
    title: "AI Learning Workflow",
    company_name: "Prompt Engineering",
    icon: meta,
    iconBg: "#e5e5e5",
    date: "2026",
    points: [
      "Thử nghiệm nhiều cách viết prompt để nâng chất lượng đầu ra của AI.",
      "Đánh giá sự khác biệt giữa prompt cơ bản, cải tiến và nâng cao.",
      "Ưu tiên cách dùng AI như trợ giảng thay vì công cụ làm hộ.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Portfolio trình bày rõ ràng tiến trình học tập và cho thấy khả năng tổ chức nội dung số khá tốt.",
    name: "Project 1",
    designation: "Digital Skills",
    company: "Coursework",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Các bài thực hành được tách thành route riêng nên dễ kiểm tra, dễ mở rộng và thuận tiện khi thuyết trình.",
    name: "Project 2",
    designation: "Academic Search",
    company: "Coursework",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Cách so sánh nhiều mức prompt giúp nhìn rõ hơn khi nào AI hỗ trợ học tập hiệu quả và khi nào nó đang làm hộ.",
    name: "Project 3",
    designation: "Prompt Engineering",
    company: "Coursework",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
    description:
      "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
    tags: [
      {
        name: "UET",
        color: "blue-text-gradient",
      },
      {
        name: "digital-file",
        color: "green-text-gradient",
      },
      {
        name: "organization",
        color: "pink-text-gradient",
      },
    ],
    image: "/project1/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1_GC7O72JuYk-_zrmSvsTnIzh8bOuFbga/view?usp=sharing",
  },
  {
    name: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
    description:
      "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
    tags: [
      {
        name: "search",
        color: "blue-text-gradient",
      },
      {
        name: "academic",
        color: "green-text-gradient",
      },
      {
        name: "evaluation",
        color: "pink-text-gradient",
      },
    ],
    image: "/project2/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1b_15tcRgejTH6d96TNeyqGsJoGQp8NI5/view?usp=sharing",
  },
  {
    name: "Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    description:
      "Báo cáo thử nghiệm 3 mức prompt cho các tác vụ học tập với AI, kèm ảnh chụp kết quả và phần phân tích hiệu quả.",
    tags: [
      {
        name: "prompt-engineering",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "learning",
        color: "pink-text-gradient",
      },
    ],
    image: "/project3/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1BS40ZiYwLTgGSf_CrT3Zdu-MPJRQdQJp/view?usp=sharing",
  },
  {
    name: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    description:
      "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
    tags: [
      {
        name: "collaboration",
        color: "blue-text-gradient",
      },
      {
        name: "teamwork",
        color: "green-text-gradient",
      },
      {
        name: "tools",
        color: "pink-text-gradient",
      },
    ],
    image: "/project4/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1de62VNCZu8WTO_ea3lOabqdgVC_5czX4/view?usp=sharing",
  },
  {
    name: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    description:
      "Trưng bày sản phẩm nội dung số hoàn thiện như hình ảnh, video hoặc bài viết được hỗ trợ bởi AI.",
    tags: [
      {
        name: "GenAI",
        color: "blue-text-gradient",
      },
      {
        name: "creation",
        color: "green-text-gradient",
      },
      {
        name: "content",
        color: "pink-text-gradient",
      },
    ],
    image: "/project5/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1G1mbm7KNbUzJrQ1qJOplKuuvrSOisXUq/view?usp=sharing",
  },
  {
    name: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    description:
      "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.",
    tags: [
      {
        name: "ethics",
        color: "blue-text-gradient",
      },
      {
        name: "responsibleAI",
        color: "green-text-gradient",
      },
      {
        name: "integrity",
        color: "pink-text-gradient",
      },
    ],
    image: "/project6/cover.png",
    source_code_link: "https://github.com/",
    report_link: "https://drive.google.com/file/d/1DJ2k6hdRiywqMoU-aRufD8-nIDmu0EEv/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
