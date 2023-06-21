import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Tentang Savoricius",
    items: ["Syarat dan Ketentuan", "Kebijakan Privasi", "Bantuan dan Masukan"],
  },
  {
    title: "Download Aplikasi",
    items: [],
  },
  {
    title: "Ikuti Kami",
    items: [],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#BB2222] py-9 text-white mt-20">
      <div className="mx-auto w-full max-w-7xl px-12">
        <div className="flex items-left justify-between">
          <Typography>
            <img
              src={"./logo.png"}
              alt="Savoricious"
              className="h-24 w-auto cursor-pointer"
            />
          </Typography>
          <div className="grid grid-cols-3 gap-30">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="flex flex-col space-y-2 px-12">
                <Typography
                  variant="small"
                  className="text-white"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    fontWeight: "bold",
                    textAlign: "left"
                  }}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="text-white transition-colors"
                      style={{ fontFamily: "Poppins", fontSize: "20px", textAlign: "left" }}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
                {title === "Download Aplikasi" && (
                  <li>
                    <img
                      src="./googleplay.png"
                      alt="Download Aplikasi"
                      className="h-12 w-auto mt-3 cursor-pointer"
                    />
                  </li>
                )}
                {title === "Ikuti Kami" && (
                  <li>
                    <img
                      src="./follow.png"
                      alt="Ikuti Kami"
                      className="h-8 w-auto mt-3 cursor-pointer"
                    />
                  </li>
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
