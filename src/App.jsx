import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Models from './components/Models'
import OrderForm from './components/OrderForm'
import Toast from './components/Toast'

function App() {
  const formRef = useRef(null)
  const [selectedModel, setSelectedModel] = useState(null)
  const [toast, setToast] = useState({ open: false, title: '', description: '' })

  const scrollToForm = () => {
    const el = document.getElementById('order-form') || formRef.current
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">HelmStore</div>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#models" className="hover:text-gray-900">Model</a>
            <button onClick={scrollToForm} className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Pesan</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onOrderClick={scrollToForm} />
        <Models onSelect={(m)=>{ setSelectedModel(m); scrollToForm() }} />
        <div id="order-form" ref={formRef}>
          <OrderForm
            selectedModel={selectedModel}
            onSubmitted={(data)=>{
              setToast({ open: true, title: 'Pesanan berhasil!', description: `ID: ${data.id}. Notifikasi: ${data.notification_status}. Sheets: ${data.sheet_status}` })
            }}
          />
        </div>
      </main>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} HelmStore. Semua hak dilindungi.
        </div>
      </footer>

      <Toast open={toast.open} title={toast.title} description={toast.description} onClose={()=>setToast(s=>({ ...s, open:false }))} />
    </div>
  )
}

export default App
