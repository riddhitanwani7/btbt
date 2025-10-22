import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { SignupForm } from '@/components/AuthForm'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SignupPage() {
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
              <h2 className="text-2xl font-semibold mb-1">{t('create_account')}</h2>
              <p className="text-sm text-foreground/70">{t('subtext')}</p>
            </CardHeader>
            <CardContent>
              <SignupForm onSuccess={() => navigate('/login')} />
              <div className="flex items-center justify-between mt-4 text-sm">
                <span>{t('have_account')}</span>
                <Link to="/login" className="text-foreground/80 hover:underline">{t('back_to_login')}</Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
