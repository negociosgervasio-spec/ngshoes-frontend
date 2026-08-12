import { useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Home, RotateCcw } from 'lucide-react';

type ErrorType = '404' | '500' | '403';

interface ErrorConfig {
  code: string;
  title: string;
  message: string;
}

const errors: Record<ErrorType, ErrorConfig> = {
  '404': {
    code: '404',
    title: 'Página não encontrada',
    message: 'A página que você está procurando não existe ou foi movida.',
  },
  '500': {
    code: '500',
    title: 'Erro interno',
    message: 'Algo deu errado no nosso servidor. Já estamos trabalhando nisso.',
  },
  '403': {
    code: '403',
    title: 'Acesso negado',
    message: 'Você não tem permissão para acessar esta página.',
  },
};

interface ErrorPageProps {
  type?: ErrorType;
}

export default function ErrorPage({ type = '404' }: ErrorPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const config = errors[type];

  // Detect type from location state if passed programmatically
  const stateType = (location.state as { errorType?: ErrorType } | null)?.errorType;
  const activeConfig = stateType ? errors[stateType] ?? config : config;

  const digits = activeConfig.code.split('');

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 select-none">

      {/* Animated code */}
      <div className="flex items-end gap-1 mb-10">
        {digits.map((d, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(5rem,20vw,9rem)] font-black leading-none tracking-tighter text-foreground"
          >
            {d === '0' ? (
              <span className="relative inline-block">
                {d}
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="w-[38%] h-[38%] rounded-full bg-[#FF6A00]" />
                </motion.span>
              </span>
            ) : d}
          </motion.span>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        className="w-16 h-px bg-[#FF6A00] mb-8 origin-left"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-center space-y-3 max-w-sm mb-12"
      >
        <h1 className="text-2xl font-semibold">{activeConfig.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{activeConfig.message}</p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <button
          onClick={() => navigate('/loja')}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          Ir à loja
        </button>
      </motion.div>

      {/* Retry — only for 500 */}
      {(stateType === '500' || type === '500') && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => window.location.reload()}
          className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Tentar novamente
        </motion.button>
      )}
    </div>
  );
}
