import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-gray-600">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <Logo />
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Chisomprince/next13-blog"
            >
              Github
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/chisom-moses-3a9b7315b/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/ChisomPrince10"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
