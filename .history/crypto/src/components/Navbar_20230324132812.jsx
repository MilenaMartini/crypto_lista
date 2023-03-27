import {LogoIcon} from "../icons/icons"4
import { LogoIcon } from "../icons/icons"


const Navbar = () => {
  const navigate = useNavigate();

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white h-14 items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer">
          <LogoIcon />
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
          <p><span className="text-yellow-500">C</span>ypto<span className="text-yellow-500">U</span>pdate</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar