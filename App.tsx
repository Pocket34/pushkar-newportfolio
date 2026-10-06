import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050505',
        color: '#00d4ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>
        PUSHKAR GUPTA
      </h1>

      <p style={{ fontSize: '20px', marginBottom: '20px' }}>
        React App is Working ✅
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '12px 24px',
          background: '#00d4ff',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        TEST {count}
      </button>
    </div>
  );
}
