// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imei }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <>
      <Head>
        <title>ตรวจสอบเครื่อง Apple</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        <div style={styles.leftBox}>
          <img src="/Apple_logo_black.svg" alt="Apple Logo" style={styles.logo} />
          <h1 style={styles.title}>ตรวจสอบเครื่อง Apple</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="กรอก IMEI หรือ Serial Number"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>🔍 ตรวจสอบตอนนี้</button>
          </form>

          {result && (
            <div style={styles.resultBox}>
              <h3 style={styles.resultTitle}>ผลลัพธ์:</h3>
              <ul style={styles.resultList}>
                <li>📱 รุ่น: {result.model}</li>
                <li>🎨 สี: {result.color}</li>
                <li>💾 ความจุ: {result.capacity}</li>
                <li>🔐 iCloud: {result.icloud}</li>
                <li>🌍 ประเทศ: {result.country}</li>
                <li>⛔ สถานะ: {result.blacklist}</li>
              </ul>
            </div>
          )}
        </div>

        <div style={styles.rightBox}>
          <img src="/stevejobs.webp" alt="Steve Jobs" style={styles.jobsImage} />
          <p style={styles.caption}>ข้าคือคนปลุกสตีฟจ็อป</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    backgroundColor: '#0d0d0d',
    color: '#fff',
  },
  leftBox: {
    flex: 1,
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logo: {
    width: '48px',
    marginBottom: '1.2rem',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  resultBox: {
    marginTop: '2rem',
    backgroundColor: '#2c2c2e',
    borderRadius: '12px',
    padding: '1.2rem',
    width: '100%',
    maxWidth: '400px',
  },
  resultTitle: {
    marginBottom: '0.5rem',
  },
  resultList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '1.8',
  },
  jobsImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.85,
  },
  caption: {
    color: '#f0f0f0',
    position: 'absolute',
    bottom: '1.5rem',
    fontSize: '1.3rem',
    fontWeight: 300,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '0.5rem 1rem',
    borderRadius: '12px',
  },
};
