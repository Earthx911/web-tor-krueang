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
        <title>ตรวจสอบเครื่อง iPhone</title>
      </Head>
      <div style={styles.container}>
        <img src="/apple-logo.png" alt="Apple" style={styles.logo} />
        <h1 style={styles.title}>เว็บตรวจเครื่อง</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="กรอก IMEI หรือ Serial Number"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>ตรวจสอบตอนนี้</button>
        </form>
        {result && (
          <div style={styles.result}>
            <p>รุ่น: {result.model}</p>
            <p>สี: {result.color}</p>
            <p>ความจุ: {result.capacity}</p>
            <p>iCloud: {result.icloud}</p>
            <p>ประเทศ: {result.country}</p>
            <p>สถานะ: {result.blacklist}</p>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
  },
  logo: {
    width: '60px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  input: {
    padding: '0.8rem',
    width: '80%',
    maxWidth: '400px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#fff',
    color: '#111',
    border: 'none',
    padding: '0.7rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  result: {
    marginTop: '2rem',
    textAlign: 'left',
    maxWidth: '400px',
    marginInline: 'auto',
    lineHeight: '1.6',
  },
};
