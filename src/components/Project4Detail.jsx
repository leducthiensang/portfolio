import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const studentInfo = [
  { label: "Họ và tên", value: "Lê Đức Thiện Sang" },
  { label: "Mã sinh viên", value: "25020778" },
  { label: "Lớp học", value: "VNU1001-E252006" },
  { label: "Trường", value: "Đại học Công nghệ - ĐHQGHN" },
];

const overviewItems = [
  {
    title: "1. Tóm tắt dự án",
    content:
      'Dự án "English Festival 2026" là sự kiện được tổ chức với quy mô dự kiến khoảng 100 người tham dự. Các hoạt động cốt lõi của dự án bao gồm: vận hành gian hàng trò chơi tiếng Anh, tổ chức cuộc thi Rung chuông vàng song ngữ, giao lưu diễn giả và các tiết mục văn nghệ. Để quản lý dự án hiệu quả, nhóm chúng tôi đã thống nhất số hóa quy trình làm việc nhóm.',
  },
  {
    title: "2. Nhiệm vụ cá nhân",
    content:
      "Với vai trò là Trưởng nhóm, nhiệm vụ chính của tôi trong dự án bao gồm: chủ trì cuộc họp nhóm để lên ý tưởng, khung chương trình và thống nhất bộ quy tắc sử dụng không gian làm việc số (Trello, Google Drive); trực tiếp phụ trách Ban Nội dung, xây dựng kịch bản MC và thể lệ chi tiết cho phần thi Rung chuông vàng với hạn chót hoàn thành vào 20h00 ngày 15/04/2026.",
  },
  {
    title: "3. Các công cụ đã sử dụng",
    content:
      "Nhóm sử dụng kết hợp 3 công cụ thuộc các nhóm chức năng khác nhau: Google Meet để tổ chức cuộc họp đồng bộ, Trello để quản lý tác vụ và theo dõi tiến độ, Google Drive để quản lý tài nguyên, lưu trữ tập trung và phân cấp tài liệu.",
  },
];

const setupItems = [
  {
    title: "1. Quản lý tiến độ trên Trello",
    paragraphs: [
      'Để giám sát luồng công việc của 5 thành viên, tôi đã thiết lập bảng Trello theo nguyên tắc Kanban với 4 cột trạng thái: Ý tưởng (Backlog) -> Cần làm (To Do) -> Đang làm (Doing) -> Hoàn thành (Done).',
      'Đối với nhiệm vụ cá nhân "Lên kịch bản MC và thể lệ Rung chuông vàng", tôi tạo thẻ công việc rõ ràng gồm mô tả chi tiết, deadline đúng mốc 20h00 ngày 15/04/2026 và nhãn màu để phân loại tính chất công việc như Ban Nội dung, Cần duyệt.',
    ],
  },
  {
    title: "2. Lưu trữ tài liệu trên Google Drive",
    paragraphs: [
      "Nhằm lưu trữ tập trung và tránh thất lạc tài liệu, tôi đã xây dựng cấu trúc thư mục trên Google Drive phân cấp rõ ràng theo các ban: Noi_dung, Truyen_thong và Hau_can.",
      "Tôi nghiêm túc thực hiện quy tắc đặt tên file đã thống nhất trong biên bản nhằm tối ưu hóa việc tìm kiếm: [Tên Ban]_[Tên Tài Liệu]_[Người Phụ Trách]. Cụ thể, tệp kịch bản của tôi được lưu với tên NoiDung_KichBanMC_ThienSang.docx.",
      'Ngoài ra, tôi thiết lập quyền truy cập "Bất kỳ ai có đường liên kết đều có thể chỉnh sửa" cho toàn bộ thư mục chung để đảm bảo tính cộng tác tức thời giữa các thành viên.',
    ],
  },
  {
    title: "3. Soạn thảo và cộng tác trực tuyến trên Google Docs",
    paragraphs: [
      "Đây là công cụ chủ chốt giúp tôi triển khai chi tiết kịch bản chương trình. Thay vì làm việc độc lập, tôi dùng Google Docs để tạo không gian soạn thảo mở, nơi các thành viên có thể cùng tham gia đóng góp ý kiến.",
      "Tôi chủ động dùng tính năng Comment để đặt câu hỏi hoặc xin ý kiến từ các bạn phụ trách Ban Hậu cần về tính khả thi của đạo cụ trong kịch bản. Việc tương tác trực tiếp trên văn bản giúp giảm sai sót và tăng tốc độ hoàn thiện tài liệu.",
      "Bên cạnh đó, tôi tận dụng Version History để kiểm soát lịch sử chỉnh sửa, dễ đối chiếu giữa các bản nháp và khôi phục dữ liệu nếu có sự cố trong quá trình cộng tác.",
    ],
  },
];

const assignmentRows = [
  {
    no: 1,
    task: "Lên kịch bản MC và thể lệ phần thi Rung chuông vàng",
    owner: "Lê Đức Thiện Sang",
    deadline: "20h00 ngày 15/04/2026",
    folder: "Noi_dung",
  },
  {
    no: 2,
    task: "Thiết kế ảnh bìa và Banner dọc cho sự kiện",
    owner: "Trần Tấn Tài",
    deadline: "20h00 ngày 15/04/2026",
    folder: "Truyen_thong",
  },
  {
    no: 3,
    task: "Viết bài đăng mở link đăng ký và tạo form đăng ký",
    owner: "Phạm Minh Quang",
    deadline: "20h00 ngày 15/04/2026",
    folder: "Truyen_thong",
  },
  {
    no: 4,
    task: "Lập bảng dự trù kinh phí chi tiết: in ấn, thuê âm thanh ánh sáng, giải thưởng",
    owner: "Đỗ Minh Quân",
    deadline: "20h00 ngày 16/04/2026",
    folder: "Hau_can",
  },
  {
    no: 5,
    task: "Khảo sát giá thuê hội trường và làm form xin phép nhà trường",
    owner: "Trần Mạnh Quân",
    deadline: "20h00 ngày 15/04/2026",
    folder: "Hau_can",
  },
];

const interactions = [
  "Tôi duy trì thói quen cập nhật tiến độ liên tục: khi bắt đầu viết nháp kịch bản thì kéo thẻ sang cột Doing, khi hoàn thiện bản cuối cùng trên Docs thì chuyển sang Done.",
  "Lịch sử hoạt động trên hệ thống ghi nhận tôi đã cập nhật trạng thái thẻ việc và file tài liệu ít nhất 3 lần mỗi tuần.",
  "Mọi trao đổi công việc được quán triệt thực hiện thông qua bình luận trực tiếp trên từng thẻ Trello tương ứng, thay vì để trôi trong tin nhắn chat.",
  "Tôi đã thực hiện hơn 10 lượt tương tác mỗi tuần bằng cách gắn thẻ đồng đội để nhắc nhở và phối hợp.",
  "Tôi phối hợp với Trần Tấn Tài để thống nhất tone màu banner theo nội dung kịch bản MC.",
  "Tôi gắn thẻ Phạm Minh Quang để cung cấp các trường thông tin cần thiết cho form đăng ký.",
  "Tôi nhắc Đỗ Minh Quân về hạn chót 20h00 ngày 16/04/2026 để kịp khớp ngân sách giải thưởng của phần thi Rung chuông vàng.",
];

const toolRows = [
  {
    tool: "Trello (Quản lý tác vụ)",
    pros: [
      "Cung cấp cái nhìn trực quan về dự án theo thời gian thực.",
      "Giúp Trưởng nhóm dễ đánh giá khối lượng công việc để điều phối hợp lý.",
    ],
    cons: [
      "Thành viên chưa quen với việc chủ động cập nhật trạng thái thẻ.",
      "Đòi hỏi Trưởng nhóm phải đôn đốc trong giai đoạn đầu.",
    ],
  },
  {
    tool: "Google Drive & Docs (Quản lý tài liệu)",
    pros: [
      "Khả năng cộng tác thời gian thực giúp rút ngắn khoảng 50% thời gian duyệt kịch bản MC.",
      "Lưu trữ tập trung, hạn chế thất lạc file.",
    ],
    cons: [
      "Đòi hỏi tính kỷ luật cao từ cả nhóm.",
      "Hệ thống dễ lộn xộn nếu một cá nhân không tuân thủ quy tắc đặt tên.",
    ],
  },
  {
    tool: "Google Meet (Giao tiếp nhóm)",
    pros: [
      "Tổ chức họp nhanh chóng, linh hoạt.",
      "Tính năng ghi hình hỗ trợ tốt cho việc lưu trữ biên bản.",
    ],
    cons: [
      "Chất lượng cuộc họp phụ thuộc vào tính ổn định của đường truyền mạng.",
    ],
  },
];

const challengeRows = [
  {
    no: 1,
    challenge: "Trôi thông tin và phân tán giao tiếp",
    analysis:
      "Trao đổi qua nền tảng chat như Zalo hoặc Messenger khiến tin nhắn công việc bị trôi nhanh, rất khó tìm lại các yêu cầu kỹ thuật.",
    solution:
      'Quy định "Giao tiếp gắn liền tác vụ": mọi trao đổi, góp ý phải được bình luận (Comment) và gắn thẻ (@) trực tiếp trên thẻ Trello tương ứng.',
  },
  {
    no: 2,
    challenge: "Quản lý phiên bản tài liệu lỏng lẻo",
    analysis:
      "Khi nhiều người cùng chỉnh sửa kịch bản trên Docs, dễ xảy ra tình trạng lưu đè hoặc xóa nhầm nội dung của người khác.",
    solution:
      'Áp dụng kỷ luật lưu trữ: đặt tên file đính kèm ngày cập nhật (ví dụ: _150426) và dùng "Lịch sử phiên bản" của Docs để đối chiếu, khôi phục.',
  },
  {
    no: 3,
    challenge: "Khó bám sát tiến độ và deadline cá nhân",
    analysis:
      "Với nhiều đầu việc song song, việc Trưởng nhóm đi nhắc nhở thủ công từng người gây tốn thời gian và tạo áp lực quản lý vi mô.",
    solution:
      "Thiết lập deadline bắt buộc trên Trello để hệ thống tự báo đỏ khi đến hạn, đồng thời khuyến khích dùng checklist để chia nhỏ công việc.",
  },
];

const SectionCard = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl"
  >
    <h2 className="text-[22px] font-bold text-white mb-5 border-l-4 border-white pl-3">
      {title}
    </h2>
    {children}
  </motion.section>
);

const ReportImage = ({ src, alt, onClick }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="mt-6 flex flex-col items-center w-full">
      {hasError ? (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/15 rounded-xl p-8 max-w-xl w-full aspect-[16/9] bg-white/[0.02] text-center">
          <p className="text-[32px] opacity-40 mb-3">🖼️</p>
          <p className="text-white text-[15px] font-semibold mb-1">Chèn ảnh minh họa ở đây</p>
          <p className="text-secondary text-[13px] leading-relaxed max-w-[400px] mb-3">
            Để hiển thị ảnh thật, vui lòng chụp ảnh minh họa tương ứng rồi lưu vào đường dẫn:
          </p>
          <code className="bg-white/10 px-3 py-1 rounded font-mono text-white text-[12px] select-all border border-white/5">
            public{src}
          </code>
        </div>
      ) : (
        <div 
          className="relative group cursor-zoom-in overflow-hidden rounded-xl border border-white/10 max-w-xl w-full shadow-lg bg-black/20"
          onClick={onClick}
        >
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-black/70 border border-white/20 px-4 py-2 rounded-full text-white text-[14px] font-medium backdrop-blur-sm">
              🔍 Click để phóng to
            </span>
          </div>
        </div>
      )}
      <span className="text-secondary text-[13px] mt-2 italic text-center px-4">{alt}</span>
    </div>
  );
};

const Project4Detail = () => {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 4
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Kỹ Năng Tổ Chức Và Quản Lý Công Việc Nhóm
            </h1>
            <p className="text-secondary text-[16px] mt-2 max-w-2xl">
              Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>
          </div>

          <div className="bg-tertiary/60 border border-white/10 backdrop-blur-md p-6 rounded-2xl w-full md:w-auto min-w-[320px] shadow-xl">
            <h3 className="text-white font-bold text-[18px] border-b border-white/10 pb-2 mb-3">
              Thông Tin Sinh Viên
            </h3>
            <div className="flex flex-col gap-2 text-[15px]">
              {studentInfo.map((item) => (
                <p key={item.label} className="text-secondary">
                  {item.label}:{" "}
                  <span className="text-white font-semibold">{item.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <SectionCard title="I. Mô Tả Tổng Quan Về Dự Án">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            {overviewItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-white font-semibold text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-2">{item.content}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="II. Thiết Lập Và Sử Dụng Công Cụ Hợp Tác Trực Tuyến">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            {setupItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-black/20 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-[18px]">
                  {item.title}
                </h3>
                <div className="mt-3 flex flex-col gap-3">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {index === 0 && (
                  <ReportImage
                    src="/project4/trello_kanban.png"
                    alt="Ảnh minh họa: Thiết lập bảng tiến độ (Kanban) trên Trello"
                    onClick={() => setActiveImage("/project4/trello_kanban.png")}
                  />
                )}
                {index === 1 && (
                  <div className="flex flex-col gap-6">
                    <ReportImage
                      src="/project4/drive_sharing.png"
                      alt="Minh chứng: Thiết lập quyền truy cập 'Bất kỳ ai có đường liên kết đều có thể chỉnh sửa'"
                      onClick={() => setActiveImage("/project4/drive_sharing.png")}
                    />
                    <ReportImage
                      src="/project4/drive_folders.png"
                      alt="Minh chứng: Cấu trúc thư mục phân cấp và quy tắc đặt tên file thống nhất"
                      onClick={() => setActiveImage("/project4/drive_folders.png")}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="III. Quản Lí Tác Vụ Và Tương Tác Nhóm">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <h3 className="text-white font-semibold text-[18px]">
              1. Phân công nhiệm vụ và theo dõi tiến độ
            </h3>
            <p>
              Dựa trên biên bản họp ngày 12/04/2026, toàn bộ công việc của dự án
              được trực quan hóa trên bảng Trello. Tôi đã trực tiếp giám sát việc
              tạo thẻ cho các thành viên, đảm bảo 100% đầu việc đều tuân thủ quy
              tắc quản lý dự án đã đề ra.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="border-b border-white/10 text-white bg-white/5 align-top">
                  <th className="py-4 px-4 w-[6%]">STT</th>
                  <th className="py-4 px-4 w-[40%]">Nhiệm vụ chi tiết</th>
                  <th className="py-4 px-4 w-[16%]">Phụ trách</th>
                  <th className="py-4 px-4 w-[20%]">Deadline</th>
                  <th className="py-4 px-4 w-[18%]">Thư mục lưu trữ</th>
                </tr>
              </thead>
              <tbody>
                {assignmentRows.map((row, index) => (
                  <tr
                    key={row.no}
                    className={`border-b border-white/5 align-top ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold">
                      {row.no}
                    </td>
                    <td className="py-4 px-4 text-secondary">{row.task}</td>
                    <td className="py-4 px-4 text-secondary">{row.owner}</td>
                    <td className="py-4 px-4 text-secondary">{row.deadline}</td>
                    <td className="py-4 px-4 text-secondary">{row.folder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Đối với nhiệm vụ cá nhân là "Lên kịch bản MC và thể lệ phần thi
              Rung chuông vàng", tôi đã đảm bảo thẻ công việc đạt chuẩn với mô
              tả chi tiết đầy đủ và hạn chót rõ ràng là 20h00 ngày 15/04/2026.
            </p>

            <h3 className="text-white font-semibold text-[18px] mt-2">
              2. Quy trình làm việc và tương tác hỗ trợ thành viên
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {interactions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-[16px] mt-4">
              Minh chứng bình luận trao đổi và gắn thẻ đồng đội trên Trello:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ReportImage
                src="/project4/comment_tantai.png"
                alt="Minh chứng: Bình luận trao đổi công việc với bạn Trần Tấn Tài"
                onClick={() => setActiveImage("/project4/comment_tantai.png")}
              />
              <ReportImage
                src="/project4/comment_minhquang.png"
                alt="Minh chứng: Gắn thẻ trao đổi công việc với bạn Phạm Minh Quang"
                onClick={() => setActiveImage("/project4/comment_minhquang.png")}
              />
              <ReportImage
                src="/project4/comment_minhquan.png"
                alt="Minh chứng: Gắn thẻ đôn đốc công việc với bạn Đỗ Minh Quân"
                onClick={() => setActiveImage("/project4/comment_minhquan.png")}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="IV. Đánh Giá Hiệu Quả Công Cụ">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <h3 className="text-white font-semibold text-[18px]">
              1. Đánh giá hiệu quả của các công cụ số đối với công việc cá nhân
            </h3>
            <p>
              Quá trình áp dụng hệ sinh thái công cụ số vào dự án "English
              Festival 2026" đã mang lại sự thay đổi lớn trong cách thức quản lý
              công việc của cá nhân tôi với vai trò Trưởng nhóm.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="border-b border-white/10 text-white bg-white/5 align-top">
                  <th className="py-4 px-4 w-[18%]">Công cụ sử dụng</th>
                  <th className="py-4 px-4 w-[41%]">
                    Ưu điểm / Hiệu quả mang lại
                  </th>
                  <th className="py-4 px-4 w-[41%]">
                    Nhược điểm / Khó khăn khi sử dụng
                  </th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map((row, index) => (
                  <tr
                    key={row.tool}
                    className={`border-b border-white/5 align-top ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold">
                      {row.tool}
                    </td>
                    <td className="py-4 px-4 text-secondary">
                      <ul className="list-disc pl-5 flex flex-col gap-2">
                        {row.pros.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-secondary">
                      <ul className="list-disc pl-5 flex flex-col gap-2">
                        {row.cons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <h3 className="text-white font-semibold text-[18px]">
              2. Thách thức gặp phải và giải pháp khắc phục
            </h3>
            <p>
              Dù đã thống nhất biên bản từ đầu, quá trình thực thi thực tế vẫn
              phát sinh nhiều điểm nghẽn. Dưới đây là 3 thách thức lớn nhất và
              cách tôi cùng nhóm giải quyết:
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1080px]">
              <thead>
                <tr className="border-b border-white/10 text-white bg-white/5 align-top">
                  <th className="py-4 px-4 w-[6%]">STT</th>
                  <th className="py-4 px-4 w-[18%]">Thách thức</th>
                  <th className="py-4 px-4 w-[38%]">Phân tích vấn đề</th>
                  <th className="py-4 px-4 w-[38%]">Giải pháp khắc phục</th>
                </tr>
              </thead>
              <tbody>
                {challengeRows.map((row, index) => (
                  <tr
                    key={row.no}
                    className={`border-b border-white/5 align-top ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold">
                      {row.no}
                    </td>
                    <td className="py-4 px-4 text-secondary">
                      {row.challenge}
                    </td>
                    <td className="py-4 px-4 text-secondary">{row.analysis}</td>
                    <td className="py-4 px-4 text-secondary">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="V. Kết Luận">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Thông qua quá trình tổ chức và điều hành dự án "English Festival
              2026", tôi nhận thấy việc quản trị một nhóm làm việc không chỉ dừng
              lại ở việc giao việc bằng miệng, mà cốt lõi nằm ở khả năng chuẩn
              hóa quy trình.
            </p>
            <p>
              Bài tập nhóm lần này đã giúp cá nhân tôi nâng cao đáng kể kỹ năng
              sử dụng các công cụ nền tảng số. Việc kết hợp đồng bộ giữa Google
              Meet để họp và định hướng, Trello để kiểm soát tiến độ trực quan,
              và hệ sinh thái Google Workspace để quản lý tài liệu, cộng tác đã
              tạo ra một luồng công việc thông suốt, giảm thiểu sai sót kỹ thuật
              và tăng tính tự giác của mỗi cá nhân.
            </p>
          </div>
        </SectionCard>

        <div className="border-t border-white/10 pt-8 flex justify-end items-center text-secondary">
          <p className="text-[13px]">Lê Đức Thiện Sang | VNU-UET | 2026</p>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <img
              src={activeImage}
              alt="Report Page Zoomed"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <button
              className="absolute -top-12 right-0 text-white text-3xl font-bold bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project4Detail;
