import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

  const newsData = useLoaderData();
  console.log(newsData);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="md:col-span-2">
        {
          newsData.map(news => <NewsCard
             key={news._id} 
             news={news}
             ></NewsCard>)
        }
      </div>
      <div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
    </div>
  );
};

export default Home;