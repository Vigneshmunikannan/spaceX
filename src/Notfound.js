import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Not Found</h2>
      <p style={styles.text}>Sorry, the requested page does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
  },
};

export default NotFound;
