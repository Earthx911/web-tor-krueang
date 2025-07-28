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
        <title>Apple IMEI Checker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        />
      </Head>
      <div style={styles.page}>
        <div style={styles.card}>
          <img src="/Apple_logo_black.svg" alt="Apple" style={styles.logo} />
          <h1 style={styles.title}>ตรวจสอบเครื่อง Apple</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="กรอก IMEI หรือ Serial Number"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              🔍 ตรวจสอบตอนนี้
            </button>
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
      </div>
    </>
  );
}

const styles = {
  page: {
    backgroundColor: '#0d0d0d',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(28, 28, 30, 0.75)',
    color: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 0 30px rgba(0,0,0,0.8)',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logo: {
    width: '40px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.7rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.9rem',
    borderRadius: '10px',
    border: '1px solid #3a3a3c',
    backgroundColor: '#2c2c2e',
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  },
  button: {
    background: 'linear-gradient(135deg, #ffffff, #d9d9d9)',
    color: '#000',
    padding: '0.9rem',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  resultBox: {
    marginTop: '2rem',
    backgroundColor: '#2c2c2e',
    borderRadius: '12px',
    padding: '1.2rem',
    textAlign: 'left',
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
};
