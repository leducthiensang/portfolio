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
    title: "1. Tên dự án",
    content:
      'Bài viết: "Cẩm nang Sinh viên Công nghệ: Tối ưu hóa bộ công cụ số trong làm việc nhóm và chạy đồ án".',
  },
  {
    title: "2. Lý do chọn đề tài",
    content:
      "Trong môi trường học tập khối ngành kỹ thuật, việc thực hiện các đồ án nhóm luôn đòi hỏi sự phối hợp chặt chẽ. Từ việc chia sẻ những tệp mã nguồn C++ phức tạp, lưu trữ các sơ đồ mạch điện xoay chiều nặng dung lượng, cho đến quá trình họp bàn gỡ lỗi (debug) thâu đêm, nếu không có phương pháp quản lý tốt, sinh viên rất dễ rơi vào tình trạng chậm tiến độ. Xuất phát từ thực tế đó, em quyết định chọn đề tài thiết kế một bài viết hướng dẫn chuyên sâu về 3 công cụ cốt lõi: Google Drive (Lưu trữ), Trello (Quản lý tiến độ) và Google Meet (Giao tiếp trực tuyến). Mục tiêu của dự án không chỉ dừng lại ở việc tạo ra một ấn phẩm chia sẻ kinh nghiệm hữu ích cho cộng đồng sinh viên, mà còn nhằm ứng dụng và kiểm chứng sức mạnh của các công cụ Trí tuệ nhân tạo (AI) tạo sinh trong quy trình sản xuất nội dung số.",
  },
  {
    title: "3. Các công cụ AI tạo sinh được ứng dụng",
    content:
      "Dự án đã phối hợp sử dụng 3 công cụ AI thuộc 3 lĩnh vực khác nhau: (1) AI tạo văn bản (Gemini): Đóng vai trò như một trợ lý nghiên cứu, giúp phá vỡ 'sự sợ hãi trang giấy trắng' ban đầu, xây dựng dàn ý mạch lạc, tóm tắt các tính năng cốt lõi và đề xuất bộ khung logic. (2) AI tạo hình ảnh (DALL-E 3): Đóng vai trò là họa sĩ minh họa, chịu trách nhiệm trực quan hóa các khái niệm công nghệ khô khan, thiết kế ảnh bìa cyber-tech hiện đại và các icon 3D sắc nét. (3) AI hỗ trợ thiết kế (Canva AI - Magic Workspace): Đóng vai trò là kỹ thuật viên đồ họa, bóc tách nền ảnh minh họa, căn chỉnh chữ thông minh và dàn trang bố cục bài viết chuyên nghiệp.",
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

const Project5Detail = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 5
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Sử Dụng AI Tạo Sinh Để Hỗ Trợ Sáng Tạo Nội Dung
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

        <SectionCard title="I. Giới Thiệu Dự Án">
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

        <SectionCard title="II. Quá Trình Sáng Tạo Và Tích Hợp AI">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            <p>
              Để đảm bảo tính nguyên bản và chất lượng chuyên môn cho bài viết, quy trình sáng tạo được chia làm 3 giai đoạn rõ rệt. Trí tuệ nhân tạo đóng vai trò là bệ phóng ý tưởng và công cụ xử lý thô, trong khi phần lớn khối lượng công việc tinh chỉnh, lồng ghép trải nghiệm và thiết kế cuối cùng do em tự thực hiện.
            </p>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                1. Giai đoạn 1: Xây dựng khung nội dung với AI Văn bản (Gemini)
              </h3>
              <p>
                Thay vì yêu cầu AI viết toàn bộ bài viết dẫn đến nội dung rập khuôn, em sử dụng AI để thiết lập cấu trúc logic và tạo ra các đoạn văn bản nháp.
              </p>
              <p>
                <strong>Quá trình thực hiện:</strong> Em sử dụng kỹ thuật Prompt Engineering, đóng khung vai trò của AI là một sinh viên kỹ thuật dày dặn kinh nghiệm để đưa ra dàn ý.
              </p>
              <p className="bg-white/5 p-4 rounded-lg border border-white/10 italic text-[14px]">
                <strong className="text-white not-italic">Prompt đã sử dụng:</strong> "Đóng vai một sinh viên kỹ thuật dày dặn kinh nghiệm, hãy lập dàn ý chi tiết cho một bài viết blog mang tên: 'Cẩm nang Sinh viên Công nghệ: Tối ưu hóa Google Drive, Trello và Google Meet để chạy đồ án'. Yêu cầu dàn ý có phần Mở bài thu hút, Thân bài nêu rõ tính năng và 1 mẹo thực chiến cho mỗi công cụ, và Kết luận. Giọng văn sắc bén, thực tế."
              </p>

              <div className="flex flex-col gap-6 mt-2">
                <ReportImage
                  src="/project5/gemini_prompt_1.png"
                  alt="Minh chứng: Prompt xây dựng khung nội dung trên Gemini (Phần 1)"
                  onClick={() => setActiveImage("/project5/gemini_prompt_1.png")}
                />
                <ReportImage
                  src="/project5/gemini_prompt_2.png"
                  alt="Minh chứng: Prompt xây dựng khung nội dung trên Gemini (Phần 2)"
                  onClick={() => setActiveImage("/project5/gemini_prompt_2.png")}
                />
              </div>

              <p className="mt-4">
                <strong>Chỉnh sửa và Đóng góp cá nhân:</strong> Dàn ý của AI khá tốt về mặt bố cục nhưng các mẹo thực chiến lại rất chung chung. Em đã quyết định viết lại hơn 70% nội dung chi tiết dựa trên trải nghiệm thực tế. Cụ thể:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1.5">
                <li>Với Google Drive, em bổ sung cách quy hoạch thư mục để lưu trữ các tệp.</li>
                <li>Với Trello, em viết lại ví dụ minh họa, hướng dẫn cách tạo bảng Kanban để quản lý tiến độ.</li>
                <li>Những kiến thức thực tế này giúp bài viết mang tính ứng dụng cao, vượt xa khả năng của AI.</li>
              </ul>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                2. Giai đoạn 2: Sáng tạo hình ảnh trực quan với AI Hình ảnh (DALL-E 3)
              </h3>
              <p>
                Để bài viết thu hút sự chú ý, em cần một ảnh bìa mang phong cách công nghệ và các hình ảnh minh họa nhỏ gọn cho từng phần.
              </p>
              <p>
                <strong>Quá trình thực hiện:</strong> Em nhận thấy AI thường gặp khó khăn khi vẽ văn bản có ý nghĩa, do đó em tránh yêu cầu AI chèn chữ vào ảnh, mà chỉ tập trung vào việc tạo ra bối cảnh và cảm xúc.
              </p>
              <p className="bg-white/5 p-4 rounded-lg border border-white/10 text-[14px]">
                <strong className="text-white">Prompt tạo ảnh bìa:</strong> "A cinematic and modern blog cover illustration of a focused engineering student working on a laptop in a high-tech lab, floating digital icons of cloud storage, kanban boards, and video calls around them. Neon blue and cyan color palette, futuristic tech vibe, highly detailed, 16:9 aspect ratio."
              </p>

              <ReportImage
                src="/project5/dalle_cover.png"
                alt="Minh chứng: Ảnh bìa được tạo bởi DALL-E 3 dựa trên mô tả"
                onClick={() => setActiveImage("/project5/dalle_cover.png")}
              />

              <p className="mt-4">
                <strong>Prompt tạo các icon minh họa:</strong>
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-3">
                <li>
                  <strong className="text-white">Minh họa cho phần Lưu trữ:</strong> "A minimalist flat vector tech icon of a digital cloud with document folders, crisp cyan and white thin line art style, futuristic cyber tech theme, solid dark navy blue background, perfectly clean edges, flat colors only, no glowing effects, no shadows, high resolution."
                </li>
                <li>
                  <strong className="text-white">Minh họa cho phần Quản lý deadline:</strong> "A minimalist flat vector tech icon of a digital Kanban board with task cards, crisp cyan and white thin line art style, futuristic cyber tech theme, solid dark navy blue background, perfectly clean edges, flat colors only, no glowing effects, no shadows, high resolution."
                </li>
                <li>
                  <strong className="text-white">Minh họa cho phần Họp nhóm trực tuyến:</strong> "A minimalist flat vector tech icon of a futuristic webcam lens, crisp cyan and white thin line art style, futuristic cyber tech theme, solid dark navy blue background, perfectly clean edges, flat colors only, no glowing effects, no shadows, high resolution."
                </li>
              </ul>

              <ReportImage
                src="/project5/dalle_cloud_icon.png"
                alt="Minh chứng: Icon đám mây lưu trữ được tạo bởi DALL-E 3"
                onClick={() => setActiveImage("/project5/dalle_cloud_icon.png")}
              />
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                3. Giai đoạn 3: Thiết kế và hoàn thiện với Canva AI
              </h3>
              <p>
                Đây là bước hội tụ, nơi sản phẩm thô từ AI Văn bản và AI Hình ảnh được lắp ráp dưới sự điều phối về mặt thẩm mỹ của con người.
              </p>
              <p>
                <strong>Quá trình thực hiện:</strong> Em sử dụng không gian làm việc của Canva và tích hợp công cụ Canva AI để bóc tách, chỉnh sửa hậu kỳ. Em upload các hình minh họa được tạo từ DALL-E lên Canva, sau đó sử dụng công cụ <em>Xóa nền AI</em> (Background Remover) để xoá hoàn toàn phần nền xanh, chỉ giữ lại các đường nét công nghệ (line art).
              </p>

              <ReportImage
                src="/project5/canva_edit.png"
                alt="Minh chứng: Giao diện bóc tách nền và thiết kế hoàn thiện trên Canva AI"
                onClick={() => setActiveImage("/project5/canva_edit.png")}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="III. So Sánh Và Phân Tích Hiệu Quả Các Công Cụ AI">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            <p>
              Trong dự án này, việc phối hợp đồng thời ba công cụ AI tạo sinh đã mang lại hiệu quả vượt trội so với quy trình sáng tạo truyền thống. Tuy nhiên, mỗi công cụ đều bộc lộ những ưu điểm và hạn chế riêng đòi hỏi sự can thiệp trực tiếp của người dùng.
            </p>

            <h3 className="text-white font-semibold text-[18px]">
              1. So sánh các công cụ đã sử dụng
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-white/10 text-white bg-white/5">
                    <th className="py-4 px-4 w-[15%]">Tiêu chí</th>
                    <th className="py-4 px-4 w-[28%]">AI Văn bản (Gemini/ChatGPT)</th>
                    <th className="py-4 px-4 w-[28%]">AI Hình ảnh (Bing DALL-E 3)</th>
                    <th className="py-4 px-4 w-[29%]">AI Thiết kế (Canva AI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 align-top">
                    <td className="py-4 px-4 text-white font-semibold">Ưu điểm lớn nhất</td>
                    <td className="py-4 px-4 text-secondary">Khả năng tư duy logic tốt, gợi ý dàn ý bài viết mạch lạc, phá bỏ rào cản "sợ trang giấy trắng".</td>
                    <td className="py-4 px-4 text-secondary">Khả năng hiện thực hóa ý tưởng trừu tượng thành hình ảnh sắc nét, mang tính nghệ thuật cao.</td>
                    <td className="py-4 px-4 text-secondary">Tích hợp đa năng, xử lý hậu kỳ nhanh chóng (xóa nền, chỉnh sửa văn bản) chỉ với vài thao tác.</td>
                  </tr>
                  <tr className="border-b border-white/5 align-top bg-white/[0.01]">
                    <td className="py-4 px-4 text-white font-semibold">Hạn chế</td>
                    <td className="py-4 px-4 text-secondary">Văn phong đôi khi còn rập khuôn, thiếu các kinh nghiệm thực tế chuyên ngành kỹ thuật.</td>
                    <td className="py-4 px-4 text-secondary">Khó kiểm soát hoàn toàn các chi tiết nhỏ và thường gặp lỗi khi tạo văn bản (text) trên ảnh.</td>
                    <td className="py-4 px-4 text-secondary">Các tính năng tạo ảnh/chữ tự động chưa đạt độ chi tiết và chuyên sâu như các AI chuyên biệt.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-white font-semibold text-[18px] mt-4">
              2. Nhận định về sự thay đổi quy trình sáng tạo
            </h3>
            <p>
              Sự can thiệp của AI đã chuyển dịch vai trò của em từ một "người thực thi" thuần túy sang vai trò "đạo diễn nội dung".
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong>Về hiệu suất:</strong> AI giúp rút ngắn 70% thời gian ở các khâu tìm kiếm ý tưởng và tạo nguyên liệu thô. Thay vì tốn hàng giờ tìm kiếm ảnh có sẵn trên mạng mà không đúng ý, em chỉ mất vài phút để tạo ra một icon độc bản bằng DALL-E 3.
              </li>
              <li>
                <strong>Về chất lượng:</strong> Việc sử dụng AI văn bản giúp cấu trúc bài viết chuyên nghiệp hơn. Tuy nhiên, điểm yếu lớn nhất của AI là tính cá nhân hóa. Nếu không có sự chỉnh sửa của em trong việc đưa vào các case-study về gỡ lỗi (debug) hay quản lý đồ án, bài viết sẽ trở nên vô hồn.
              </li>
            </ul>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 italic">
              <strong>Kết luận:</strong> AI thực sự là một "cộng sự" đắc lực nhưng không thể thay thế hoàn toàn con người. Hiệu quả của dự án phụ thuộc 50% vào khả năng thiết kế câu lệnh (Prompt Engineering) và 50% vào tư duy thẩm mỹ cũng như kiến thức chuyên môn của người thực hiện để chọn lọc và tinh chỉnh kết quả cuối cùng.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="IV. Phân Tích Vai Trò Của AI Và Các Vấn Đề Đạo Đức Liên Quan">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            <div>
              <h3 className="text-white font-semibold text-[18px] mb-2">
                1. Vai trò của AI trong quy trình sáng tạo bài viết
              </h3>
              <p>
                Trí tuệ nhân tạo (AI) đóng vai trò là một "trợ lý đa năng" giúp tối ưu hóa hiệu suất ở mọi giai đoạn. Thay vì quy trình truyền thống, AI cho phép em thực hiện quy trình song song và thử nghiệm nhanh các concept khác nhau. AI văn bản giúp hệ thống hóa kiến thức nhanh chóng, trong khi AI hình ảnh và thiết kế giúp hiện thực hóa các ý tưởng trực quan mà không yêu cầu kỹ năng hội họa chuyên sâu. Sự thay đổi lớn nhất chính là khả năng tự do hóa sáng tạo: AI giúp người làm kỹ thuật như em có thể tự tay xuất bản một bài viết có tính thẩm mỹ chuyên nghiệp mà không cần phụ thuộc vào bên thứ ba.
              </p>
            </div>

            <div className="w-full h-px bg-white/10 my-2" />

            <div>
              <h3 className="text-white font-semibold text-[18px] mb-2">
                2. Các vấn đề đạo đức cần cân nhắc
              </h3>
              <p>
                Dù mang lại lợi ích to lớn, việc ứng dụng AI trong dự án này cũng đặt ra những vấn đề đạo đức cấp thiết:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-4 mt-3">
                <li>
                  <strong>Tính liêm chính học thuật và sự nguyên bản:</strong> Ranh giới giữa "hỗ trợ sáng tạo" và "đạo văn AI" rất mong manh. Nếu sinh viên chỉ copy-paste hoàn toàn nội dung từ ChatGPT mà không kiểm chứng hay lồng ghép tư duy cá nhân, điều đó không chỉ vi phạm đạo đức học tập mà còn triệt tiêu khả năng tư duy độc lập. Trong dự án này, em luôn đặt nguyên tắc giữ lại tối thiểu 50% nội dung thực tế từ trải nghiệm bản thân để đảm bảo tính xác thực.
                </li>
                <li>
                  <strong>Vấn đề bản quyền hình ảnh (Copyright):</strong> Các AI tạo ảnh như DALL-E 3 được huấn luyện trên hàng tỷ dữ liệu hình ảnh của các nghệ sĩ thực thụ. Việc sử dụng chúng để tạo ra icon hay ảnh bìa đặt ra câu hỏi về quyền lợi của các nhà thiết kế chuyên nghiệp. Do đó, em xem các sản phẩm AI là "concept minh họa" và luôn minh bạch về nguồn gốc tạo ra chúng trong báo cáo.
                </li>
                <li>
                  <strong>Hiện tượng "Ảo giác AI" (Hallucination):</strong> AI có xu hướng bịa đặt các mẹo công nghệ hoặc tính năng phần mềm một cách rất thuyết phục. Nếu người viết thiếu kiến thức nền tảng để đối chiếu, bài viết sẽ lan truyền thông tin sai lệch, gây ảnh hưởng đến cộng đồng sinh viên.
                </li>
              </ul>
              <p className="mt-4 bg-white/5 p-4 rounded-xl border border-white/10 italic">
                <strong>Kết luận:</strong> Đạo đức trong sử dụng AI nằm ở sự Minh bạch và Trách nhiệm. Con người phải luôn giữ vai trò là "màng lọc" cuối cùng để đảm bảo sản phẩm tạo ra vừa có giá trị thẩm mỹ, vừa đúng đắn về mặt thông tin và công bằng về mặt sáng tạo.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="V. Sản Phẩm Cuối Cùng">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            <div className="bg-black/20 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
              <div className="text-center border-b border-white/10 pb-6 mb-2">
                <span className="text-secondary font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider">
                  BÀI VIẾT HOÀN THIỆN
                </span>
                <h1 className="text-[22px] sm:text-[28px] font-extrabold text-white mt-3 leading-tight uppercase">
                  CẨM NANG SINH VIÊN CÔNG NGHỆ: TỐI ƯU HÓA BỘ CÔNG CỤ SỐ TRONG LÀM VIỆC NHÓM VÀ CHẠY ĐỒ ÁN
                </h1>
              </div>

              <p className="italic text-white/95 text-justify">
                Bước vào "mùa đồ án" nỗi ám ảnh lớn nhất của sinh viên không chỉ là những dòng code bug chằng chịt hay những bản vẽ mạch điện phức tạp, mà còn là sự hỗn loạn trong quản lý nhóm. Tệp tin bị thất lạc, deadline bị bỏ lỡ, hay những buổi họp nhóm online thiếu tập trung là những nguyên nhân hàng đầu khiến dự án đình trệ.
              </p>

              <p>
                Để làm chủ quy trình làm việc, hãy cùng tối ưu hóa bộ ba "quyền lực": Google Drive, Trello và Google Meet theo phong cách của dân Công nghệ.
              </p>

              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-[18px]">
                  1. Google Drive: Không chỉ là lưu trữ, đó là "Kho lưu trữ mã nguồn" thông minh
                </h3>
                <p>
                  Nhiều sinh viên coi Drive như một "thùng rác" kỹ thuật số, nơi họ ném mọi thứ lên đó mà không có sự sắp xếp. Đối với các dự án kỹ thuật, điều này là thảm họa.
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    <strong className="text-white">Tính năng cốt lõi:</strong> Lưu trữ đám mây và đồng bộ hóa tài liệu tức thời.
                  </li>
                  <li>
                    <strong className="text-white">Lợi ích làm việc nhóm:</strong> Cho phép nhiều thành viên cùng xử lý báo cáo hoặc tra cứu tài liệu kỹ thuật mọi lúc, mọi nơi.
                  </li>
                  <li>
                    <strong className="text-white">Pro-tip cho dân Tech:</strong> Hãy áp dụng quy tắc đặt tên tệp chuẩn (Naming Convention). Thay vì đặt tên <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">Bao_cao_final_1.docx</code>, hãy dùng cấu trúc: <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">YYYYMMDD_TenDuAn_PhanMuc_NguoiSoan</code>. Việc này giúp bạn tìm kiếm file trong nháy mắt khi cần gộp báo cáo cuối kỳ.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-[18px]">
                  2. Trello: "Đạo diễn" luồng công việc và quản lý Debug
                </h3>
                <p>
                  Làm đồ án nhóm mà chỉ nhắc nhau qua tin nhắn thì chắc chắn sẽ sót việc. Trello giúp bạn trực quan hóa mọi công việc theo mô hình Kanban.
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    <strong className="text-white">Tính năng cốt lõi:</strong> Quản lý nhiệm vụ dưới dạng các thẻ (Card) trên bảng (Board).
                  </li>
                  <li>
                    <strong className="text-white">Lợi ích làm việc nhóm:</strong> Phân công trách nhiệm rõ ràng, tránh tình trạng "người làm không hết việc, người không có việc để làm".
                  </li>
                  <li>
                    <strong className="text-white">Pro-tip cho dân Tech:</strong> Hãy tạo các cột (List) tương ứng với quy trình lập trình: <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">Backlog (Ý tưởng)</code> -&gt; <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">In Progress (Đang làm)</code> -&gt; <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">Testing/Review (Gỡ lỗi)</code> -&gt; <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">Done (Hoàn thành)</code>. Sử dụng các nhãn màu (Label) để đánh dấu mức độ ưu tiên: Màu Đỏ cho "Bug cực nặng", Màu Xanh cho "Tính năng đã ổn định".
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-[18px]">
                  3. Google Meet: "Phòng Lab" trực tuyến cho những đêm chạy deadline
                </h3>
                <p>
                  Họp nhóm online thường bị coi là tốn thời gian, nhưng nếu biết cách, đây sẽ là nơi giải quyết mọi nút thắt của đồ án.
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    <strong className="text-white">Tính năng cốt lõi:</strong> Hội nghị truyền hình trực tuyến độ phân giải cao.
                  </li>
                  <li>
                    <strong className="text-white">Lợi ích làm việc nhóm:</strong> Tương tác trực tiếp, giải quyết các vấn đề phức tạp mà tin nhắn không thể truyền tải hết.
                  </li>
                  <li>
                    <strong className="text-white">Pro-tip cho dân Tech:</strong> Tận dụng tối đa tính năng "Chia sẻ toàn màn hình" (Entire Screen Share) để trình diễn luồng chạy code hoặc mô phỏng mạch điện trực tiếp cho cả nhóm xem. Đặc biệt, hãy luôn cử một người Ghi chép nhanh (Meeting Minutes) ngay trên Google Docs và chia sẻ link trong khung chat để mọi người cùng nắm bắt các quyết định quan trọng sau buổi họp.
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-2 mt-2">
                <h4 className="text-white font-bold text-[16px]">
                  Kết luận:
                </h4>
                <p className="italic text-justify">
                  Công cụ chỉ là phương tiện, tư duy của người sử dụng mới là yếu tố quyết định. Việc làm chủ bộ công cụ Drive - Trello - Meet không chỉ giúp bạn "sống sót" qua những mùa đồ án khắc nghiệt mà còn là bước chuẩn bị quan trọng để thích nghi với môi trường làm việc chuyên nghiệp tại các tập đoàn công nghệ sau này. Hãy bắt đầu tối ưu hóa quy trình làm việc của bạn ngay hôm nay. Chúc các bạn có một mùa đồ án rực rỡ và ít "bug"!
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4 flex flex-col items-center">
                <ReportImage
                  src="/project5/final_product.png"
                  alt="Ảnh minh họa: Cẩm nang sinh viên công nghệ"
                  onClick={() => setActiveImage("/project5/final_product.png")}
                />
              </div>
            </div>
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

export default Project5Detail;
