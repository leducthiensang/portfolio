import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const dropdownProjects = [
  { id: 1, shortTitle: "Bài 1: Thao tác tệp tin & thư mục" },
  { id: 2, shortTitle: "Bài 2: Tìm kiếm & Đánh giá học thuật" },
  { id: 3, shortTitle: "Bài 3: Viết Prompt học tập" },
  { id: 4, shortTitle: "Bài 4: Hợp tác & Quản lý dự án" },
  { id: 5, shortTitle: "Bài 5: AI & Sáng tạo nội dung số" },
  { id: 6, shortTitle: "Bài 6: Sử dụng AI có trách nhiệm" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.pathname.startsWith("/project")) {
      setActive("Project");
    } else if (location.pathname === "/") {
      const hash = location.hash;
      if (hash) {
        const matchingLink = navLinks.find((link) => `#${link.id}` === hash);
        if (matchingLink) {
          setActive(matchingLink.title);
        }
      } else {
        setActive("Home");
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled || !isHomePage ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Thiện Sang &nbsp;
            <span className='sm:block hidden'> | Dự án cá nhân</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => {
            if (nav.id === "project") {
              return (
                <li
                  key={nav.id}
                  className={`relative group ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-1`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={isHomePage ? `#${nav.id}` : `/#${nav.id}`}>{nav.title}</a>
                  <svg
                    className="w-4 h-4 fill-current transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                  
                  {/* Glassmorphic Dropdown Menu */}
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 w-72 hidden group-hover:block transition-all duration-300 pointer-events-auto z-30">
                    <div className="bg-[#121212]/95 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-lg">
                      <ul className="flex flex-col gap-1">
                        {dropdownProjects.map((p) => (
                          <li key={p.id}>
                            <a
                              href={`/project/${p.id}`}
                              className="block text-secondary hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 text-[14px] transition-colors leading-[1.3]"
                              onClick={() => {
                                setActive(nav.title);
                              }}
                            >
                              {p.shortTitle}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            }
            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                  if (nav.id === "home" && isHomePage) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <a href={nav.id === "home" ? (isHomePage ? "#" : "/") : (isHomePage ? `#${nav.id}` : `/#${nav.id}`)}>{nav.title}</a>
              </li>
            );
          })}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => {
                if (nav.id === "project") {
                  return (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <a
                          href={isHomePage ? `#${nav.id}` : `/#${nav.id}`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          {nav.title}
                        </a>
                        <ul className="flex flex-col gap-2 pl-4 border-l border-white/10 mt-1">
                          {dropdownProjects.map((p) => (
                            <li key={p.id}>
                              <a
                                href={`/project/${p.id}`}
                                className="block text-secondary hover:text-white text-[14px] py-1 transition-colors leading-[1.3]"
                                onClick={() => {
                                  setToggle(!toggle);
                                  setActive(nav.title);
                                }}
                              >
                                {p.shortTitle}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      if (nav.id === "home" && isHomePage) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    <a href={nav.id === "home" ? (isHomePage ? "#" : "/") : (isHomePage ? `#${nav.id}` : `/#${nav.id}`)}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
