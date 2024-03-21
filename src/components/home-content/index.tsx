import TimerDaily from "../timerDaily";
import { SContainer } from "./styles";
const HomeContent = () => {
  return (
    <SContainer>
      <div className="home-header">
        <p>Olá, Antonio! Vamos dar uma olhada nas suas finanças...</p>
        <TimerDaily />
      </div>
    </SContainer>
  );
};

export default HomeContent;
