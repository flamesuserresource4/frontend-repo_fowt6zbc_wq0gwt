const MODELS = [
  { id: 'm1', name: 'AeroX', sizes: ['S','M','L','XL'], desc: 'Desain aerodinamis untuk kecepatan maksimum', price: 750000 },
  { id: 'm2', name: 'UrbanPro', sizes: ['S','M','L'], desc: 'Ringan dan stylish untuk harian', price: 550000 },
  { id: 'm3', name: 'TrailGuard', sizes: ['M','L','XL'], desc: 'Perlindungan ekstra untuk petualangan', price: 890000 },
]

export default function Models({ onSelect }) {
  return (
    <section id="models" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-bold text-gray-900">Pilihan Model</h2>
      <p className="mt-1 text-gray-600">Pilih model untuk mulai memesan</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MODELS.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m)}
            className="group rounded-xl border bg-white p-5 text-left shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{m.desc}</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                Rp{m.price.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="mt-4 text-sm text-gray-500">Ukuran: {m.sizes.join(', ')}</div>
            <div className="mt-6 inline-flex items-center text-indigo-700 group-hover:underline">Pilih model →</div>
          </button>
        ))}
      </div>
    </section>
  )
}
