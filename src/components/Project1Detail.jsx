import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const studentInfo = [
  { label: "Họ và tên", value: "Lê Đức Thiện Sang" },
  { label: "Mã sinh viên", value: "25020778" },
  { label: "Lớp học", value: "VNU1001-E252006" },
  { label: "Trường", value: "Đại học Công nghệ - ĐHQGHN" },
];

const steps = [
  {
    step: 1,
    title: "Mở File Explorer",
    desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
    action: "Nhấn Win + E hoặc click chuột vào biểu tượng Folder",
    icon: "📂",
    screenMockup: {
      path: "This PC",
      folders: ["Desktop", "Documents", "Downloads", "Music", "Pictures", "Videos"],
      highlight: "File Explorer icon on Taskbar"
    }
  },
  {
    step: 2,
    title: "Truy cập ổ đĩa/thư mục",
    desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
    action: "Truy cập This PC -> Thien Sang 2 (D:)",
    icon: "💽",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:)",
      folders: ["Local Disk (C:)", "Thien Sang 2 (D:)", "Thien Sang (E:)"],
      highlight: "Thien Sang 2 (D:)"
    }
  },
  {
    step: 3,
    title: "Tạo thư mục mới",
    desc: "Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_LeDucThienSang. Nhấn Enter.",
    action: "Chuột phải -> New -> Folder -> Đặt tên: ThucHanh_LeDucThienSang",
    icon: "📁",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:)",
      folders: ["DL", "SETUP", "VM", "ThucHanh_LeDucThienSang"],
      highlight: "ThucHanh_LeDucThienSang"
    }
  },
  {
    step: 4,
    title: "Vào thư mục vừa tạo",
    desc: "Nhấp đúp vào thư mục ThucHanh_LeDucThienSang vừa được tạo ở bước trước.",
    action: "Nhấp đúp vào thư mục ThucHanh_LeDucThienSang",
    icon: "📂",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang",
      folders: [],
      files: [],
      highlight: "Thư mục đang trống"
    }
  },
  {
    step: 5,
    title: "Tạo tệp tin văn bản",
    desc: "Nhấp chuột phải vào khoảng trống bên trong thư mục -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.",
    action: "Chuột phải -> New -> Text Document -> Đặt tên: GhiChu.txt",
    icon: "📄",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang",
      folders: [],
      files: [{ name: "GhiChu.txt", size: "0 KB", type: "Text Document" }],
      highlight: "GhiChu.txt"
    }
  },
  {
    step: 6,
    title: "Đổi tên tệp tin",
    desc: "Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.",
    action: "Chuột phải vào tệp -> Rename -> Đổi thành: GhiChuQuanTrong.txt",
    icon: "✏️",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang",
      folders: [],
      files: [{ name: "GhiChuQuanTrong.txt", size: "0 KB", type: "Text Document" }],
      highlight: "GhiChuQuanTrong.txt"
    }
  },
  {
    step: 7,
    title: "Tạo thư mục con",
    desc: "Trong thư mục ThucHanh_LeDucThienSang, nhấp chuột phải -> New -> Folder. Đặt tên thư mục con là TaiLieu.",
    action: "Chuột phải -> New -> Folder -> Đặt tên: TaiLieu",
    icon: "📁",
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang",
      folders: ["TaiLieu"],
      files: [{ name: "GhiChuQuanTrong.txt", size: "0 KB", type: "Text Document" }],
      highlight: "TaiLieu"
    }
  },
  {
    step: 8,
    title: "Sao chép tệp tin (Copy & Paste)",
    desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy. Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải -> chọn Paste. Bạn sẽ có một bản sao trong thư mục TaiLieu.",
    action: "Copy GhiChuQuanTrong.txt -> Paste vào thư mục TaiLieu",
    icon: "📋",
    images: ["/project1/step8_1.png", "/project1/step8_2.png", "/project1/step8_3.png"],
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang > TaiLieu",
      folders: [],
      files: [{ name: "GhiChuQuanTrong.txt", size: "0 KB", type: "Text Document" }],
      highlight: "Bản sao GhiChuQuanTrong.txt trong thư mục TaiLieu"
    }
  },
  {
    step: 9,
    title: "Di chuyển tệp tin (Cut & Paste)",
    desc: "Quay lại thư mục ThucHanh_LeDucThienSang. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải -> chọn Paste (hoặc Ctrl + V). Tệp gốc sẽ biến mất khỏi vị trí cũ và xuất hiện tại thư mục con TaiLieu.",
    action: "Tạo DiChuyen.txt -> Cut DiChuyen.txt -> Paste vào thư mục TaiLieu",
    icon: "✂️",
    images: [
      "/project1/step9_1.png",
      "/project1/step9_2.png",
      "/project1/step9_3.png",
      "/project1/step9_4.png"
    ],
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang > TaiLieu",
      folders: [],
      files: [
        { name: "GhiChuQuanTrong.txt", size: "0 KB", type: "Text Document" },
        { name: "DiChuyen.txt", size: "0 KB", type: "Text Document" }
      ],
      highlight: "DiChuyen.txt đã di chuyển vào thư mục TaiLieu"
    }
  },
  {
    step: 10,
    title: "Xóa tệp tin",
    desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp tin này sẽ được tự động chuyển vào Thùng rác (Recycle Bin) của hệ điều hành.",
    action: "Chuột phải vào GhiChuQuanTrong.txt -> Delete",
    icon: "🗑️",
    images: ["/project1/step10.png"],
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang > TaiLieu",
      folders: [],
      files: [{ name: "DiChuyen.txt", size: "0 KB", type: "Text Document" }],
      highlight: "GhiChuQuanTrong.txt đã bị xóa (chuyển vào Thùng rác)"
    }
  },
  {
    step: 11,
    title: "Xóa vĩnh viễn",
    desc: "Chọn tệp DiChuyen.txt trong thư mục TaiLieu, nhấn giữ phím Shift và nhấn phím Delete trên bàn phím. Một cảnh báo xác nhận xóa vĩnh viễn sẽ hiện ra, nhấp chọn Yes. Tệp sẽ bị xóa trực tiếp mà không lưu lại trong Thùng rác.",
    action: "Chọn DiChuyen.txt -> Shift + Delete -> Chọn Yes",
    icon: "🚨",
    images: ["/project1/step11.png"],
    screenMockup: {
      path: "This PC > Thien Sang 2 (D:) > ThucHanh_LeDucThienSang > TaiLieu",
      folders: [],
      files: [],
      highlight: "Xóa vĩnh viễn tệp tin bằng Shift + Delete"
    }
  },
  {
    step: 12,
    title: "Khôi phục từ Thùng rác (Tùy chọn)",
    desc: "Tìm và mở biểu tượng Recycle Bin trên màn hình Desktop. Tìm tệp GhiChuQuanTrong.txt đã bị xóa trước đó, nhấp chuột phải vào tệp và chọn Restore. Tệp tin sẽ ngay lập tức được trả về thư mục gốc ban đầu.",
    action: "Mở Recycle Bin -> Chuột phải vào GhiChuQuanTrong.txt -> Restore",
    icon: "🔄",
    images: [
      "/project1/step12_1.png",
      "/project1/step12_2.png"
    ],
    screenMockup: {
      path: "Recycle Bin",
      folders: [],
      files: [{ name: "GhiChuQuanTrong.txt", originalLocation: "TaiLieu" }],
      highlight: "Khôi phục tệp đã xóa từ Recycle Bin"
    }
  }
];

const Project1Detail = () => {
  return (
    <div className="relative min-h-screen bg-primary text-white pt-28 pb-12 px-6 sm:px-16 sm:pt-36 z-0 overflow-hidden">
      {/* Background stars animation visual simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.45),rgba(0,0,0,1))] z-[-1]" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <span className="block text-secondary font-semibold text-[14px] uppercase tracking-wider">
              Bài tập số 1
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-extrabold text-white mt-2 leading-tight">
              Thao Tác Cơ Bản Với Tệp Tin & Thư Mục
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

        {/* Timeline of Steps */}
        <div>
        <h2 className="text-[26px] font-bold text-white mb-8 flex items-center gap-2">
          <span>📋</span> Các bước thực hiện chi tiết
        </h2>

        <div className="flex flex-col gap-16 relative pl-6 sm:pl-10 border-l border-white/10">
          {steps.map((s, index) => (
            <motion.div 
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step indicator circle */}
              <div className="absolute top-0 -left-[40px] sm:-left-[54px] w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111111] border border-[#ffffff] flex justify-center items-center font-bold text-[#ffffff] text-[15px] sm:text-[17px] shadow-lg">
                {s.step}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Text explanation */}
                <div className="lg:col-span-5 flex flex-col justify-start">
                  <span className="text-secondary text-[14px] font-semibold tracking-wide uppercase">Bước {s.step}</span>
                  <h3 className="text-white font-bold text-[22px] mt-1 flex items-center gap-2">
                    <span className="text-[24px]">{s.icon}</span> {s.title}
                  </h3>
                  <p className="text-secondary text-[16px] mt-3 leading-[26px]">{s.desc}</p>
                  
                  <div className="mt-4 p-3 bg-secondary/10 border-l-4 border-[#ffffff] rounded-r-lg">
                    <span className="text-secondary text-[13px] uppercase block font-semibold">Hành động:</span>
                    <p className="text-white text-[14px] mt-1 font-mono">{s.action}</p>
                  </div>
                </div>

                {/* Image / Mockup directly without frame */}
                <div className="lg:col-span-7 flex flex-col justify-center items-center w-full">
                  {/* Actual User Screenshot */}
                  {s.images ? (
                    <div className="flex flex-col gap-6 w-full">
                      {s.images.map((imgSrc, idx) => {
                        return (
                          <img 
                            key={`${s.step}-${idx}`}
                            src={imgSrc} 
                            alt={`Minh họa bước ${s.step} - Ảnh ${idx + 1}`} 
                            className="w-full h-auto max-h-[460px] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onError={(e) => {
                              if (!e.target.src.endsWith(".jpg") && !e.target.src.endsWith(".jpeg")) {
                                e.target.src = imgSrc.replace(".png", ".jpg");
                              } else {
                                e.target.style.display = "none";
                                if (idx === 0) {
                                  const backupElem = document.getElementById(`backup-mockup-${s.step}`);
                                  if (backupElem) {
                                    backupElem.style.display = "block";
                                  }
                                }
                              }
                            }}
                            onLoad={(e) => {
                              const backupElem = document.getElementById(`backup-mockup-${s.step}`);
                              if (backupElem) {
                                backupElem.style.display = "none";
                              }
                            }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <img 
                      src={`/project1/step${s.step}.png`} 
                      alt={`Minh họa bước ${s.step}`} 
                      className="w-full h-auto max-h-[460px] object-contain rounded-xl border border-white/10 shadow-2xl"
                      onError={(e) => {
                        if (!e.target.src.endsWith(".jpg") && !e.target.src.endsWith(".jpeg")) {
                          e.target.src = `/project1/step${s.step}.jpg`;
                        } else {
                          e.target.style.display = "none";
                          const backupElem = document.getElementById(`backup-mockup-${s.step}`);
                          if (backupElem) {
                            backupElem.style.display = "block";
                          }
                        }
                      }}
                      onLoad={(e) => {
                        const backupElem = document.getElementById(`backup-mockup-${s.step}`);
                        if (backupElem) {
                          backupElem.style.display = "none";
                        }
                      }}
                    />
                  )}

                  {/* Simulated File Explorer Screen Mockup (Backup fallback) */}
                  <div 
                    id={`backup-mockup-${s.step}`} 
                    className="w-full bg-[#111111]/40 border border-white/10 rounded-xl p-6 shadow-2xl"
                  >
                    {/* Highlight notification */}
                    <div className="mb-4 bg-[#ffffff]/10 border border-[#ffffff]/30 text-white text-[13px] px-3 py-2 rounded-lg flex items-center gap-2">
                      <span className="text-[#ffffff] font-bold">✨ Highlight:</span>
                      <span>{s.screenMockup.highlight}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {/* Render Folder Mockups */}
                      {s.screenMockup.folders?.map((fold) => (
                        <div 
                          key={fold}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                            fold === s.screenMockup.highlight 
                              ? "bg-[#ffffff]/20 border-[#ffffff]" 
                              : "bg-black/20 border-white/5"
                          }`}
                        >
                          <span className="text-[26px]">📁</span>
                          <div className="truncate">
                            <p className="text-[14px] text-white font-medium truncate">{fold}</p>
                            <p className="text-[11px] text-[#888]">File folder</p>
                          </div>
                        </div>
                      ))}

                      {/* Render File Mockups */}
                      {s.screenMockup.files?.map((file) => (
                        <div 
                          key={file.name}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                            file.name === s.screenMockup.highlight 
                              ? "bg-[#ffffff]/20 border-[#ffffff]" 
                              : "bg-black/20 border-white/5"
                          }`}
                        >
                          <span className="text-[26px]">📄</span>
                          <div className="truncate">
                            <p className="text-[14px] text-white font-medium truncate">{file.name}</p>
                            <p className="text-[11px] text-[#888]">{file.type} ({file.size})</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {s.screenMockup.folders?.length === 0 && (!s.screenMockup.files || s.screenMockup.files.length === 0) && (
                      <div className="flex flex-col items-center justify-center py-8 text-center text-secondary">
                        <span className="text-[32px] opacity-40">📂</span>
                        <p className="text-[14px] mt-2 italic">Thư mục hiện tại đang trống</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

        {/* Floating Bottom Navigation */}
        <div className="border-t border-white/10 pt-8 flex justify-end items-center text-secondary mt-12">
          <p className="text-[13px]">Lê Đức Thiện Sang | VNU-UET | 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Project1Detail;
