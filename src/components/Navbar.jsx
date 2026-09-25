import Icon from "../assets/icon.svg"
import { move_to_section } from "../functions/move_to_section";

const Navbar = () => {
    return (
    <div className="flex flex-row items-center justify-between text-porcelain-50 bg-verdigris-800 py-2 px-4">
        <img src={Icon} className="h-10"/>
        <ul className="hidden lg:flex lg:gap-4">
            <li className="cursor-pointer" onClick={() => move_to_section("about")}>About me</li>
            <li className="cursor-pointer" onClick={() => move_to_section("packages")}>Packages</li>
            <li className="cursor-pointer" onClick={() => move_to_section("contact")}>Contact me</li>
        </ul>
    </div>
     );
}
 
export default Navbar;