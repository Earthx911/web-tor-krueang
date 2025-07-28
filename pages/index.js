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
      </Head>
      <div style={styles.page}>
        <div style={styles.left}>
          <img src="/Apple_logo_black.svg" alt="Apple Logo" style={styles.logo} />
          <h1 style={styles.title}>ตรวจสอบเครื่อง <span style={{ color: '#fff' }}>Apple</span></h1>
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

        <div style={styles.right}>
          <img src="/Steave%20jobs.webp" alt="Steve Jobs" style={styles.jobs} />
          <p style={styles.jobsText}>ข้าคือคนปลุกสตีฟจ็อป</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '2rem',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1',
    minWidth: '350px',
    maxWidth: '500px',
    backgroundColor: '#1c1c1e',
    padding: '2rem',
    borderRadius: '16px',
    color: '#fff',
    boxShadow: '0 0 20px rgba(0,0,0,0.6)',
    textAlign: 'center',
  },
  logo: {
    width: '60px',
    marginBottom: '1rem',
    filter: 'invert(1)',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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
    border: 'none',
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
  right: {
    flex: '1',
    minWidth: '300px',
    position: 'relative',
  },
  jobs: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  jobsText: {
    position: 'absolute',
    bottom: '5%',
    right: '10%',
    color: '#fff',
    fontSize: '1.2rem',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '0.3rem 1rem',
    borderRadius: '10px',
  },
};
