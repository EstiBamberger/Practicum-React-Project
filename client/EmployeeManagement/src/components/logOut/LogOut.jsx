import { useEffect } from "react"
import AdminStore from "../../stores/AdminStore";
import CircularProgress from '@mui/material/CircularProgress';
function LogIn() {
  useEffect(() => {
    setTimeout(() => {
      AdminStore.handleLogOut();
      window.location.href = './'
    }, 2000);
  }, []);

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <CircularProgress size={20} color="inherit" />
        &nbsp;&nbsp;&nbsp; Exit . . .
      </div>
    </div>
  )
}

export default LogIn