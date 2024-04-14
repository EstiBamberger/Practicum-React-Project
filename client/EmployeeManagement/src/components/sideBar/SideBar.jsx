import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import "./SideBar.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import AddJobPosition from '../addJobPosition/AddJobPosition'
import EditJobPosition from '../deleteJobPosition/DeleteJobPosition'
import ClearIcon from '@mui/icons-material/Clear';
import AdminStore from '../../stores/AdminStore';
import Tooltip from '@mui/material/Tooltip';
import { observer } from 'mobx-react';
import LogOut from '../logOut/LogOut'
import logo from '../../assets/logo.png'
const SideBar = observer(() => {
  const { t } = useTranslation();
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleAddClickOpen = () => {
    setOpenAdd(true);
  };
  const handleEditClickOpen = () => {
    setOpenDelete(true);
  };
  const handleAddClose = () => {
    setOpenAdd(false);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  const empty = () => {
  };
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="sidebar">
      <img src={logo} style={{ width: '30%', marginRight: '100%' }} />
      <ul className='list'>
        <li>
          <Tooltip title={AdminStore.isLogin ? 'Sign Out' : 'Sign In'}>
            <Link to={AdminStore.isLogin ? 'signOut' : 'signIn'}>
              <Button
                variant="Text"
                startIcon={AdminStore.isLogin ? <LockOpenIcon /> : <LockIcon />}
                sx={{
                  marginRight: '60px',
                  textTransform: 'none',
                  color: '#19b394',
                  fontWeight: 'bold',
                }}
              >
                {AdminStore.isLogin ? t('signOut') : t('signIn')}
              </Button></Link></Tooltip>
          {showDialog && <LogOut />}
        </li>
        <li>
          <Tooltip title='All Employees'>
            <Link to='./employeeTable'>
              <Button
                variant="Text"
                startIcon={<PeopleOutlineIcon />}
                sx={{
                  marginRight: '60px',
                  textTransform: 'none',
                  color: '#19b394',
                  fontWeight: 'bold',
                }}
              >
                {t('allEmployees')}
              </Button></Link></Tooltip>
        </li>
        <li>
          <Tooltip title={AdminStore.isLogin ? 'Add Employee' : 'No permission, sign in first'}  >
            <Link to={AdminStore.isLogin ? './addEmployee' : '/'}>
              <Button
                variant="Text"
                startIcon={<PersonAddIcon />}
                sx={{
                  marginRight: '60px',
                  textTransform: 'none',
                  cursor: AdminStore.isLogin ? 'pointer' : 'not-allowed',
                  color: AdminStore.isLogin ? '#19b394' : 'gray',
                  fontWeight: 'bold',
                }}

              >
                {t('addEmployee')}
              </Button></Link></Tooltip>
        </li>
        <li>
          <Tooltip title={AdminStore.isLogin ? 'Add Job Position' : 'No permission, sign in first'}>
            <Link onClick={AdminStore.isLogin ? handleAddClickOpen : empty}>
              <Button
                variant="Text"
                startIcon={<LibraryAddIcon />}
                sx={{
                  marginRight: '60px',
                  textTransform: 'none',
                  cursor: AdminStore.isLogin ? 'pointer' : 'not-allowed',
                  color: AdminStore.isLogin ? '#19b394' : 'gray',
                  fontWeight: 'bold',
                }}

              >
                {t('addJobPosition')}
              </Button></Link></Tooltip>
        </li>
        <Dialog open={openAdd} onClose={handleAddClose} aria-labelledby="form-dialog-title">
          <DialogContent style={{ alignItems: 'center' }}>
            <AddJobPosition close={handleAddClose} />
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
        <li>
          <Tooltip title={AdminStore.isLogin ? 'Edit Job' : 'No permission, sign in first'}>
            <Link onClick={AdminStore.isLogin ? handleEditClickOpen : empty}>
              <Button
                variant="Text"
                startIcon={<ClearIcon />}
                sx={{
                  marginRight: '60px',
                  textTransform: 'none',
                  color: AdminStore.isLogin ? '#19b394' : 'gray',
                  cursor: AdminStore.isLogin ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                }}
              >
                {t('deleteJob')}
              </Button></Link></Tooltip>
        </li>
        <Dialog open={openDelete} onClose={handleDeleteClose} aria-labelledby="form-dialog-title">
          <DialogContent style={{ alignItems: 'center' }}>
            <EditJobPosition close={handleDeleteClose} />
          </DialogContent>
        </Dialog>
      </ul>
    </div>
  );
});

export default SideBar;
