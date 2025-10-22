import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const { t } = useTranslation()
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 rounded-full fintech-blob left-10 top-10" />
        <div className="absolute w-96 h-96 rounded-full fintech-blob right-10 bottom-10" />
      </div>

      <header className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold">Credexa</div>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </header>

      <main className="flex-1 grid place-items-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('tagline')}</h1>
          <p className="text-foreground/80 text-lg md:text-xl mb-8">{t('subtext')}</p>
          <Link to="/login"><Button size="lg">{t('explore')}</Button></Link>
        </motion.div>
      </main>

      <footer className="px-6 py-6 flex items-center justify-between text-sm text-foreground/80">
        <span>© {new Date().getFullYear()} Credexa</span>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </footer>
    </div>
  )
}
