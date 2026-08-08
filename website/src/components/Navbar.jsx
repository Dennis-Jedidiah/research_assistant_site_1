import { Briefcase } from "lucide-react";
import logo from "../assets/logos/nav.svg";
import OutlineButton from "./ComponentParts/OutlineButton";
import { move_to_section } from "../functions/Pretty_design_functions";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed px-40 bg-white w-full z-100 shadow-md content-font">
      <div className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="flex gap-3 h-fit items-center">
        <span className="text-slate-600 hover:cursor-pointer" onClick={()=>move_to_section("meet_instructor")}>Meet your instructor</span>
        <span className="text-slate-600 hover:cursor-pointer" onClick={()=>move_to_section("How_it_works")}>How it works</span>
        <span className="text-slate-600 hover:cursor-pointer" onClick={()=>move_to_section("packages")}>Packages</span>
        <span className="text-slate-600 hover:cursor-pointer" onClick={()=>move_to_section("solo_services")}>Solo services</span>
        {/* takes you to packages */}
        <OutlineButton children={"Book"} className="text-slate-600 shadow-md" onClick={()=>move_to_section("book_a_session")}/>
      </div>
    </nav>
  );
};

export default Navbar;
