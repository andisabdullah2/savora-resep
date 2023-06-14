import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, MobileNav, Typography, Button, IconButton, Input } from "@material-tailwind/react";
import Logo from "./../../src/assets/image/zyro-image.png";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[90px]">
      <Typography
        as="li"
        variant="small"
        color="white"
        className={`p-0 ${activePage === "resep-makanan" ? "underline" : "" }`}
        style={{ fontFamily: "Poppins", fontSize: "24px" }}
      >
        <Link to="/resep-makanan" onMouseEnter={() => setActivePage("resep-makanan")} onMouseLeave={() => setActivePage("")}>Resep</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className={`p-1 ${activePage === "tips" ? "underline" : ""}`}
        style={{ fontFamily: "Poppins", fontSize: "24px" }}
      >
        <Link to="/tips" onMouseEnter={() => setActivePage("tips")} onMouseLeave={() => setActivePage("")}>Tips</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className={`p-1 ${activePage === "tentang-kami" ? "underline" : ""}`}
        style={{ fontFamily: "Poppins", fontSize: "24px" }}
      >
        <a href="#" className="flex items-center" onMouseEnter={() => setActivePage("tentang-kami")} onMouseLeave={() => setActivePage("")}>
          Tentang Kami
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      style={{
        backgroundColor: "#BB2222",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
        border: "none"
      }}
      className="sticky inset-0 z-10 h-max max-w-full rounded-none py-0 px-4 lg:px-8"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography as="a" href="#" className="p-0">
          <Link to="/">
            <img src={Logo} alt="Savora"  style={{ height: "102px", width: "auto", cursor: "pointer"}}/>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="relative flex w-full gap-2 md:w-max hidden lg:inline-block ">
          <Input
            type="search"
            label="Kamu mau masak apa?"
            className="bg-white border-none rounded-full"
            color="black"
            containerProps={{
              className: "min-w-[287px]"
            }}
            labelProps={{
              style: { fontFamily: "Poppins", fontSize: "14px", },
            }}
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Kamu mau masak apa?"
              className="pr-20"
              containerProps={{
                className: "min-w-[287px]",
              }}
            />
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
