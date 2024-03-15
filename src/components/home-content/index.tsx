import { Link } from "react-router-dom";
import Button from "../button";
import SContainer from "./styles";
// import PorquinhoImg from "../../assets/Porquinho.png";
const HomeContent = () => {
  return (
    <SContainer>
      <div className="welcome-content">
        <p>
          Cansado de viver no vermelho? Finance Control te ajuda a conquistar a
          liberdade financeira!
        </p>
        <p>Organize seus gastos, crie metas e alcance seus objetivos.</p>
        <p>Crie sua conta gratuitamente e tenha tudo isso em um único lugar:</p>
        <Link to={"/cadastro"}>
          <Button>Cadastre-se</Button>
        </Link>
      </div>
    </SContainer>
  );
};

export default HomeContent;
