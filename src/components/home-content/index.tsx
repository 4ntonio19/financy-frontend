import TimerDaily from "../timerDaily";
import { SContainer } from "./styles";
const HomeContent = () => {
  const userSession = localStorage.getItem("user");
  if (!userSession) return false;
  const userObject = JSON.parse(userSession);

  const firstName = userObject.name.split(" ");
  return (
    <SContainer>
      <div className="home-header">
        <p className="welcome-text">
          Olá, {firstName[0]}! Vamos dar uma olhada nas suas finanças...
        </p>
        <TimerDaily />
      </div>
    </SContainer>
  );
};

export default HomeContent;
