import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import SubhubTable from './components/subscriptions/SubhubTable'
import { Container } from 'react-bootstrap';

function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/' ? <SubhubTable /> : (
      <Container>
        <Outlet />
      </Container>
    )}
    </>
  )
}

export default App
