import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      {/* ด้านซ้าย: กล่องกรอก IMEI */}
      <div style={styles.card}>
        <img
          src="/Apple_logo_black.svg"
          alt="Apple Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>ตรวจสอบเครื่อง Apple</h1>
        <input
          type="text"
          placeholder="กรอก IMEI หรือ Serial Number"
          style={styles.input}
        />
        <button style={styles.button}>
          🔍 ตรวจสอบตอนนี้
        </button>
      </div>

      {/* ด้านขวา: ภาพสตีฟจ็อบส์ */}
      <div style={styles.imageContainer}>
        <img
          src="/Steve-Jobs.jpg"
          alt="Steve Jobs"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
  },
  card: {
    width: '50%',
    backgroundColor: '#111',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxSizing: 'border-box',
  },
  logo: {
    width: 60,
    marginBottom: 20,
    filter: 'invert(100%)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    marginBottom: 20,
    fontSize: '16px',
  },
  button: {
    width: '80%',
    padding: '12px 20px',
    background: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    transition: 'opacity 0.3s',
  },
  imageContainer: {
    width: '50%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'top center',
  },
};
