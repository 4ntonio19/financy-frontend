import { SContainer } from "./styles";
import Button from "../button";
import { SubmitHandler, useForm } from "react-hook-form";
// import ModalAuth from "../Modal";
// import LoginModal from "../loginModal";
type Inputs = {
  fullName: string;
  birthDay: string;
  email: string;
  password: string;
  passwordConfirmed: string;
};
const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // const [modalLoginIsOpen, setIsOpen] = useState(false);
  // const closeModal = () => {
  //   setIsOpen(false);
  // };
  return (
    <SContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h1>Crie sua conta</h1>
        </div>
        <div className="modal-content">
          <label htmlFor="fullname" className="label-input">
            Nome completo
            <input
              type="text"
              {...register("fullName", {
                required: true,
                minLength: 5,
                pattern: /^(?=.{5,})(?!.*\s+$)^[a-zA-ZÀ-ú\s]+$/,
              })}
            />
            {errors.fullName && (
              <span className="error-message">
                {errors.fullName.type === "minLength"
                  ? "O nome precisa ter no mínimo 5 letras"
                  : "Formato inválido"}
              </span>
            )}
          </label>
          <label htmlFor="birthDay" className="label-input">
            Data de nascimento
            <input type="date" {...register("birthDay", { required: true })} />
            {errors.birthDay && (
              <span className="error-message">
                {errors.birthDay.type === "required"
                  ? "campo obrigatório"
                  : "Formato invalido"}
              </span>
            )}
          </label>
          <label htmlFor="email" className="label-input">
            Email
            <input
              type="email"
              placeholder="@email.com"
              {...register("email", { required: true })}
            />
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
              placeholder="@Abc123"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$/,
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
          <label htmlFor="" className="label-input">
            Confirmar senha
            <input
              type="password"
              placeholder="@Abc123"
              {...register("passwordConfirmed", {
                required: true,
                validate: (value) => value === getValues("password"),
              })}
            />
            {errors.passwordConfirmed && (
              <span className="error-message">
                {errors.passwordConfirmed.type === "required"
                  ? "campo obrigatório"
                  : "A senhas não coincidem"}
              </span>
            )}
          </label>
          <Button type="submit">Cadastrar</Button>
          {/* <div className="modal-footer">
            <p>
              Já possui uma conta?{" "}
              <a onClick={() => setIsOpen(true)}>Faça login</a>
            </p>
          </div>
          {modalLoginIsOpen && (
            <ModalAuth isOpen={modalLoginIsOpen} onClose={closeModal}>
              <LoginModal />
            </ModalAuth>
          )} */}
        </div>
      </form>
    </SContainer>
  );
};

export default RegisterModal;
