import { Dropdown, Navbar, TextInput } from "flowbite-react";
import { HiCollection, HiDocumentSearch, HiHome, HiInformationCircle, HiSearch, HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar className="flex flex-wrap justify-between items-center p-3 bg-red-600">
        <Link to={"/"} className="flex items-center space-x-2 rtl:space-x-reverse text-white">
          <img src={"/eecom-logo.png"} className="h-10 md:h-14" alt="EECOM LOGO" />
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-base md:text-2xl">UKM-FT EECOM</h1>
            <span className="text-xs">Engineering English Community</span>
          </div>
        </Link>
      
        <form className="hidden md:flex max-w-md">
          <TextInput type="text" icon={HiSearch} placeholder="search article" required />
        </form>
      </Navbar>

      <div className="bg-slate-200 text-red-700 overflow-auto scrollbar-hide md:flex md:justify-center">
        <div className="flex space-x-1 text-center font-medium whitespace-nowrap">
          <Link to="/" className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <HiHome className="mr-1"/>Home
          </Link>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <Dropdown label={<><HiInformationCircle className="mr-1"/>About</>} inline>
              <Dropdown.Item className="text-red-700">
                <Link to="/profile">Profile EECOM</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/logo-eecom">Logo EECOM</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/mars-eecom">Mars EECOM</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <Dropdown label={<><HiUserGroup className="mr-1"/>Organization</>} inline>
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/struktur">Struktur Organisasi</Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/ph/2024">Daily Manager</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/hrd/2024">Human Resource Development</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/rnd/2024">Research And Development</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/ic/2024">Information And Communication</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/organisasi/entre/2024">Entrepreneurship</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">      
            <Dropdown label={<><HiDocumentSearch className="mr-1"/>Information</>} inline>
              <Dropdown.Item className="text-red-700">
                <Link to="/info-1">All</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/info-1">News</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/info-1">Announcement</Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-700">
                <Link to="/info-2">Competition</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
          
          <Link to="/docs" className="flex items-center px-3 py-2 hover:bg-red-600 hover:text-white">
            <HiCollection className="mr-1"/>Publication
          </Link>
        </div>
      </div>
    </>
  )
}
