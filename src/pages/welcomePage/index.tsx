import WelcomeContent from "../../components/welcome-content";
import PageModel from "../../components/page-model";
import SContainer from "./styles";

const Home = () => {
  return (
    <SContainer>
      <PageModel>
        <div className="content">
          <WelcomeContent />
        </div>
      </PageModel>
    </SContainer>
  );
};

export default Home;
