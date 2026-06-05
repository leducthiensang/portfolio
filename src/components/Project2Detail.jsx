import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const studentInfo = [
  { label: "Họ và tên", value: "Lê Đức Thiện Sang" },
  { label: "Mã sinh viên", value: "25020778" },
  { label: "Lớp học", value: "VNU1001-E252006" },
  { label: "Trường", value: "Đại học Công nghệ - ĐHQGHN" },
];

const craapData = [
  {
    id: 1,
    title: "Does ChatGPT Help With Introductory Programming? (Xue et al., 2024)",
    type: "Bài báo khoa học (IEEE)",
    pros: [
      "(C) Xuất bản năm 2024, rất cập nhật.",
      "(R) Đi thẳng vào môi trường CS1 (lập trình cơ bản), không lan man.",
      "(A1) Đăng trên IEEE, cơ sở dữ liệu học thuật hàng đầu.",
      "(A2) Có dữ liệu thực nghiệm đối chứng rõ ràng."
    ],
    cons: [
      "(P) Viết dưới dạng báo cáo phòng thí nghiệm, ít đưa ra chiến lược ứng dụng AI cho sinh viên tự học ở nhà."
    ],
    score: 5
  },
  {
    id: 2,
    title: "The Widening Gap: The Benefits and Harms of GenAI for Novice Programmers (Denny et al., 2024)",
    type: "Bài báo khoa học (ACM)",
    pros: [
      "(A1) Nguồn từ hội nghị giáo dục danh tiếng ACM ICER.",
      "(A2) Đo lường chính xác bằng công nghệ theo dõi ánh mắt (eye-tracking).",
      "(P) Khách quan, chỉ rõ tác hại của việc lạm dụng AI."
    ],
    cons: [
      "(R) Phân tích sâu về tâm lý học hành vi nhận thức, đôi chỗ hơi hàn lâm so với nhu cầu ứng dụng kỹ thuật đơn thuần."
    ],
    score: 5
  },
  {
    id: 3,
    title: "Integrating Generative AI into Programming Education (Yilmaz & Karaoglan Yilmaz, 2025)",
    type: "Bài báo khoa học (Springer)",
    pros: [
      "(C) Rất mới (2025).",
      "(R) Tập trung vào kỹ năng sửa lỗi cú pháp (debug) do AI hỗ trợ.",
      "(P) Khuyên sinh viên duy trì tư duy độc lập."
    ],
    cons: [
      "(A2) Số liệu đo lường phụ thuộc nhiều vào cảm nhận chủ quan của sinh viên thay vì chấm điểm code thực tế."
    ],
    score: 4
  },
  {
    id: 4,
    title: "Cơ hội và thách thức khi sử dụng AI chatbot trong dạy học lập trình (Nguyễn Thế Dũng, 2024)",
    type: "Bài báo khoa học (Tạp chí GD)",
    pros: [
      "(C) Mới xuất bản năm 2024.",
      "(R) Phân tích môi trường học lập trình tại Việt Nam.",
      "(A1) Tạp chí chính thống thuộc Bộ GD&ĐT."
    ],
    cons: [
      "(A2) Khảo sát gói gọn ở miền Trung và Tây Nguyên, tính đại diện cho sinh viên toàn quốc có thể chưa cao."
    ],
    score: 4
  },
  {
    id: 5,
    title: "Thực trạng ứng dụng ChatGPT trong học lập trình của sinh viên Khoa Công nghệ Thông tin (Nguyễn Đức Tấn, 2025)",
    type: "Bài báo khoa học (Tạp chí KH Yersin)",
    pros: [
      "(C) Cập nhật 2025.",
      "(R) Phân tích thẳng vào kỹ năng dò lỗi thuật toán.",
      "(A2) Có số liệu thống kê định lượng rõ ràng, khách quan."
    ],
    cons: [
      "(P) Viết riêng cho một trường đại học cụ thể, quy mô nghiên cứu mang tính cục bộ."
    ],
    score: 4
  },
  {
    id: 6,
    title: "Phát triển ứng dụng Trí tuệ nhân tạo (AI) trong giáo dục đại học tại Việt Nam: cơ hội, thách thức và giải pháp (Nguyễn Đăng Khoa & Nguyễn Q. Hưng, 2024)",
    type: "Bài báo khoa học (Kỷ yếu ĐH KTQD)",
    pros: [
      "(A1) Tác giả thuộc cơ sở đào tạo lớn, uy tín.",
      "(R) Phù hợp để làm rõ bối cảnh ứng dụng AI cá nhân hóa lộ trình học cho sinh viên năm nhất."
    ],
    cons: [
      "(R) Góc nhìn vĩ mô về quản lý giáo dục, không có các ví dụ cụ thể về phần lập trình."
    ],
    score: 3
  },
  {
    id: 7,
    title: "Generative AI for Software Development (Pereira, 2025)",
    type: "Sách chuyên khảo",
    pros: [
      "(C) Xuất bản 2025.",
      "(A1) NXB O'Reilly hàng đầu về CNTT.",
      "(R) Dễ hiểu, hướng dẫn chi tiết cách dùng AI tạo mã cơ bản."
    ],
    cons: [
      "(A2) Không qua quy trình bình duyệt mù (peer-review) khắt khe như bài báo học thuật.",
      "(P) Có yếu tố thương mại."
    ],
    score: 4
  },
  {
    id: 8,
    title: "AI-Assisted Programming (Taulli, 2024)",
    type: "Sách chuyên khảo",
    pros: [
      "(A1) Nguồn O'Reilly tin cậy.",
      "(R) Tổng hợp tốt các công cụ phù hợp cho người mới bắt đầu lập trình (Copilot, ChatGPT)."
    ],
    cons: [
      "(C) Kiến thức năm 2024 nên chưa bao gồm các mô hình Agentic AI tự động hóa cao ra mắt vào cuối 2025."
    ],
    score: 3
  },
  {
    id: 9,
    title: "Guidance for generative AI in education and research (Miao & Holmes, 2023)",
    type: "Báo cáo tổ chức",
    pros: [
      "(A1) UNESCO, độ uy tín toàn cầu.",
      "(P) Đề cao đạo đức, tính khách quan, bảo vệ tính toàn vẹn trong học tập."
    ],
    cons: [
      "(R) Văn bản hướng dẫn chung, không có các dẫn giải kỹ thuật toán chuyên sâu cho ngành Kỹ thuật máy tính."
    ],
    score: 4
  },
  {
    id: 10,
    title: "AI Revolution in Education (Brief N°1) (World Bank, 2024)",
    type: "Báo cáo tổ chức",
    pros: [
      "(A1) Ngân hàng Thế giới.",
      "(A2) Cung cấp số liệu vĩ mô đáng tin cậy về tác động của AI đến hiệu suất.",
      "(P) Khách quan."
    ],
    cons: [
      "(R) Chủ đề vĩ mô hướng tới nhà làm chính sách, ít ứng dụng trực tiếp cho quá trình viết code của sinh viên."
    ],
    score: 3
  },
  {
    id: 11,
    title: "Introduction to GitHub Copilot (Microsoft, 2025)",
    type: "Nguồn mở (Internet)",
    pros: [
      "(C) Cập nhật liên tục.",
      "(A1) Nguồn học tập chính thức từ Microsoft (chủ sở hữu GitHub).",
      "(A2) Hướng dẫn chính xác thao tác tương tác sinh mã."
    ],
    cons: [
      "(P) Có mục đích thương mại, thúc đẩy lập trình viên làm quen và phụ thuộc vào hệ sinh thái công cụ của Microsoft."
    ],
    score: 4
  },
  {
    id: 12,
    title: "Introducing Stack Overflow AI Assist (Sajor, 2025)",
    type: "Diễn đàn chuyên gia",
    pros: [
      "(R) Sát với thực tế ngành lập trình, kết hợp kiến thức cộng đồng và AI.",
      "(C) Cập nhật công cụ nội bộ mới nhất năm 2025."
    ],
    cons: [
      "(A1) Dạng bài blog (báo mạng), tính học thuật thấp.",
      "(A2) Thiếu số liệu nghiên cứu độc lập.",
      "(P) Có yếu tố quảng bá thương hiệu."
    ],
    score: 3
  }
];

const bibliography = [
  "Denny, P., Luxton-Reilly, A. & Becker, B. A. (2024) 'The Widening Gap: The Benefits and Harms of Generative AI for Novice Programmers', ACM Conference on International Computing Education Research, 20(1), tr. 15-28.",
  "Miao, F. & Holmes, W. (2023) Guidance for generative AI in education and research. Có tại: https://unesdoc.unesco.org/ark:/48223/pf0000386693 (Truy cập: 28 tháng 3 năm 2026).",
  "Microsoft (2025) Introduction to GitHub Copilot. Có tại: https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/ (Truy cập: 28 tháng 3 năm 2026).",
  "Nguyễn, Đ. K. & Nguyễn, Q. H. (2024) 'Phát triển ứng dụng Trí tuệ nhân tạo (AI) trong giáo dục đại học tại Việt Nam: cơ hội, thách thức và giải pháp', Kỷ yếu khoa học Trường Đại học Kinh tế Quốc dân, 1(1), tr. 100-110.",
  "Nguyễn, Đ. T. (2025) 'Thực trạng ứng dụng ChatGPT trong học lập trình của sinh viên Khoa Công nghệ Thông tin – Trường Đại học Yersin Đà Lạt', Tạp chí Khoa học Yersin, 20(4), tr. 60-71.",
  "Nguyễn, T. D. (2024) 'Cơ hội và thách thức khi sử dụng AI chatbot trong dạy học lập trình: nghiên cứu trường hợp ở khu vực miền Trung và Tây Nguyên', Tạp chí Giáo dục, 24(7), tr. 49-54.",
  "Pereira, S. (2025) Generative AI for Software Development. Sebastopol: O'Reilly Media, Inc.",
  "Sajor, P. (2025) Introducing Stack Overflow AI Assist—a tool for the modern developer. Có tại: https://stackoverflow.blog/2025/12/02/introducing-stack-overflow-ai-assist/ (Truy cập: 28 tháng 3 năm 2026).",
  "Taulli, T. (2024) AI-Assisted Programming. Sebastopol: O'Reilly Media, Inc.",
  "World Bank (2024) AI Revolution in Education (Brief N°1, 2024). Có tại: https://documents1.worldbank.org/curated/en/099734306182493324/pdf/ (Truy cập: 28 tháng 3 năm 2026).",
  "Xue, Y., Chen, H., Bai, G. R., Tairas, R. & Huang, Y. (2024) 'Does ChatGPT Help With Introductory Programming? An Experiment of Students Using ChatGPT in CS1', IEEE Xplore, 10(2), tr. 45-55.",
  "Yilmaz, R. & Karaoglan Yilmaz, F. G. (2025) 'Integrating Generative AI into Programming Education: Student Perceptions and the Challenge of Correcting AI Errors', International Journal of Artificial Intelligence in Education, 35(1), tr. 10-25."
];

const Project2Detail = () => {
  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden">
      {/* Background stars animation visual simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 2
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Tìm Kiếm & Đánh Giá Thông Tin Học Thuật
            </h1>
            <p className="text-secondary text-[16px] mt-2 max-w-2xl">
              Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>
          </div>

          {/* Student Card Info Block */}
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
        {/* Section I */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl"
        >
          <h2 className="text-[22px] font-bold text-white mb-4 border-l-4 border-white pl-3">
            I. Giới thiệu chủ đề và phạm vi nghiên cứu
          </h2>
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Trí tuệ nhân tạo (AI) tạo sinh, tiêu biểu như ChatGPT hay GitHub Copilot, là một công nghệ mang tính đột phá được ứng dụng ngày càng mạnh mẽ trong giáo dục đại học những năm gần đây. Sự ra đời của các công cụ này đánh dấu bước phát triển quan trọng trong phương pháp tiếp cận tri thức, hướng tới việc hỗ trợ người học nắm bắt ngôn ngữ lập trình một cách trực quan và hiệu quả.
            </p>
            <p>
              Tuy nhiên, đối với sinh viên năm nhất ngành Kỹ thuật máy tính, việc ứng dụng AI tạo sinh còn gặp nhiều thách thức về nhận thức, phương pháp sử dụng và đặc biệt là nguy cơ ỷ lại, lười tư duy logic. Đề tài <span className="text-white font-semibold">"Tổng quan ứng dụng của Trí tuệ nhân tạo (AI) tạo sinh trong hỗ trợ học tập và lập trình"</span> được chọn nhằm tìm hiểu, phân tích nguồn thông tin học thuật về vai trò, thực tiễn áp dụng và cách thức tận dụng AI hiệu quả, qua đó đánh giá chất lượng và độ tin cậy của các nguồn thông tin hiện có.
            </p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 italic">
              <span className="text-white font-bold not-italic">Phạm vi tìm kiếm:</span> Giới hạn trong giai đoạn 2022–2026, tập trung vào các nguồn tài liệu bằng tiếng Việt và tiếng Anh liên quan đến những ứng dụng thiết thực cho người mới bắt đầu lập trình: giải thích cú pháp nền tảng, gợi ý hướng giải quyết bài toán và hỗ trợ dò tìm, sửa lỗi (debug) mã nguồn; bỏ qua hoàn toàn lập trình hướng đối tượng (class) và không đi sâu phân tích thuật toán lõi của AI.
            </p>
          </div>
        </motion.div>

        {/* Section II */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl"
        >
          <h2 className="text-[22px] font-bold text-white mb-4 border-l-4 border-white pl-3">
            II. Quá trình tìm kiếm và thu thập thông tin
          </h2>
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Để đảm bảo tính khách quan và khoa học, quá trình tìm kiếm tài liệu được thực hiện có hệ thống thông qua việc thiết lập từ khóa và áp dụng các toán tử tìm kiếm nâng cao. Các từ khóa được lựa chọn bám sát vào những khái niệm lập trình nền tảng, bao gồm <span className="text-white font-semibold">"AI tạo sinh học lập trình"</span>, <span className="text-white font-semibold">"ChatGPT giải thích kiểu dữ liệu struct"</span>, và các thuật ngữ tiếng Anh tương đương như <span className="text-white font-semibold">"Generative AI programming basics"</span>, <span className="text-white font-semibold">"LLMs struct assistance"</span>.
            </p>
            <p>
              Để giới hạn đúng phạm vi kiến thức cơ bản, bộ lọc tìm kiếm đã loại trừ các khái niệm phức tạp về lập trình hướng đối tượng bằng cách sử dụng toán tử loại trừ (ví dụ: tìm kiếm với cú pháp <code className="bg-white/10 px-2 py-0.5 rounded font-mono text-white">AI học lập trình -class</code>).
            </p>
            <p>
              Bên cạnh đó, việc thu thập tài liệu được tiến hành đa dạng hóa trên nhiều nền tảng nhằm đáp ứng yêu cầu thẩm định nguồn tin. Cụ thể, thông tin được khai thác từ 5 nhóm nguồn cốt lõi: cơ sở dữ liệu học thuật (như <span className="text-white font-semibold">Google Scholar, VNU-LIC</span>) để tìm kiếm các báo cáo nghiên cứu; tạp chí khoa học chuyên ngành (<span className="text-white font-semibold">IEEE, Springer</span>); diễn đàn chuyên gia để tiếp cận các bài báo có bình duyệt độc lập; sách chuyên khảo về tin học cơ sở; và các nguồn mở uy tín trên internet từ tổ chức giáo dục, nhà phát triển công nghệ.
            </p>
          </div>
        </motion.div>

        {/* Section III */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl"
        >
          <h2 className="text-[22px] font-bold text-white mb-4 border-l-4 border-white pl-3">
            III. Kết quả tìm kiếm và phân tích nguồn
          </h2>
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Tổng cộng tôi thu thập <span className="text-white font-semibold">12 nguồn tài liệu</span> (trong đó có 6 bài báo khoa học, 2 sách chuyên khảo, 2 báo cáo tổ chức, 1 nguồn mở chính thống và 1 bài thảo luận chuyên gia).
            </p>
            <p>
              Các bài báo của <span className="text-white font-semibold">Xue và cộng sự (2024)</span>, <span className="text-white font-semibold">Nguyễn Đức Tấn (2025)</span> và <span className="text-white font-semibold">Nguyễn Thế Dũng (2024)</span> có giá trị thực tiễn cao, với phương pháp phân tích cụ thể cách sinh viên ứng dụng AI để dò lỗi (debug) và tiếp cận các cú pháp cơ bản. Bài của <span className="text-white font-semibold">Denny và cộng sự (2024)</span> cùng <span className="text-white font-semibold">Yilmaz & Karaoglan Yilmaz (2025)</span> cung cấp minh chứng thực nghiệm về hiệu quả cũng như rủi ro ỷ lại vào máy móc, trong khi bài của <span className="text-white font-semibold">Nguyễn Đăng Khoa và Nguyễn Quốc Hưng (2024)</span> làm rõ bối cảnh cá nhân hóa học tập.
            </p>
            <p>
              Báo cáo của <span className="text-white font-semibold">UNESCO (Miao & Holmes, 2023)</span> và <span className="text-white font-semibold">World Bank (2024)</span> bổ sung dữ liệu thực chứng về hiệu suất và khung định hướng đạo đức. Các sách chuyên khảo của <span className="text-white font-semibold">Taulli (2024)</span> và <span className="text-white font-semibold">Pereira (2025)</span> cung cấp nền tảng kiến thức công cụ, trong khi tài liệu hướng dẫn học tập của <span className="text-white font-semibold">Microsoft (2025)</span> và bài viết từ diễn đàn <span className="text-white font-semibold">Stack Overflow (Sajor, 2025)</span> mang lại góc nhìn kỹ thuật thực tế về cách sử dụng công cụ trợ lý mã (coding assistant) để gợi ý cấu trúc dữ liệu và giải quyết lỗi logic.
            </p>
          </div>
        </motion.div>

        {/* Section IV */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl overflow-x-auto"
        >
          <h2 className="text-[22px] font-bold text-white mb-4 border-l-4 border-white pl-3">
            IV. Bảng tổng hợp và đánh giá độ tin cậy của các nguồn thông tin (CRAAP)
          </h2>
          <p className="text-secondary text-[14px] mb-6">
            Bảng dưới đây đánh giá chi tiết 12 tài liệu dựa trên 5 tiêu chí CRAAP: Tính cập nhật (C - Currency), Sự liên quan (R - Relevance), Tác giả/Nguồn gốc (A1 - Authority), Tính chính xác (A2 - Accuracy), và Mục đích (P - Purpose). Thang điểm độ tin cậy từ 1 đến 5.
          </p>

          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-white/10 text-[14px] text-white bg-white/5">
                <th className="py-4 px-3 w-[5%] text-center">TT</th>
                <th className="py-4 px-4 w-[25%]">Tên tài liệu & Tác giả (Năm)</th>
                <th className="py-4 px-4 w-[15%]">Loại nguồn</th>
                <th className="py-4 px-4 w-[25%]">Ưu điểm (CRAAP)</th>
                <th className="py-4 px-4 w-[22%]">Nhược điểm (CRAAP)</th>
                <th className="py-4 px-3 w-[8%] text-center">Độ tin cậy</th>
              </tr>
            </thead>
            <tbody>
              {craapData.map((d, index) => (
                <tr 
                  key={d.id} 
                  className={`border-b border-white/5 text-[13.5px] hover:bg-white/5 transition-colors leading-[1.4] align-top ${
                    index % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                  }`}
                >
                  <td className="py-4 px-3 text-center text-white font-mono">{d.id}</td>
                  <td className="py-4 px-4 text-white font-medium italic">{d.title}</td>
                  <td className="py-4 px-4 text-secondary">{d.type}</td>
                  <td className="py-4 px-4 text-secondary">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      {d.pros.map((pro, idx) => (
                        <li key={idx}>{pro}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-4 text-secondary">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      {d.cons.map((con, idx) => (
                        <li key={idx}>{con}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block bg-[#111111] border border-white/20 px-2.5 py-1 rounded-full text-white font-bold font-mono">
                      {d.score}/5
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Section V */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl"
        >
          <h2 className="text-[22px] font-bold text-white mb-6 border-l-4 border-white pl-3">
            V. Danh mục tài liệu tham khảo
          </h2>
          <ol className="list-decimal pl-5 text-secondary text-[14px] sm:text-[15px] leading-[26px] flex flex-col gap-4">
            {bibliography.map((bib, idx) => (
              <li key={idx} className="pl-2">
                {bib}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Floating Bottom Navigation */}
        <div className="border-t border-white/10 pt-8 flex justify-end items-center text-secondary mt-12">
          <p className="text-[13px]">Lê Đức Thiện Sang | VNU-UET | 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Project2Detail;
