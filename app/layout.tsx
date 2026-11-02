import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Air Astana', description: 'Air Astana XVIII Management Conference 2026 – Going Global. December 3, 2026.', icons: { icon: '/air-astana-mark.png', apple: '/air-astana-mark.png' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
