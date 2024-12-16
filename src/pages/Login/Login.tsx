import { useForm } from 'react-hook-form'
import { Container, WrapperForm } from './styles'
import Logo from '../../assets/Logo.svg'
import { useLoginMutation } from '../../services/api'
import { createStandaloneToast } from '@chakra-ui/toast'
import { useNavigate } from 'react-router-dom'

const { toast } = createStandaloneToast()
type FormFields = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>()
  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const onSubmit = handleSubmit(async data => {
    await login(data).unwrap()
    toast({
      title: 'Login efetuado com sucesso',
      description: 'Seja bem-vindo ao Financy',
      status: 'success',
      duration: 5000,
      position: 'top',
    })
    navigate('/dashboard')
  })

  return (
    <Container>
      <WrapperForm>
        <div className="wrapper-logo">
          <img src={Logo} alt="Financy" />
          <span>Financy</span>
        </div>
        <form onSubmit={onSubmit} className="form-content">
          <div className="wrapper-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email', {
                required: { message: '* campo obrigatório', value: true },
                pattern: {
                  message: '* insira um email válido',
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="wrapper-input">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              {...register('password', {
                required: { message: '* campo obrigatório', value: true },
              })}
              placeholder="Senha"
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>
          <button type="submit">Entrar</button>
          <p className="account-message">
            Nào possui uma conta?{' '}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <span onClick={() => navigate('/signup')}>Clique aqui</span> para
            fazer o cadastro.
          </p>
        </form>
      </WrapperForm>
    </Container>
  )
}

export default Login
