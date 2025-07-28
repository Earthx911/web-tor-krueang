// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ตรวจสอบเครื่อง Apple</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        backgroundColor: '#000'
      }}>
        
        {/* ฝั่งซ้าย: ฟอร์ม */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            width: '100%',
            maxWidth: '400px',
          }}>
            <img src="/Apple_logo_black.svg" alt="Apple Logo" style={{ width: '60px', filter: 'invert(1)', margin: '0 auto' }} />
            <h1 style={{ color: '#fff', marginTop: '1rem' }}>ตรวจสอบเครื่อง <b>Apple</b></h1>
            <input
              placeholder="กรอก IMEI หรือ Serial Number"
              style={{
                marginTop: '1rem',
                padding: '0.8rem',
                width: '100%',
                borderRadius: '8px',
                border: 'none',
                textAlign: 'center',
                fontSize: '1rem'
              }}
            />
            <button style={{
              marginTop: '1rem',
              padding: '0.8rem',
              width: '100%',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              🔍 ตรวจสอบตอนนี้
            </button>
          </div>
        </div>

        {/* ฝั่งขวา: รูป + คำ */}
        <div style={{
          flex: 1,
          position: 'relative',
        }}>
          <img
            src="/Steve jobs.webp"
            alt="Steve Jobs"
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
            }}
          />
          <p style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            color: '#fff',
            fontSize: '1.2rem',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.5rem 1rem',
            borderRadius: '8px'
          }}>
            ข้าคือคนปลุกสตีฟจ็อป
          </p>
        </div>
      </div>
    </>
  );
}
