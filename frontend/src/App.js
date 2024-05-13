import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChatPage from './components/ChatPage/ChatPage';
import { ProtectedRoute } from 'protected-route-react';
import './App.css'
import { useSelector } from 'react-redux';

const fileUploadCss = {
  cursor: 'pointer',
  border: 'none',
  height: '100%',
  backgroundColor: 'white',
  fontWeight: '500',
  textAlign: 'center',
  width: '60%',
};

export const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,

};


function App() {

  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/chat"
            >
              <HomePage/>
            </ProtectedRoute>} />
          <Route exact path='/chat' element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect="/"
            >
              <ChatPage/>
            </ProtectedRoute>} />

          {/* <Route exact path='/' element={<HomePage />} /> */}
          {/* <Route exaxt path='/chat' element={<ChatPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
