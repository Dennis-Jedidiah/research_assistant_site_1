import logo from "../../assets/logos/nav.svg";
import { move_to_section } from "../../functions/Pretty_design_functions";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed px-25 bg-white w-full z-100 shadow-md">
      <img src={logo} alt="Logo" className="h-20" />
      <div className="flex gap-4 h-fit items-center">
        <span
          className="text-custom-black-400 hover:cursor-pointer transition-all duration-[200ms] ease-in-out hover:font-medium"
          onClick={() => move_to_section("meet_instructor")}
        >
          Meet your instructor
        </span>
        <span
          className="text-custom-black-400 hover:cursor-pointer transition-all duration-[200ms] ease-in-out hover:font-medium"
          onClick={() => move_to_section("How_it_works")}
        >
          How it works
        </span>
        <span
          className="text-custom-black-400 hover:cursor-pointer transition-all duration-[200ms] ease-in-out hover:font-medium"
          onClick={() => move_to_section("packages")}
        >
          Packages
        </span>
        <span
          className="text-custom-black-400 hover:cursor-pointer transition-all duration-[200ms] ease-in-out hover:font-medium"
          onClick={() => move_to_section("solo_services")}
        >
          Solo services
        </span>
        <span
          className="text-custom-black-400 hover:cursor-pointer transition-all duration-[200ms] ease-in-out hover:font-medium"
          onClick={() => move_to_section("book_a_session")}
        >
          Book a session
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
