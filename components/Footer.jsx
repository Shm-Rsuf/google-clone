import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-sm text-gray-500 bg-[#f2f2f2] px-5">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>

      <div className=" flex flex-col sm:flex-row items-center justify-between px-4 py-4">
        <ul className="links">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How search works</li>
        </ul>
        <ul className="links">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Setting</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
