import { ShoppingCart } from 'lucide-react'

export default function Hero({ onOrderClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Pesan Helm Premium dengan Mudah
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Pilih model favorit, tentukan ukuran, dan lakukan pemesanan hanya dalam beberapa detik. Data pesanan otomatis tercatat dan notifikasi terkirim ke admin dan email Anda.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ShoppingCart className="h-5 w-5" /> Pesan Sekarang
              </button>
              <a href="#models" className="text-indigo-700 font-medium hover:underline">
                Lihat Model
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="h-72 w-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_25%_25%,#111_0,transparent_40%),radial-gradient(circle_at_75%_75%,#1f2937_0,transparent_45%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
