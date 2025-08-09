
import './globals.css';
export const metadata = { title: 'SmartNet Command Station', description: 'SoulSync — Powered by SmartUnityCore' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
