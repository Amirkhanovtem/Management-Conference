import type { Metadata } from 'next';
import './globals.css';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const metadata: Metadata = { title: 'Air Astana', description: 'Air Astana XVIII Management Conference 2026 – Going Global. December 3, 2026.', icons: { icon: `${basePath}/air-astana-mark.png`, apple: `${basePath}/air-astana-mark.png` } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
