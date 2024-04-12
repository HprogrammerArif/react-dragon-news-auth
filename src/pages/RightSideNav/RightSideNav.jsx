import { IoLogoGoogleplus } from "react-icons/io";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'


const RightSideNav = () => {
  return (
    <>
    <div className="p-4 space-y-4 mb-6">
      <h2 className="text-3xl font-semibold">Login With</h2>

      <button className="btn btn-outline w-full text-blue-600">
        <IoLogoGoogleplus />
        Google
      </button>
      <button className="btn btn-outline w-full text-blue-600">
      <FaGithub />
        GitHub
      </button>
    </div>

    <div className="p-4 mb-6">
      <h2 className="text-3xl font-semibold">Find Us On</h2>

      <a className="p-4 flex text-lg items-center border rounded-t-lg">
      <FaFacebook className="mr-3" />
        <span>Facebook</span>
      </a>
      <a className="p-4 flex text-lg items-center border rounded-t-lg">
      <FaTwitter className="mr-3" />
        <span>Twitter</span>
      </a>
      <a className="p-4 flex text-lg items-center border rounded-t-lg">
      <FaInstagram className="mr-3" />
        <span>Instagram</span>
      </a>
     
    </div>
    <div className="p-4 space-y-4 mb-6">
      <h2 className="text-3xl font-semibold">Q-Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
     
    </div>
    </>
  );
};

export default RightSideNav;
