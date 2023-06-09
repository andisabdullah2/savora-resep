import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Tentang Savoricius",
    items: [ "Syarat dan Ketentuan", "Kebijakan Privasi", "Bantuan dan Masukan"],
  },
  {
    title: "Download Aplikasi",
    items: ["Tersedia Aplikasi Savoricious di Playstore"],
  }
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#BB2222] py-8 text-white mt-20">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-start gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            <img src={"./logo.png"} alt="Savora" className="h-24 w-auto cursor-pointer"/>
          </Typography>
          <div className="grid grid-cols-3 justify-start gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className={`mb-3 font-medium text-white justify-start`}
                  style={{ fontWeight: "bold"}}

                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal text-white transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}