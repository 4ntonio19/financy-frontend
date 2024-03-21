import { SubmitHandler, useForm } from "react-hook-form";
import { SContainer } from "./styles";
import Button from "../button";
import { useNavigate } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};
const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem("user", data.email);
    navigate("/home");
  };
  return (
    <SContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h1>Entrar</h1>
        </div>
        <div className="modal-content">
          <label htmlFor="email" className="label-input">
            Email
            <input type="email" {...register("email", { required: true })} />
            {errors.email && (
              <span className="error-message">
                {errors.email.type === "required"
                  ? "campo obrigatório"
                  : "Formato invalido"}
              </span>
            )}
          </label>
          <label htmlFor="" className="label-input">
            Senha
            <input
              type="password"
              {...register("password", {
                required: true,
                // pattern:
                //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$/,
              })}
            />
            {errors.password && (
              <span className="error-message">
                {errors.password.type === "required"
                  ? "campo obrigatório"
                  : "A senha precisa ter pelo menos 1 letra, 1 número e 1 simbolo"}
              </span>
            )}
          </label>
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </SContainer>
  );
};

export default LoginModal;
