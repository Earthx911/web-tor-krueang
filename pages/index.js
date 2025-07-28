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

      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.card}>
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

        <div style={styles.right}>
          <img src="/steve-jobs.webp" alt="Steve Jobs" style={styles.image} />
          <p style={styles.quote}>ข้าคือคนปลุกสตีฟจ็อป</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#1c1c1e',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
  },
  logo: {
    width: '60px',
    marginBottom: '1rem',
    filter: 'invert(1)',
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '1.5rem',
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
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.8rem',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
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
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  quote: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
  },
};
