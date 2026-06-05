import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const studentInfo = [
  { label: "Họ và tên", value: "Lê Đức Thiện Sang" },
  { label: "Mã sinh viên", value: "25020778" },
  { label: "Lớp học", value: "VNU1001-E252006" },
  { label: "Trường", value: "Đại học Công nghệ - ĐHQGHN" },
];

const SectionCard = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="bg-tertiary/40 border border-white/5 p-8 rounded-2xl animate-fade-in"
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

const Project6Detail = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 6
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Sử Dụng AI Có Trách Nhiệm Trong Học Tập Và Nghiên Cứu
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

        <SectionCard title="I. Mở Đầu">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-5">
            <p>
              Trong kỷ nguyên số hiện nay, Trí tuệ Nhân tạo (AI) đang tạo ra một cuộc cách mạng toàn diện trong mọi lĩnh vực của đời sống xã hội, trong đó giáo dục đại học là một trong những môi trường chịu tác động mạnh mẽ nhất. Đối với sinh viên khối ngành kỹ thuật và công nghệ, các công cụ AI không còn là những khái niệm xa lạ mà đã nhanh chóng trở thành những trợ lý đắc lực trong việc tối ưu hóa quy trình học tập, từ hỗ trợ phát triển tư duy lập trình, gỡ lỗi (debug) mã nguồn, cho đến phân tích các mô hình và mạch kỹ thuật phức tạp. Sự xuất hiện của AI mở ra cơ hội lớn để thu hẹp khoảng cách tri thức và tăng tốc khả năng tự học của người học.
            </p>
            <p>
              Tuy nhiên, sự bùng nổ của công nghệ này cũng đặt ra những thách thức chưa từng có về mặt đạo đức và liêm chính học thuật. Ranh giới giữa việc sử dụng AI như một công cụ hỗ trợ tư duy hợp lý với việc lạm dụng nó dẫn đến gian lận học thuật là vô cùng mong manh. Việc quá phụ thuộc vào các câu trả lời có sẵn từ AI không chỉ vi phạm các quy định về sở hữu trí tuệ mà còn tiềm ẩn nguy cơ làm thui chột khả năng tư duy phản biện, kỹ năng giải quyết vấn đề độc lập và năng lực sáng tạo – những phẩm chất cốt lõi cần có của một kỹ sư trong tương lai.
            </p>
            <p>
              Nhận thức được tầm quan trọng mang tính sống còn đó, bài báo cáo này được thực hiện nhằm mục tiêu nghiên cứu, đánh giá và định hình phương pháp sử dụng AI một cách có trách nhiệm và đạo đức trong môi trường đại học. Nội dung báo cáo sẽ tập trung giải quyết các nhiệm vụ trọng tâm bao gồm:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Nghiên cứu và đưa ra nhận định khách quan về chính sách quản lý AI hiện hành của nhà trường so với các cơ sở đào tạo khác.</li>
              <li>Ghi lại một trải nghiệm thực tế dưới dạng nhật ký (gồm prompt, đầu ra và quá trình tinh chỉnh) khi ứng dụng AI để hoàn thiện một tác vụ học tập chuyên ngành.</li>
              <li>Phân tích sâu sắc ba khía cạnh đạo đức cốt lõi: ranh giới gian lận, quyền sở hữu trí tuệ và tác động lâu dài đến kỹ năng cá nhân.</li>
            </ul>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 italic mt-2 text-justify">
              Từ những nền tảng phân tích trên, tôi sẽ xây dựng một bộ nguyên tắc ứng xử cá nhân và trực quan hóa bằng một infographic, hướng tới việc làm chủ công cụ công nghệ một cách thông minh, minh bạch và bền vững.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="II. Phân Tích Chính Sách Sử Dụng AI Trong Học Thuật">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            
            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                1. Chính sách và định hướng tiếp cận AI tại Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)
              </h3>
              <p>
                Trong bối cảnh chuyển đổi số giáo dục, Trường Đại học Công nghệ (VNU-UET) nói riêng và Đại học Quốc gia Hà Nội (ĐHQGHN) nói chung đã chọn cách tiếp cận cởi mở và chủ động đối với Trí tuệ Nhân tạo. Theo định hướng mới nhất từ ĐHQGHN, việc trang bị năng lực số và tư duy về AI được coi là yêu cầu bắt buộc, thậm chí các học phần về ứng dụng AI đã bắt đầu được đưa vào chương trình giảng dạy chính khóa.
              </p>
              <p>
                Tuy nhiên, sự cởi mở này đi kèm với những quy định vô cùng chặt chẽ về liêm chính học thuật. Chính sách của nhà trường phân định rõ ràng giữa việc "hỗ trợ học tập" và "gian lận":
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-3">
                <li>
                  <strong className="text-white">Sử dụng hợp lệ (Hỗ trợ):</strong> Sinh viên được phép và khuyến khích sử dụng các mô hình ngôn ngữ lớn (như ChatGPT, Gemini) hay các công cụ hỗ trợ lập trình (như GitHub Copilot) để tra cứu tài liệu, tìm hiểu các khái niệm phức tạp, tối ưu hóa thuật toán hoặc gỡ lỗi (debug) mã nguồn.
                </li>
                <li>
                  <strong className="text-white">Sử dụng vi phạm (Gian lận):</strong> Mọi hành vi sao chép nguyên văn đoạn văn bản, lời giải bài tập, hoặc toàn bộ khối mã nguồn (code) do AI tạo ra để nộp dưới tư cách sản phẩm trí tuệ cá nhân mà không trích dẫn rõ ràng đều bị coi là đạo văn. Nhà trường đề cao quy tắc "trách nhiệm giải trình", nghĩa là sinh viên phải hiểu và giải thích được từng dòng code hoặc từng luận điểm trong bài làm của mình, bất kể có sự can thiệp của AI hay không.
                </li>
              </ul>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                2. So sánh với chính sách của Đại học Bách khoa Hà Nội (HUST)
              </h3>
              <p>
                Để có cái nhìn đa chiều, việc đối chiếu chính sách trên với Đại học Bách khoa Hà Nội (HUST) - một cơ sở đào tạo khối kỹ thuật hàng đầu khác - cho thấy nhiều điểm tương đồng mang tính xu hướng.
              </p>
              <p>
                HUST cũng sớm ban hành các hướng dẫn nội bộ và tổ chức các chuyên đề về "Sử dụng AI trong giảng dạy và nghiên cứu". Giống như ĐHQGHN, HUST không cấm AI mà hướng dẫn sinh viên, nghiên cứu sinh cách dùng AI để tổng quan tài liệu hoặc xử lý dữ liệu. Tuy nhiên, HUST nhấn mạnh rất mạnh vào khâu kiểm soát. Trường áp dụng các phần mềm rà soát đạo văn có khả năng phát hiện văn bản do AI tạo ra.
              </p>
              <p>
                <strong className="text-white">Điểm khác biệt:</strong> Trong khi hướng dẫn của HUST đi sâu vào việc ứng dụng công cụ cụ thể cho từng khâu nghiên cứu (như dùng AI để phân tích dữ liệu trên Google Colab), thì định hướng của VNU-UET mang tính vĩ mô hơn, tập trung vào việc sớm xây dựng nền tảng tư duy số cho sinh viên ngay từ những năm đầu tiên.
              </p>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                3. Nhận định và đánh giá cá nhân
              </h3>
              <p>
                Từ việc đối chiếu các chính sách trên, tôi đưa ra một số nhận định cá nhân như sau:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-3">
                <li>
                  <strong className="text-white">Thứ nhất, sự chủ động thích ứng:</strong> Việc các trường đại học công nghệ hàng đầu tại Việt Nam không cấm đoán mà chọn cách "sống chung với AI" là một chiến lược hoàn toàn đúng đắn. Việc cấm AI đối với sinh viên kỹ thuật là đi ngược lại với thực tiễn phát triển của ngành công nghệ.
                </li>
                <li>
                  <strong className="text-white">Thứ hai, "khoảng trống" trong định lượng vi phạm:</strong> Mặc dù quy định chung về đạo văn đã có, nhưng đối với đặc thù các môn học như Kỹ thuật máy tính hay Lập trình, ranh giới vẫn còn khá mờ. Ví dụ, nếu AI gợi ý một cấu trúc dữ liệu tối ưu (như cách triển khai thuật toán DFS) và sinh viên code lại dựa trên tư duy đó, thì việc xác định tỷ lệ đóng góp của AI để trích dẫn vẫn là một thách thức thực tiễn.
                </li>
                <li>
                  <strong className="text-white">Thứ ba, sự thay đổi trong phương pháp đánh giá:</strong> Với sự hỗ trợ mạnh mẽ của AI, các chính sách học thuật hiện hành cho thấy các trường đại học đang dịch chuyển từ việc chấm điểm "sản phẩm cuối cùng" sang việc đánh giá "quá trình tư duy" và "khả năng bảo vệ sản phẩm" của sinh viên. Đây là bước tiến tích cực giúp sinh viên thực sự làm chủ công nghệ thay vì trở thành thợ gõ code.
                </li>
              </ul>
            </div>

          </div>
        </SectionCard>

        <SectionCard title="III. Thực Tiễn Ứng Dụng AI Trong Nhiệm Vụ Học Tập">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            
            <div>
              <h3 className="text-white font-semibold text-[18px] mb-2">
                1. Mô tả nhiệm vụ học tập
              </h3>
              <p>
                Nhiệm vụ được lựa chọn để thực nghiệm đánh giá là: Tìm hiểu cú pháp, so sánh logic hoạt động của vòng lặp (for, while) kết hợp câu lệnh điều kiện (if/else) giữa hai ngôn ngữ Python và C++, sau đó áp dụng để giải quyết bài toán cơ bản (ví dụ: kiểm tra số nguyên tố hoặc phân loại chẵn lẻ).
              </p>
              <p className="mt-2">
                Với tư cách là người mới bắt đầu học lập trình (nhập môn), tôi không dùng AI để nhờ viết hộ code nộp bài. Thay vào đó, tôi định vị AI như một "gia sư cá nhân" (tutor) để giải thích sự khác biệt về cú pháp giữa hai ngôn ngữ, hỗ trợ quá trình chuyển đổi tư duy từ Python (ngôn ngữ có cú pháp linh hoạt) sang C++ (ngôn ngữ yêu cầu khai báo chặt chẽ).
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-[18px] mb-3">
                2. Nhật ký tương tác và quá trình đánh giá, tinh chỉnh
              </h3>
              <p className="mb-4">
                Dưới đây là bảng ghi nhận chi tiết quá trình ứng dụng AI (sử dụng mô hình ngôn ngữ lớn) để hỗ trợ quá trình học tập cấu trúc điều khiển cơ bản:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-white/10 text-white bg-white/5">
                      <th className="py-4 px-3 w-[6%] text-center">STT</th>
                      <th className="py-4 px-4 w-[28%]">Prompt sử dụng</th>
                      <th className="py-4 px-4 w-[28%]">Tóm tắt đầu ra</th>
                      <th className="py-4 px-4 w-[38%]">Đánh giá, chỉnh sửa và tích hợp của cá nhân</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 align-top">
                      <td className="py-4 px-3 text-center text-white font-semibold">1</td>
                      <td className="py-4 px-4 text-secondary italic">
                        "Tôi là người mới học lập trình. Hãy giải thích ngắn gọn cách hoạt động của vòng lặp 'for' trong Python để in ra các số chẵn từ 1 đến 10. Đừng dùng code quá phức tạp."
                      </td>
                      <td className="py-4 px-4 text-secondary">
                        AI đưa ra đoạn code dùng hàm <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">range(2, 11, 2)</code> trong Python và giải thích ý nghĩa của 3 tham số (start, stop, step) một cách rất trực quan.
                      </td>
                      <td className="py-4 px-4 text-secondary flex flex-col gap-2">
                        <p>
                          <strong>Đánh giá:</strong> Lời giải thích dễ hiểu, phù hợp với người mới. Tuy nhiên, AI cung cấp luôn cả đáp án.
                        </p>
                        <p>
                          <strong>Tích hợp:</strong> Tôi tự gõ lại code vào IDE, thử thay đổi tham số step thành 3 hoặc 4 để tự kiểm chứng kết quả xem chương trình có chạy đúng như logic mình nghĩ không.
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 align-top bg-white/[0.01]">
                      <td className="py-4 px-3 text-center text-white font-semibold">2</td>
                      <td className="py-4 px-4 text-secondary italic">
                        "Từ đoạn code Python trên, hãy chuyển đổi nó sang C++. Hãy chỉ ra 3 điểm khác biệt lớn nhất về cú pháp mà người mới học như tôi hay quên nhất."
                      </td>
                      <td className="py-4 px-4 text-secondary">
                        AI cung cấp mã nguồn C++. Liệt kê 3 điểm khác biệt cốt lõi: (1) Phải khai báo kiểu dữ liệu biến (int i), (2) Kết thúc lệnh bằng dấu chấm phẩy (;), (3) Sử dụng cặp ngoặc nhọn {} thay vì lùi lề (indentation).
                      </td>
                      <td className="py-4 px-4 text-secondary flex flex-col gap-2">
                        <p>
                          <strong>Đánh giá:</strong> AI tóm tắt rất trúng tâm lý người mới học.
                        </p>
                        <p>
                          <strong>Chỉnh sửa:</strong> Bản code C++ của AI sử dụng <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">using namespace std;</code>. Sau khi tự tìm hiểu thêm trong giáo trình, tôi quyết định xóa dòng này và tập dùng <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[13px] text-white">std::cout</code> để rèn luyện thói quen quản lý không gian tên (namespace) chặt chẽ hơn.
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 align-top">
                      <td className="py-4 px-3 text-center text-white font-semibold">3</td>
                      <td className="py-4 px-4 text-secondary italic">
                        "Bây giờ, hãy đóng vai là giáo viên. Đưa ra cho tôi 1 bài tập thực hành cơ bản về vòng lặp và câu lệnh if/else bằng C++. Chỉ đề bài, TUYỆT ĐỐI KHÔNG đưa ra code giải để tôi tự làm."
                      </td>
                      <td className="py-4 px-4 text-secondary">
                        AI đưa ra bài toán: "Viết chương trình C++ yêu cầu người dùng nhập vào một số nguyên dương. Kiểm tra xem số đó là số nguyên tố hay không."
                      </td>
                      <td className="py-4 px-4 text-secondary flex flex-col gap-2">
                        <p>
                          <strong>Đánh giá & Tích hợp:</strong> Việc dùng prompt giới hạn AI (không cho phép đưa đáp án) là cách cực kỳ hiệu quả để chống lại sự ỷ lại. Tôi đã tự viết code cho bài toán này, sau đó mới dán đoạn code của mình lên lại AI nhờ kiểm tra xem có lỗi cú pháp nào không.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-[18px] mb-2">
                3. Minh bạch trong trích dẫn việc sử dụng AI
              </h3>
              <p>
                Để đảm bảo tính liêm chính học thuật và ranh giới rõ ràng giữa sản phẩm trí tuệ cá nhân và công cụ hỗ trợ, quá trình tương tác với AI luôn được tôi ghi nhận một cách minh bạch trong mọi bài nộp. Cụ thể, tôi áp dụng nguyên tắc trích dẫn bằng cách bổ sung một phần "Tuyên bố sử dụng AI" ở phần mở đầu của báo cáo hoặc trong phần chú thích (comment) của file mã nguồn.
              </p>
              <p className="mt-2">
                Nội dung tuyên bố này luôn đảm bảo tính rõ ràng qua các yếu tố:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                <li><strong className="text-white">Xác định công cụ:</strong> Nêu rõ tên mô hình hoặc nền tảng AI đã sử dụng (ví dụ: Gemini, ChatGPT) và thời gian truy cập.</li>
                <li><strong className="text-white">Mục đích sử dụng:</strong> Trình bày ngắn gọn vai trò của AI trong nhiệm vụ (ví dụ: dùng để so sánh cú pháp, giải thích khái niệm cơ bản, hoặc tạo bài tập thực hành).</li>
                <li><strong className="text-white">Phân định mức độ đóng góp:</strong> Chỉ rõ sự khác biệt giữa các giải thích lý thuyết tham khảo từ AI và phần mã nguồn (code) do chính tư duy độc lập của cá nhân tự thực hiện và hoàn thiện.</li>
              </ul>
              <p className="mt-4 bg-white/5 p-4 rounded-xl border border-white/10 italic text-justify">
                Cách tiếp cận này không chỉ đáp ứng nghiêm ngặt các quy định về đạo đức học thuật của nhà trường mà còn thể hiện tinh thần chịu trách nhiệm giải trình của sinh viên. Qua đó, AI được đặt đúng vị trí là một nguồn tài liệu tham khảo minh bạch thay vì một công cụ sao chép, giúp bảo vệ tính nguyên bản cho kết quả học tập.
              </p>
            </div>

          </div>
        </SectionCard>

        <SectionCard title="IV. Phân Tích Các Vấn Đề Đạo Đức Liên Quan Đến Việc Sử Dụng AI">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            <p>
              Sự tích hợp của Trí tuệ Nhân tạo vào môi trường học thuật mang lại những lợi ích to lớn nhưng đồng thời cũng đặt ra những thách thức sâu sắc về mặt đạo đức. Đối với người học, việc định vị đúng đắn vai trò của AI là yếu tố tiên quyết để đảm bảo sự toàn vẹn học thuật và chất lượng đào tạo.
            </p>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                1. Ranh giới mong manh giữa sử dụng hợp lý và gian lận học thuật
              </h3>
              <p>
                Ranh giới giữa việc sử dụng AI như một công cụ hỗ trợ và hành vi gian lận thường không được biểu hiện qua các quy định cứng nhắc, mà nằm ở mục đích sử dụng và mức độ đóng góp cá nhân.
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-white">Sử dụng hợp lý:</strong> Xảy ra khi AI đóng vai trò là một "người hướng dẫn". Ví dụ, khi gặp lỗi cú pháp vòng lặp vô hạn trong C++, việc đưa đoạn mã lỗi cho AI và yêu cầu gợi ý vị trí sai hoặc giải thích nguyên nhân là một cách học tập chủ động. Lúc này, sinh viên vẫn phải tự mình hiểu và sửa lỗi dựa trên gợi ý đó. Tương tự, việc dùng AI để so sánh lý thuyết giữa Python và C++ giúp tăng tốc độ tiếp thu kiến thức.
                </li>
                <li>
                  <strong className="text-white">Gian lận học thuật:</strong> Xảy ra khi người học biến AI thành "người làm thay", tước bỏ hoàn toàn quá trình tư duy của bản thân. Điển hình là hành vi sao chép nguyên văn (copy-paste) đề bài (ví dụ: "Viết chương trình kiểm tra số nguyên tố bằng C++") vào AI, sau đó lấy toàn bộ mã nguồn đầu ra nộp cho giảng viên và nhận đó là sản phẩm trí tuệ của mình. Hành vi này vi phạm nghiêm trọng tính trung thực bởi nó đánh lừa hệ thống đánh giá năng lực của nhà trường.
                </li>
              </ul>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                2. Vấn đề về quyền sở hữu trí tuệ và sự minh bạch trong trích dẫn
              </h3>
              <p>
                AI tạo sinh được huấn luyện dựa trên kho dữ liệu khổng lồ, bao gồm hàng triệu mã nguồn mở và tài liệu trên internet. Do đó, các sản phẩm do AI tạo ra thực chất là sự tổng hợp và dự đoán thống kê, không có tác giả con người cụ thể.
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-white">Xung đột bản quyền:</strong> Việc sinh viên nhận các đoạn mã hoặc bài luận do AI viết là tác phẩm cá nhân không chỉ là sự gian dối với giảng viên mà còn là sự bất kính đối với bản quyền của những tác giả gốc trong dữ liệu huấn luyện.
                </li>
                <li>
                  <strong className="text-white">Giải pháp minh bạch:</strong> Để giải quyết vấn đề đạo đức này, sự minh bạch là chìa khóa. Bất kỳ sự can thiệp nào của AI—dù là để lên ý tưởng, cấu trúc lại logic thuật toán hay sửa lỗi—cũng cần được ghi chú rõ ràng (như đã trình bày ở Phần III). Trích dẫn minh bạch không làm giảm giá trị bài làm, mà ngược lại, nó chứng minh sự chuyên nghiệp và đạo đức nghề nghiệp của một kỹ sư tương lai.
                </li>
              </ul>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[18px]">
                3. Tác động tiêu cực đến quá trình học tập và phát triển kỹ năng cốt lõi
              </h3>
              <p>
                Đây có lẽ là vấn đề đạo đức và thực tiễn nghiêm trọng nhất đối với người học, đặc biệt là những người đang ở giai đoạn xây dựng nền tảng (nhập môn).
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-white">Suy giảm năng lực tư duy (Tác động ngắn hạn):</strong> Bản chất của việc học lập trình không nằm ở việc ghi nhớ cú pháp if/else hay for, mà nằm ở tư duy giải quyết vấn đề (problem-solving) và tư duy thuật toán (algorithmic thinking). Quá trình đối mặt với các lỗi (bug) và trăn trở tìm cách tối ưu hóa logic là lúc não bộ phát triển. Nếu lập tức nhờ AI giải quyết hộ, người học sẽ mất đi cơ hội tự suy nghĩ, lâu dần hình thành thói quen ỷ lại và làm suy giảm nghiêm trọng năng lực lập trình độc lập.
                </li>
              </ul>
            </div>

          </div>
        </SectionCard>

        <SectionCard title="V. Bộ Nguyên Tắc Ứng Xử Cá Nhân Khi Sử Dụng AI">
          <div className="text-secondary text-[15px] sm:text-[16px] leading-[28px] flex flex-col gap-6">
            <div className="bg-black/20 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
              <div className="text-center border-b border-white/10 pb-6 mb-2">
                <span className="text-secondary font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider">
                  Sản Phẩm Trực Quan
                </span>
                <h1 className="text-[22px] sm:text-[28px] font-extrabold text-white mt-3 leading-tight uppercase">
                  INFOGRAPHIC: NGUYÊN TẮC ỨNG XỬ KHI SỬ DỤNG AI TRONG HỌC TẬP VÀ NGHIÊN CỨU
                </h1>
              </div>

              <p className="italic text-white/95 text-justify">
                Để hiện thực hóa những cam kết về đạo đức và trách nhiệm, tôi thiết lập một bộ nguyên tắc ứng xử cá nhân và trực quan hóa bằng sơ đồ Infographic dưới đây. Đây sẽ là kim chỉ nam giúp tôi khai thác tối đa sức mạnh của công nghệ mà không đánh mất tính chính trực của bản thân.
              </p>

              <div className="border-t border-white/10 pt-6 mt-4 flex flex-col items-center">
                <ReportImage
                  src="/project6/infographic.png"
                  alt="Ảnh minh họa: Infographic bộ nguyên tắc sử dụng AI có trách nhiệm"
                  onClick={() => setActiveImage("/project6/infographic.png")}
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

export default Project6Detail;
