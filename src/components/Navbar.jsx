import Icon from "../assets/icon.svg"
const Navbar = () => {
    return ( 
    <div className="flex flex-row items-center justify-between text-porcelain-50 bg-verdigris-800 py-2 px-4">
        <img src={Icon} className="h-10"/>
        <ul className="hidden lg:flex lg:gap-4">
            <li href="#about">About me</li>
            <li href="#packages">Packages</li>
            <li href="#contact">Contact me</li>
        </ul>
    </div>
     );
}
 
export default Navbar;