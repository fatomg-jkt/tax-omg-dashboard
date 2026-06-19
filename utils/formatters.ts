export const taxMenus = ['Dashboard','PPN','PPh Pasal 21','PPh Unifikasi','PB1','PPh UMKM','Dokumen Pajak'] as const
export const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
export function formatRupiah(value: number | string | undefined) { const number = Number(value || 0); return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number.isFinite(number) ? number : 0) }
export function parseNumber(value: unknown) { if (typeof value === 'number') return value; if (!value) return 0; const cleaned = String(value).replace(/[^0-9,-]/g, '').replace(',', '.'); return Number(cleaned) || 0 }
export function normalizeText(value: unknown) { return String(value ?? '').trim() }
export function todayId() { return new Date().toISOString() }
