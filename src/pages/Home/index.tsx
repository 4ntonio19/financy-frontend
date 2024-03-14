import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeContent from "../../components/home-content";
import SContainer from "./styles";

const Home = () => {
  return (
    <SContainer>
      <Header />
      <div className="content">
        <HomeContent />
      </div>
      <Footer />
    </SContainer>
  );
};

export default Home;
