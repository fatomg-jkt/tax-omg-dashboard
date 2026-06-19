import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Tax Coordinator', description: 'Dashboard Perpajakan berbasis Excel' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="id"><body>{children}</body></html> }
