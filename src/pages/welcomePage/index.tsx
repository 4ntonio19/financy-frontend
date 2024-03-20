import WelcomeContent from "../../components/welcome-content";
import PageModel from "../../components/page-model";
import SContainer from "./styles";

const WelcomePage = () => {
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

export default WelcomePage;
