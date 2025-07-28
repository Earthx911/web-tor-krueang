<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ตรวจสอบเครื่อง Apple</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Sarabun', sans-serif;
      display: flex;
      min-height: 100vh;
      color: white;
    }
    .left, .right {
      width: 50%;
      height: 100vh;
    }
    .left {
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      background: #1c1c1e;
      padding: 2rem;
      border-radius: 20px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 20px rgba(0,0,0,0.6);
      text-align: center;
    }
    .logo {
      width: 60px;
      filter: invert(1);
      margin-bottom: 1rem;
    }
    .title {
      font-size: 1.6rem;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      border: none;
      font-size: 1rem;
      text-align: center;
    }
    button {
      width: 100%;
      padding: 0.8rem;
      border-radius: 8px;
      border: none;
      background: #fff;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
    }
    .right {
      background: #fff;
      position: relative;
    }
    .right img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .quote {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      font-size: 1.1rem;
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="left">
    <div class="card">
      <img src="/Apple_logo_black.svg" alt="Apple Logo" class="logo" />
      <h1 class="title">ตรวจสอบเครื่อง Apple</h1>
      <input type="text" placeholder="กรอก IMEI หรือ Serial Number" />
      <button>🔍 ตรวจสอบตอนนี้</button>
    </div>
  </div>
  <div class="right">
    <img src="/Steve jobs.webp" alt="Steve Jobs" />
    <div class="quote">ข้าคือคนปลุกสตีฟจ็อป โดย Develop Earth</div>
  </div>
</body>
</html>
