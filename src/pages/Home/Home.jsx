import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="border">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="md:col-span-2 border">
        <h2 className="text-4xl">News Comming Soon.....</h2>
      </div>
      <div className="border">
        <RightSideNav></RightSideNav>
      </div>
    </div>
    </div>
  );
};

export default Home;