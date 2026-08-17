import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-100 text-slate-900">
      <Header />
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  )
}
