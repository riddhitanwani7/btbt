import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { LoginForm } from '@/components/AuthForm'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">Credexa</span>
        </div>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1 grid place-items-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold mb-1">{t('welcome_back')}</h2>
              <p className="text-sm text-foreground/70">{t('subtext')}</p>
            </CardHeader>
            <CardContent>
              <LoginForm onSuccess={() => navigate('/dashboard')} />
              <div className="flex items-center justify-between mt-4 text-sm">
                <a className="text-foreground/80 hover:underline" href="#">{t('forgot')}</a>
                <Link to="/register" className="text-foreground/80 hover:underline">{t('signup')}</Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
