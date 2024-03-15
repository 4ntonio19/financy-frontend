import React from "react";
import { SContainer } from "./styles";
import Button from "../button";
import { Link } from "react-router-dom";
const RegisterModal = () => {
  const handleSearchData = () => {
    console.log("teste");
  };
  return (
    <SContainer>
      <form onSubmit={handleSearchData}>
        <div className="modal-header">
          <h1>Crie sua conta</h1>
        </div>
        <div className="modal-content">
          <label htmlFor="" className="label-input">
            Nome completo
            <input type="text" required />
          </label>
          <label htmlFor="" className="label-input">
            Data de nascimento
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              max="9999/12/31"
              required
            />
          </label>
          <label htmlFor="" className="label-input">
            Email
            <input type="email" placeholder="@email.com" required />
          </label>
          <label htmlFor="" className="label-input">
            Senha
            <input type="pasword" placeholder="@Abc123" required />
          </label>
          <label htmlFor="" className="label-input">
            Confirmar senha
            <input type="password" placeholder="@Abc123" required />
          </label>
          <Button>Cadastrar</Button>
          <div className="modal-footer">
            <p>
              Já possui uma conta? <Link to={"/login"}>Faça login</Link>
            </p>
          </div>
        </div>
      </form>
    </SContainer>
  );
};

export default RegisterModal;
