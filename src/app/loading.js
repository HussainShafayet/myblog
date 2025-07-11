// src/pages/loading.js
import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  spinner: {
    width: 50,
    height: 50,
    border: '6px solid #ccc',
    borderTopColor: '#0070f3',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
};

// Add keyframes for spinner animation globally
if (typeof window !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  const keyframes =
    `@keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default Loading;
