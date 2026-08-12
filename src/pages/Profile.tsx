import { useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import { useUser } from '../hooks/useUser'
import { User } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Profile = () => {

  const { user } = useUser();
  const navigate = useNavigate();

  const { clearToken, token } = useToken();

  if (!token) {
    navigate("/login");
  }


  const handleLogout = () => {
    clearToken();

    setTimeout(() => {
      navigate("/");
    }, 3000);

    toast.success("Você foi deslogado!");
  };


  return (
    <section id='profile' className='flex flex-col gap-6'>
      <div className="flex flex-col gap-3">
        <h1 className='text-3xl'>Minha conta</h1>
        <p>Gerencie suas informações e pedidos</p>
      </div>

      <div className="container m-auto p-4 border border-zinc-400/30 rounded-">


        <div className="flex gap-3 items-center">
          <div className="p-4 rounded-full bg-orange-400/30 text-orange-400">
            <User size={48} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className='text-base font-bold'>{user?.name}</h2>
            <p className='text-xs font-light'>{user?.email}</p>
          </div>
        </div>

        <button type='button' className='p-2 mt-6 rounded border border-zinc-400 color-white hover:bg-zinc-400 transition-colors duration-300' onClick={handleLogout}>Sair</button>
      </div>

      <Toaster position='top-right' />

    </section>
  )
}

export default Profile;