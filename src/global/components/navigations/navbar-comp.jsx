import { Navbar, TextInput } from "flowbite-react";
import { HiHome, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar className="flex flex-wrap justify-between items-center p-4 bg-red-600">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse text-white">
          <img src={"/eecom-logo.png"} className="h-14" alt="EECOM LOGO" />
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-xl">UKM-FT EECOM</h1>
            <span>Engineering English Community</span>
          </div>
        </Link>
      
        <form className="hidden md:flex max-w-md">
          <TextInput type="text" icon={HiSearch} placeholder="search article" required />
        </form>
      </Navbar>

      <div className="bg-slate-200 py-3 flex justify-center">
        <div className="flex space-x-8 text-center font-semibold">
          <Link to="/" className="text-red-700 flex items-center"><HiHome className="mr-1"/> Home</Link>
          <Link to="/about" className="text-red-700">About</Link>
          <Link to="/articles" className="text-red-700">Articles</Link>
          <Link to="/contact" className="text-red-700">Contact</Link>
        </div>
      </div>
    </>
  )
}
