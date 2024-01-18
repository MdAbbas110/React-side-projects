import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#17334F', color: 'white' }}>
      <button style={{ padding: '12px' }} onClick={() => navigate('/')}>
        Landing page
      </button>
      <button
        style={{ padding: '12px' }}
        onClick={() => navigate('/dashboard')}
      >
        Dashboard
      </button>
    </div>
  );
};

export default AppBar;
