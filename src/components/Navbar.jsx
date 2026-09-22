import Icon from "../assets/icon.svg"
const Navbar = () => {
    return ( 
    <div className="flex flex-row items-center justify-between bg-verdigris-800 py-2 px-4">
        <img src={Icon} className="h-10"/>
        hamburger
    </div>
     );
}
 
export default Navbar;