import { useEffect } from 'react'

export default function Toast({ open, onClose, title, description }) {
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => onClose?.(), 4000)
    return () => clearTimeout(t)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-md">
      <div className="mx-4 rounded-lg border border-green-200 bg-green-50 p-4 shadow-lg">
        <div className="text-sm font-semibold text-green-800">{title}</div>
        {description && <div className="mt-1 text-sm text-green-700">{description}</div>}
      </div>
    </div>
  )
}
