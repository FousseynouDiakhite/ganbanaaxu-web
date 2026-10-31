import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#0B141A', color: '#FFF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <h1 style={{ fontSize: 48, color: '#6200EE', marginBottom: 16 }}>Ganbanaaxu</h1>
          <p style={{ fontSize: 18, color: '#888', marginBottom: 40, maxWidth: 400 }}>
            Partagez vos moments avec la communauté.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.godapps.Ganbanaaxu"
              style={{ padding: '14px 28px', background: '#6200EE', color: '#FFF', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold' }}
            >
              📱 Android
            </a>
            <a
              href="https://apps.apple.com/app/idTON_ID"
              style={{ padding: '14px 28px', background: '#6200EE', color: '#FFF', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold' }}
            >
              📱 iOS
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}