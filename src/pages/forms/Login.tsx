import { Eye, EyeOff, Mail, User } from 'lucide-react';
import { useState, type ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type ValidationResult } from '../../hooks/useAuth';
import { LineWave } from 'react-loader-spinner';
import { toast, Toaster } from 'sonner';
import { useToken } from '../../hooks/useToken';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="email" className='font-medium'>E-mail</label>
      <div className="relative flex items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder='seu@email.com'
          value={value}
          onChange={onChange}
          className='flex-1 appearance-none relative p-4 focus:outline-0 border-b border-b-zinc-400 focus:border-b-white transition-colors duration-300'
        />
        <Mail className='absolute right-4 top-auto' />
      </div>
    </div>
  )
}

const PasswordInput = ({ value, onChange }: InputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <label htmlFor="password" className='font-medium'>Senha</label>
      <div className="relative flex items-center">
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          placeholder='********'
          value={value}
          onChange={onChange}
          className='flex-1 appearance-none relative p-4 focus:outline-0 border-b border-b-zinc-400 focus:border-b-white transition-colors duration-300'
        />
        <button onClick={() => setShow(!show)} type="button" className='absolute right-4 top-auto'>
          {show ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </div>
  )
}

interface FormProps {
  name: string;
  email: string;
  password: string;
}


interface ErrorMessageProps {
  errors?: ValidationResult[];
  field: string;
};

const ErrorMessage = ({ errors, field }: ErrorMessageProps) => {
  const error = errors?.find(err => err.path === field);

  return (
    <span className='text-center w-max h-max m-auto flex items-center justify-center rounded bg-red-500/5'>
      <p className='text-red-400'>{error?.msg}</p>
    </span>
  )
}

const Signup = () => {
  const [form, setForm] = useState<FormProps>({ name: "", email: "", password: "" });

  const { token } = useToken();

  const navigate = useNavigate();

  if (token) {
    navigate("/perfil");
    return;
  }

  const { status, errors, login, message } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }



  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    await login(payload);

    if (message && status === "failed") {
      toast.error(message);
      return;
    }

    if (message && status === "success") {
      setTimeout(() => { navigate("/loja"); }, 3000);
      toast.success(message);
    }
  };

  return (

    <section className='container m-auto md:max-w-2xl bg-zinc-800 shadow shadow-black/30 px-6 py-12 rounded-2xl flex flex-col gap-6 items-center justify-center'>
      <div className="flex flex-col gap-3 text-center">
        <h2 className='text-2xl'>Entrar</h2>
        <p className='text-sm'>Preencha os campos abaixo para continuar</p>
      </div>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-6'>

        <div className="flex flex-col gap-1">
          <EmailInput value={form.email} onChange={handleChange} />
          <ErrorMessage errors={errors} field='email' />
        </div>

        <div className="flex flex-col gap-1">
          <PasswordInput value={form.password} onChange={handleChange} />
          <ErrorMessage errors={errors} field='password' />
        </div>

        <Link to={"/esqueci-senha"} className='cursor-pointer text-sm'>Esqueci a senha</Link>

        <button type="submit" className='flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300 p-4 bg-orange-400 text-white rounded'>
          {status === "loading" ?
            <LineWave
              visible={true}
              height="32"
              width="32"
              color="#fff"
              ariaLabel="line-wave-loading"
              wrapperStyle={{}}
              wrapperClass=""
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            /> :
            <p className='font-semibold captilize'>Entrar</p>}
        </button>

        <div className="flex items-center justify-center gap-3 text-center">
          <hr className='flex-1 border-b border-b-gray-400/30' />
          <p className='text-xs'>Ou</p>
          <hr className='flex-1 border-b border-b-gray-400/30' />
        </div>

        <Link to={"/cadastro"} className='group flex items-center justify-center gap-1'>
          <p className='text-xs'>Não tem uma conta?</p>
          <span className='hover:underline transition-all duration-300 text-sm font-bold'>Cadastrar</span>
        </Link>

        <Toaster duration={3000} position='top-right' />
      </form>
    </section>
  )
}

export default Signup;