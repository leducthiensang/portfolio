import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const studentInfo = [
  { label: "Họ và tên", value: "Lê Đức Thiện Sang" },
  { label: "Mã sinh viên", value: "25020778" },
  { label: "Lớp học", value: "VNU1001-E252006" },
  { label: "Trường", value: "Đại học Công nghệ - ĐHQGHN" },
];

const taskSelections = [
  {
    title: "1. Tác vụ 1: Giải thích khái niệm (Lý thuyết)",
    content:
      "Yêu cầu AI giải thích bản chất của kiểu dữ liệu cấu trúc (struct) trong C++.",
    goal:
      "Kiểm tra khả năng của AI trong việc đơn giản hóa, trực quan hóa kiến thức trừu tượng thành các ví dụ dễ hiểu cho người mới học, đồng thời giới hạn thông tin để không lan man sang các khái niệm vượt cấp gây nhiễu.",
  },
  {
    title: "2. Tác vụ 2: Hỗ trợ gỡ lỗi - Debug (Tư duy giải quyết vấn đề)",
    content:
      "Cung cấp cho AI một đoạn code C++ có lỗi logic (ví dụ: lỗi truyền tham trị thay vì tham chiếu khi xử lý struct) và yêu cầu hỗ trợ.",
    goal:
      "Đánh giá khả năng AI đóng vai trò người hướng dẫn (mentor). AI phải tuân thủ nghiêm ngặt việc chỉ đưa ra câu hỏi gợi mở (hints) để người học tự tư duy sửa lỗi, thay vì tự động viết lại đoạn code hoàn chỉnh.",
  },
  {
    title: "3. Tác vụ 3: Thiết kế bài tập thực hành (Kiểm tra và Đánh giá)",
    content:
      "Yêu cầu AI tạo ra một bài tập thực hành về struct với đầy đủ mô tả định dạng đầu vào/đầu ra (Input/Output) và các Test cases.",
    goal:
      "Thử nghiệm khả năng tạo môi trường kiểm tra độc lập của AI, yêu cầu đóng vai người ra đề khắt khe và tuyệt đối không cung cấp mã nguồn lời giải.",
  },
];

const promptRows = [
  {
    task: "1. Giải thích khái niệm",
    basic: '"struct trong c++ là gì"',
    improved:
      '"Giải thích khái niệm struct trong C++ một cách ngắn gọn, dễ hiểu nhất cho sinh viên năm nhất. Có ví dụ minh họa."',
    advanced:
      '"Hãy đóng vai một trợ giảng lập trình tâm huyết. Giải thích khái niệm struct trong C++ bằng cách sử dụng một hình ảnh so sánh thực tế (ví dụ: một chiếc thẻ sinh viên hoặc một hộp bút). Yêu cầu: 1. Giải thích tại sao chúng ta cần struct thay vì chỉ dùng các biến đơn lẻ. 2. Đưa ra một ví dụ code C++ cực kỳ đơn giản. 3. Tuyệt đối không nhắc đến khái niệm \'Class\' để tránh gây nhầm lẫn cho người mới."',
  },
  {
    task: "2. Hỗ trợ gỡ lỗi (Debug)",
    basic: '"Sửa lỗi đoạn code C++ này giúp tôi: [Mã nguồn]"',
    improved:
      '"Đoạn code C++ dùng struct này in ra 18 thay vì 19. Hãy tìm lỗi sai và giải thích lý do tại sao lại sai: [Mã nguồn]"',
    advanced:
      '"Hãy đóng vai một mentor lập trình. Đoạn code C++ của tôi chạy ra kết quả 18 thay vì 19. Yêu cầu: 1. Tuyệt đối KHÔNG được viết lại đoạn code đã sửa lỗi. 2. Hãy chỉ ra hàm nào đang có vấn đề. 3. Đặt một câu hỏi gợi ý (hint) về cách truyền dữ liệu vào hàm để tôi tự suy nghĩ và tự sửa code. Code của tôi: [Dán đoạn code vào đây]"',
  },
  {
    task: "3. Thiết kế bài tập",
    basic: '"Cho tôi bài tập về struct trong C++"',
    improved:
      '"Tạo 1 bài tập C++ về quản lý sinh viên dùng struct. Viết yêu cầu rõ ràng."',
    advanced:
      '"Hãy đóng vai người ra đề thi môn Lập trình. Tạo 1 bài tập thực hành C++ về quản lý sách trong thư viện bằng struct. Yêu cầu: 1. Trình bày rõ mô tả bài toán, định dạng đầu vào (Input) và đầu ra (Output). 2. Cung cấp 2 Test cases (ví dụ mẫu) để kiểm tra. 3. Tuyệt đối KHÔNG cung cấp code lời giải hay bất kỳ gợi ý code nào. Chỉ đưa đề bài."',
  },
];

const comparisonRows = [
  {
    task: "Tác vụ 1: Giải thích khái niệm struct",
    basic:
      'Cung cấp lượng thông tin quá lớn (over-information). Tự động đưa ra bảng so sánh với class, đề cập các khái niệm nâng cao (kế thừa, public/private) gây nhiễu loạn và quá tải nhận thức cho người mới bắt đầu.',
    advanced:
      'Đạt hiệu quả sư phạm tối đa. Nhờ lệnh cấm nghiêm ngặt ("Tuyệt đối không nhắc đến Class"), AI loại bỏ hoàn toàn các thông tin vượt cấp. Phép ẩn dụ so sánh với "Thẻ Căn cước công dân" giúp người học hình dung cách bộ nhớ nhóm các dữ liệu trực quan và sinh động.',
  },
  {
    task: "Tác vụ 2: Hỗ trợ gỡ lỗi (Debug)",
    basic:
      "Khả năng phát hiện lỗi rất nhanh (truyền tham trị - Pass by Value). Tuy nhiên, yếu điểm chí mạng là cung cấp sẵn đoạn code đã sửa hoàn chỉnh, triệt tiêu hoàn toàn tư duy tự sửa lỗi của người học.",
    advanced:
      'Hành xử chuẩn mực như một người hướng dẫn (Mentor). Nhờ ràng buộc "Tuyệt đối KHÔNG viết lại code", AI chỉ khoanh vùng vị trí lỗi và đặt câu hỏi phản biện, buộc người học phải động não, tự xâu chuỗi lý thuyết để tự sửa mã nguồn (thêm ký tự &).',
  },
  {
    task: "Tác vụ 3: Thiết kế bài tập thực hành",
    basic:
      "Mặc dù mức độ chi tiết của đề bài tăng lên, AI vẫn mắc lỗi hệ thống là tự động đính kèm toàn bộ mã nguồn lời giải (Code mẫu) ngay bên dưới đề bài, phá hỏng mục đích tự kiểm tra độc lập.",
    advanced:
      "Thiết lập thành công môi trường thử thách giả lập chuẩn mực. Đề bài có mô tả rõ ràng, ràng buộc định dạng Input/Output khắt khe và có Test case đối chiếu. AI tuân thủ tuyệt đối lệnh cấm, không làm rò rỉ bất kỳ đoạn code lời giải nào.",
  },
];

const promptAnalysis = [
  {
    title: "1. Prompt Cơ bản (Zero-shot): Thụ động và Gây nhiễu",
    structure: "Chỉ đưa ra từ khóa, thiếu ngữ cảnh.",
    outcome:
      'Gemini phản hồi theo bản năng "trích xuất dữ liệu". Kết quả thường bị quá tải thông tin (Over-information), đưa ra các kiến thức vượt cấp (như Class, OOP) gây nhiễu loạn nhận thức cho sinh viên năm nhất. Người học rơi vào trạng thái thụ động, dễ sao chép code có sẵn mà không hiểu bản chất.',
  },
  {
    title: "2. Prompt Cải tiến (Context-setting): Định hướng bề nổi",
    structure:
      "Đã xác định được đối tượng (sinh viên) và yêu cầu hình thức (ngắn gọn).",
    outcome:
      'Câu trả lời đã "sạch" và dễ đọc hơn. Tuy nhiên, AI vẫn chưa thoát khỏi thói quen "làm hộ". Gemini vẫn tự động cung cấp mã nguồn lời giải, khiến ranh giới giữa việc "hỗ trợ học tập" và "viết hộ bài" vẫn còn rất mong manh.',
  },
  {
    title:
      "3. Prompt Nâng cao (Role-play & Negative Constraints): Đòn bẩy tư duy",
    structure:
      'Sử dụng kỹ thuật đóng vai (Mentor) kết hợp chặt chẽ với Ràng buộc tiêu cực (Negative Constraints - lệnh cấm "Tuyệt đối không...").',
    outcome:
      'Việc thêm câu lệnh "Không viết lại code" đã ép Gemini phải vượt qua bản năng giải quyết vấn đề hộ để chuyển sang phương pháp sư phạm gợi mở. Kỹ thuật đóng vai giúp AI thay đổi trọng số ngôn ngữ, ưu tiên dùng ẩn dụ (Thẻ CCCD) thay cho thuật ngữ khô khan. Kết quả là người học buộc phải tham gia vào quá trình xử lý logic cuối cùng, biến AI từ công cụ "làm hộ" thành "trợ giảng" kích thích tư duy phản biện.',
  },
];

const promptPrinciples = [
  {
    title: '1. Nguyên tắc "Định danh" (Persona Setting)',
    content:
      'Luôn bắt đầu bằng việc gán cho AI một vai trò cụ thể (Ví dụ: "Hãy đóng vai một Mentor", "Đóng vai người ra đề").',
    effect:
      'Việc này giúp Gemini điều chỉnh "tông giọng" và phương pháp tiếp cận. Thay vì liệt kê dữ liệu khô khan, AI sẽ ưu tiên sử dụng ẩn dụ, ngôn từ khích lệ và phương pháp sư phạm phù hợp với trình độ người học.',
  },
  {
    title: '2. Nguyên tắc "Ràng buộc tiêu cực" (Negative Constraints)',
    content:
      'Sử dụng các lệnh cấm như "Tuyệt đối không...", "Cấm viết lại code...", "Không nhắc đến...".',
    effect:
      'Đây là kỹ thuật quan trọng nhất trong học tập. Nó giúp kiểm soát "bản năng" làm hộ của AI, ép mô hình phải giữ lại thông tin cốt lõi để người học tự tư duy, từ đó tránh được sự lệ thuộc thụ động.',
  },
  {
    title: '3. Nguyên tắc "Ngữ cảnh hóa đối tượng" (Context & Specificity)',
    content:
      'Cung cấp thông tin chi tiết về người dùng (Ví dụ: "Giải thích cho sinh viên năm nhất", "Dùng ví dụ thực tế").',
    effect:
      'Giúp AI khoanh vùng kiến thức (Latent Space). Điều này triệt tiêu tình trạng "ảo giác kiến thức" hoặc đưa ra các thông tin quá nâng cao (như Class, OOP) gây quá tải nhận thức cho người mới bắt đầu.',
  },
  {
    title: '4. Nguyên tắc "Gợi mở Socratic" (Socratic Questioning)',
    content:
      "Yêu cầu AI phản hồi bằng các câu hỏi gợi ý thay vì đưa ra đáp án trực tiếp.",
    effect:
      "Tạo ra một vòng lặp tư duy. Người học phải xâu chuỗi các mảnh ghép kiến thức lại để tự hoàn thiện bài tập, giúp ghi nhớ lâu hơn và hiểu sâu bản chất vấn đề.",
  },
];

const testResults = {
  0: {
    title: "1. Giải thích khái niệm (Lý thuyết)",
    basic: {
      prompt: '"struct trong c++ là gì"',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-0.jpg",
      analysis: "Gemini phản hồi theo bản năng \"trích xuất dữ liệu\" thông thường. Kết quả chứa lượng thông tin quá lớn (over-information), tự động so sánh với class và đưa vào các khái niệm hướng đối tượng phức tạp như access specifiers (public, private) gây nhiễu loạn cho sinh viên năm nhất."
    },
    improved: {
      prompt: '"Giải thích khái niệm struct trong C++ một cách ngắn gọn, dễ hiểu nhất cho sinh viên năm nhất. Có ví dụ minh họa."',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-1.jpg",
      analysis: "Câu trả lời đã ngắn gọn và dễ hiểu hơn rất nhiều, tập trung vào cú pháp khai báo cơ bản của struct SinhVien. Tuy nhiên, AI vẫn tự động cung cấp mã nguồn đầy đủ mà chưa kích thích tư duy tự làm của người học."
    },
    advanced: {
      prompt: '"Hãy đóng vai một trợ giảng lập trình tâm huyết. Giải thích khái niệm struct trong C++ bằng cách sử dụng một hình ảnh so sánh thực tế (ví dụ: một chiếc thẻ sinh viên hoặc một hộp bút). Yêu cầu: 1. Giải thích tại sao chúng ta cần struct thay vì chỉ dùng các biến đơn lẻ. 2. Đưa ra một ví dụ code C++ cực kỳ đơn giản. 3. Tuyệt đối không nhắc đến khái niệm \'Class\' để tránh gây nhầm lẫn cho người mới."',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-2.jpg",
      analysis: "Đạt hiệu quả sư phạm cao nhất. Bằng cách sử dụng phép ẩn dụ \"Thẻ Căn cước công dân\" (CCCD) để ví dụ, AI giúp người học dễ dàng hình dung việc gom nhóm các thuộc tính thông tin khác nhau. Lệnh cấm nhắc đến Class giúp loại bỏ hoàn toàn nhiễu thông tin."
    }
  },
  1: {
    title: "2. Hỗ trợ gỡ lỗi - Debug (Tư duy giải quyết vấn đề)",
    basic: {
      prompt: '"Sửa lỗi đoạn code C++ này giúp tôi: [Mã nguồn]"',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-3.jpg",
      analysis: "AI phát hiện lỗi truyền tham trị nhanh chóng, nhưng ngay lập tức cung cấp đoạn code hoàn chỉnh đã sửa lỗi, khiến sinh viên mất đi cơ hội tự sửa code."
    },
    improved: {
      prompt: '"Đoạn code C++ dùng struct này in ra 18 thay vì 19. Hãy tìm lỗi sai và giải thích lý do tại sao lại sai: [Mã nguồn]"',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-4.jpg",
      analysis: "AI chỉ ra lỗi và giải thích kỹ nguyên lý hoạt động của cơ chế truyền tham trị (Pass by Value). Tuy nhiên, AI vẫn đề xuất code sửa lỗi trực tiếp."
    },
    advanced: {
      prompt: '"Hãy đóng vai một mentor lập trình. Đoạn code C++ của tôi chạy ra kết quả 18 thay vì 19. Yêu cầu: 1. Tuyệt đối KHÔNG được viết lại đoạn code đã sửa lỗi. 2. Hãy chỉ ra hàm nào đang có vấn đề. 3. Đặt một câu hỏi gợi ý (hint) về cách truyền dữ liệu vào hàm để tôi tự suy nghĩ và tự sửa code. Code của tôi: [Dán đoạn code vào đây]"',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-5.jpg",
      analysis: "AI đóng vai Mentor xuất sắc. Tuân thủ nghiêm ngặt việc KHÔNG sửa code hộ. AI chỉ khoanh vùng hàm tangTuoi đang có vấn đề và đặt câu hỏi gợi mở về cách truyền tham chiếu (&), thúc đẩy sinh viên tự giải quyết vấn đề."
    }
  },
  2: {
    title: "3. Thiết kế bài tập thực hành (Kiểm tra và Đánh giá)",
    basic: {
      prompt: '"Cho tôi bài tập về struct trong C++"',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-6.jpg",
      analysis: "AI đưa ra bài tập cơ bản nhưng lại đính kèm sẵn code giải mẫu ở ngay bên dưới, triệt tiêu động lực làm bài tự lập của sinh viên."
    },
    improved: {
      prompt: '"Tạo 1 bài tập C++ về quản lý sinh viên dùng struct. Viết yêu cầu rõ ràng."',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-7.jpg",
      analysis: "Yêu cầu đề bài rõ ràng và chi tiết hơn. Tuy nhiên, AI vẫn tiếp tục đính kèm mã nguồn lời giải chi tiết bên dưới, không thích hợp cho việc tự kiểm tra."
    },
    advanced: {
      prompt: '"Hãy đóng vai người ra đề thi môn Lập trình. Tạo 1 bài tập thực hành C++ về quản lý sách trong thư viện bằng struct. Yêu cầu: 1. Trình bày rõ mô tả bài toán, định dạng đầu vào (Input) và đầu ra (Output). 2. Cung cấp 2 Test cases (ví dụ mẫu) để kiểm tra. 3. Tuyệt đối KHÔNG cung cấp code lời giải hay bất kỳ gợi ý code nào. Chỉ đưa đề bài."',
      img: "/project3/LeDucThienSang-25020778-Bai3-images-8.jpg",
      analysis: "Đạt yêu cầu tối đa. Đề bài có cấu trúc chặt chẽ gồm mô tả toán học, định dạng Input/Output chuẩn, 2 Test cases rõ ràng. AI tuân thủ tuyệt đối quy định không đưa ra bất kỳ gợi ý code hay lời giải mẫu nào."
    }
  }
};

const ReportImage = ({ src, alt, onClick }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="mt-4 flex flex-col items-center w-full">
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

const Project3Detail = () => {
  const [selectedTask, setSelectedTask] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("basic");
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 3
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Viết Prompt Hiệu Quả Cho Các Tác Vụ Học Tập
            </h1>
            <p className="text-secondary text-[16px] mt-2 max-w-2xl">
              Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>
            <a
              href="https://drive.google.com/file/d/1BS40ZiYwLTgGSf_CrT3Zdu-MPJRQdQJp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#915EFF] hover:bg-[#804dee] text-white font-semibold text-[14px] px-6 py-2.5 rounded-xl transition-colors duration-200 shadow-md"
            >
              Xem file báo cáo
            </a>
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

        <SectionCard title="I. Chủ Đề Và Công Cụ">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              <span className="text-white font-semibold">
                1. Chủ đề thực hiện:
              </span>{" "}
              Ứng dụng AI làm "Trợ giảng cá nhân" hỗ trợ học Lập trình cơ bản,
              trọng tâm là tìm hiểu lý thuyết, thực hành và gỡ lỗi (debug) kiểu
              dữ liệu cấu trúc (struct) trong ngôn ngữ C++.
            </p>
            <p>
              <span className="text-white font-semibold">
                2. Công cụ AI sử dụng:
              </span>{" "}
              Mô hình ngôn ngữ lớn Gemini.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="II. Lựa Chọn Tác Vụ Học Tập">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            <p>
              Để đánh giá toàn diện hiệu quả của AI trong việc hỗ trợ học lập
              trình, báo cáo lựa chọn 3 tác vụ cốt lõi theo trình tự từ lý
              thuyết đến thực hành:
            </p>
            {taskSelections.map((task) => (
              <div
                key={task.title}
                className="bg-black/20 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-[18px]">
                  {task.title}
                </h3>
                <p className="mt-3">
                  <span className="text-white font-medium">- Nội dung:</span>{" "}
                  {task.content}
                </p>
                <p className="mt-2">
                  <span className="text-white font-medium">- Mục tiêu:</span>{" "}
                  {task.goal}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="III. Các Phiên Bản Prompt">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Để đánh giá sự khác biệt về chất lượng đầu ra của AI dựa trên kỹ
              thuật đặt câu hỏi, hệ thống Prompt được thiết kế theo 3 phiên bản:
              Cơ bản, Cải tiến và Nâng cao cho từng tác vụ học tập.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                <tr className="border-b border-white/10 text-white bg-white/5 align-top">
                  <th className="py-4 px-4 w-[16%]">Tác vụ học tập</th>
                  <th className="py-4 px-4 w-[18%]">Prompt Cơ bản</th>
                  <th className="py-4 px-4 w-[28%]">Prompt Cải tiến</th>
                  <th className="py-4 px-4 w-[38%]">Prompt Nâng cao</th>
                </tr>
              </thead>
              <tbody>
                {promptRows.map((row, index) => (
                  <tr
                    key={row.task}
                    className={`border-b border-white/5 align-top ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold leading-[26px]">
                      {row.task}
                    </td>
                    <td className="py-4 px-4 text-secondary leading-[26px]">
                      {row.basic}
                    </td>
                    <td className="py-4 px-4 text-secondary leading-[26px]">
                      {row.improved}
                    </td>
                    <td className="py-4 px-4 text-secondary leading-[26px]">
                      {row.advanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="IV. Thử Nghiệm Và So Sánh Kết Quả">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-4">
            <h3 className="text-white font-semibold text-[18px]">
              1. Kết quả thử nghiệm
            </h3>
            <p>
              Dưới đây là chi tiết các cuộc thử nghiệm thực tế với Gemini. Bạn có thể lựa chọn từng tác vụ học tập và cấp độ prompt để xem ảnh chụp màn hình kết quả và phân tích chi tiết.
            </p>

            {/* Task Tabs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTask(idx)}
                  className={`px-5 py-3 rounded-xl font-semibold text-[14px] transition-all duration-200 border text-left leading-normal ${
                    selectedTask === idx
                      ? "bg-white text-black border-white"
                      : "bg-[#111111] text-secondary border-white/10 hover:border-white/30"
                  }`}
                >
                  {testResults[idx].title}
                </button>
              ))}
            </div>

            {/* Level Tabs */}
            <div className="flex gap-2 mt-4 border-b border-white/10 pb-4">
              {[
                { key: "basic", label: "Mức độ cơ bản" },
                { key: "improved", label: "Mức độ cải tiến" },
                { key: "advanced", label: "Mức độ nâng cao" }
              ].map((lvl) => (
                <button
                  key={lvl.key}
                  onClick={() => setSelectedLevel(lvl.key)}
                  className={`px-4 py-2 rounded-lg font-medium text-[13px] transition-all duration-200 ${
                    selectedLevel === lvl.key
                      ? "bg-white/15 text-white font-bold border border-white/20"
                      : "bg-transparent text-secondary hover:text-white"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* Selected Result Box */}
            <div className="bg-black/20 border border-white/5 rounded-2xl p-6 mt-4 flex flex-col gap-4">
              <div>
                <span className="text-[12px] uppercase tracking-wider text-secondary font-bold">Prompt đã sử dụng:</span>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 italic text-[14px] mt-1 text-white font-mono leading-relaxed select-all">
                  {testResults[selectedTask][selectedLevel].prompt}
                </div>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-wider text-secondary font-bold">Kết quả & Phân tích sư phạm:</span>
                <p className="mt-1 text-secondary text-[15px] leading-relaxed">
                  {testResults[selectedTask][selectedLevel].analysis}
                </p>
              </div>

            </div>

            <h3 className="text-white font-semibold text-[18px] mt-8">
              2. So sánh kết quả
            </h3>
            <p>
              Dựa trên các kết quả thu được, tôi đã rút ra được sự khác biệt về
              chất lượng đầu ra giữa các phiên bản Prompt:
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="border-b border-white/10 text-white bg-white/5 align-top">
                  <th className="py-4 px-4 w-[22%]">Tác vụ học tập</th>
                  <th className="py-4 px-4 w-[39%]">
                    Kết quả Prompt Cơ bản & Cải tiến
                  </th>
                  <th className="py-4 px-4 w-[39%]">
                    Kết quả Prompt Nâng cao
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.task}
                    className={`border-b border-white/5 align-top ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold leading-[26px]">
                      {row.task}
                    </td>
                    <td className="py-4 px-4 text-secondary leading-[26px]">
                      {row.basic}
                    </td>
                    <td className="py-4 px-4 text-secondary leading-[26px]">
                      {row.advanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="V. Phân Tích Hiệu Quả Prompt">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            <p>
              Việc thử nghiệm cho thấy sự khác biệt về chất lượng đầu ra không
              phụ thuộc vào độ dài câu lệnh mà phụ thuộc vào{" "}
              <span className="text-white font-semibold">
                Cấu trúc kiểm soát logic
              </span>{" "}
              của Prompt.
            </p>

            {promptAnalysis.map((item) => (
              <div
                key={item.title}
                className="bg-black/20 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-3">
                  <span className="text-white font-medium">- Cấu trúc:</span>{" "}
                  {item.structure}
                </p>
                <p className="mt-2">
                  <span className="text-white font-medium">- Hệ quả:</span>{" "}
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="VI. Tổng Hợp Các Nguyên Tắc Viết Prompt Hiệu Quả">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            <p>
              Từ quá trình thực nghiệm đối chiếu giữa các cấp độ Prompt, chúng
              ta có thể rút ra 4 nguyên tắc cốt lõi để biến AI từ một "máy giải
              bài" thành một "trợ giảng" thực thụ:
            </p>

            {promptPrinciples.map((item) => (
              <div
                key={item.title}
                className="bg-black/20 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-3">
                  <span className="text-white font-medium">- Nội dung:</span>{" "}
                  {item.content}
                </p>
                <p className="mt-2">
                  <span className="text-white font-medium">- Hiệu quả:</span>{" "}
                  {item.effect}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="VII. Kết Luận">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px]">
            <p>
              Việc thực hiện bài tập cho thấy Gemini là trợ giảng đắc lực nếu
              người học làm chủ được kỹ thuật Prompt Engineering. Thay vì để AI
              làm hộ bài, các câu lệnh có ràng buộc đã giúp chuyển đổi từ trạng
              thái tiếp nhận thụ động sang tư duy chủ động. Điều này không chỉ
              giúp sinh viên hiểu sâu bản chất lập trình C++ mà còn rèn luyện
              kỹ năng giải quyết vấn đề bền vững trong kỷ nguyên công nghệ.
            </p>
          </div>
        </SectionCard>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex justify-end items-center text-secondary">
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

export default Project3Detail;
