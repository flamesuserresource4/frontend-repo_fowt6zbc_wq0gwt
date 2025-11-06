import { useEffect, useState } from 'react'

const SIZES = ['S', 'M', 'L', 'XL']

export default function OrderForm({ selectedModel, onSubmitted }) {
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    phone: '',
    address: '',
    model: selectedModel?.name || '',
    size: '',
    quantity: 1,
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedModel?.name) {
      setForm((f) => ({ ...f, model: selectedModel.name }))
    }
  }, [selectedModel])

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim pesanan')
      onSubmitted?.(data)
      setForm({
        customer_name: '', email: '', phone: '', address: '',
        model: selectedModel?.name || '', size: '', quantity: 1, notes: ''
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Form Pemesanan</h2>
      <p className="mt-1 text-gray-600">Isi data Anda dengan benar</p>
      <form onSubmit={submit} className="mt-6 grid gap-4 rounded-xl border bg-white p-6 shadow-sm">
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input required value={form.customer_name} onChange={(e)=>update('customer_name', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Nama Anda" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={form.email} onChange={(e)=>update('email', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="email@contoh.com" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Nomor HP/WA</label>
            <input required value={form.phone} onChange={(e)=>update('phone', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="08xxxx" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Alamat Pengiriman</label>
            <input required value={form.address} onChange={(e)=>update('address', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Alamat lengkap" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm font-medium text-gray-700">Model</label>
            <input readOnly value={form.model} className="mt-1 w-full cursor-not-allowed rounded-md border bg-gray-50 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Ukuran</label>
            <select required value={form.size} onChange={(e)=>update('size', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
              <option value="">Pilih Ukuran</option>
              {SIZES.map(s=> <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Jumlah</label>
            <input type="number" min={1} max={20} value={form.quantity} onChange={(e)=>update('quantity', Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Catatan</label>
          <textarea value={form.notes} onChange={(e)=>update('notes', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" rows={3} placeholder="Contoh: tambah visor smoke" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Data pesanan akan otomatis tercatat dan notifikasi terkirim.</p>
          <button disabled={loading} className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60">
            {loading ? 'Mengirim...' : 'Kirim Pesanan'}
          </button>
        </div>
      </form>
    </section>
  )
}
