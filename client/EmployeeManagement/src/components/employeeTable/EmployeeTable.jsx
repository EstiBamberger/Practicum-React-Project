/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmployeeStore from '../../stores/EmployeeStore';
import { observer } from 'mobx-react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import EditEmployee from '../editEmployee/EditEmployee'
import * as XLSX from 'xlsx'; // Import all exports from 'xlsx'
import { Link } from 'react-router-dom';
import AdminStore from '../../stores/AdminStore';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({

  '& .MuiInputBase-input': {
    borderRadius: '5px',

    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    '&:hover': {
      backgroundColor: '#dde4e366',
    },
    '&:focus': {
      border: '1px solid black',
      outline: '4px auto -webkit-focus-ring-color'
    },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
}));
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 500,
  overflowY: 'auto',
  marginTop: '2%'
}));
const StyledTableHead = styled(TableHead)(({ theme }) => ({
  '& th': {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
  },
  '& th.MuiTableCell-root': {
    backgroundColor: '#19b394',
  },
}));
const EmployeeTable = observer(() => {
  useEffect(() => {
    EmployeeStore.getEmployees();
  }, []);
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [isDownload, setIsDownload] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  useEffect(() => {
    console.log(selectedEmployee); // Log the updated value of selectedEmployee
  }, [selectedEmployee]);
  const handleEditClickOpen = (employee) => {
    setSelectedEmployee(employee)
    setOpenEdit(true);
  };
  const handleEditClose = () => {
    setOpenEdit(false);
  };
  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    EmployeeStore.deleteEmployeeByTz(selectedEmployee.tz)
    setDeleteDialogOpen(false);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const highlightMatchingLetters = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) => (
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : part
    ));
  };
  const filterEmployees = EmployeeStore.employeesList.filter(e => !e.isDeleted)
  const filteredEmployees = filterEmployees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.tz.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.dateOfStartingWork.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadDataToExcel = () => {
    setIsDownload(true)
    const data = filteredEmployees.map(employee => ({
      'First Name': employee.FirstName,
      'Last Name': employee.LastName,
      'Tz': employee.Tz,
      'Start Date': employee.DateOfStartingWork
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'employees.xlsx');
    setTimeout(() => {
      setIsDownload(false);
    }, 2000);
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value)
  };
  const empty = () => {
  };
  return (
    <>
      <StyledDiv>
        <Tooltip title='Download'>
          <Button
            variant="Text"
            startIcon={isDownload == false ? <BrowserUpdatedIcon /> : <DownloadDoneIcon />}
            sx={{
              color: 'black',
              marginRight: '60px',
              textTransform: 'none'
            }}
            onClick={downloadDataToExcel}
          >
            {t('download')}
          </Button></Tooltip>
        <Tooltip title='Search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('search')}
              inputProps={{ 'aria-label': 'search' }}
              id="outlined-basic"
              label="Search"
              onChange={handleInputChange}
            />
          </Search></Tooltip>
      </StyledDiv>
      <StyledTableContainer component={Paper} style={{ height: `${10 * 8}vh`, overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="right">{t('firstName')}&nbsp;</StyledTableCell>
              <StyledTableCell align="right">{t('lastName')}&nbsp;</StyledTableCell>
              <StyledTableCell align="right">{t('tz')}&nbsp;</StyledTableCell>
              <StyledTableCell align="right">{t('startDate')}&nbsp;</StyledTableCell>
              <StyledTableCell align="right">&nbsp;</StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {filteredEmployees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">{t('noResultsFound')}</TableCell>
              </TableRow>
            ) : (
              filteredEmployees.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {highlightMatchingLetters(row.firstName, searchQuery)}
                  </StyledTableCell>
                  <StyledTableCell align="right">{highlightMatchingLetters(row.lastName, searchQuery)}</StyledTableCell>
                  <StyledTableCell align="right">{highlightMatchingLetters(row.tz, searchQuery)}</StyledTableCell>
                  <StyledTableCell align="right">{highlightMatchingLetters(row.dateOfStartingWork, searchQuery)}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                      <Tooltip title={AdminStore.isLogin ? "Edit" : "No permission, sign in first"}
                      >
                        <Link onClick={AdminStore.isLogin ? () => handleEditClickOpen(row) : empty}>
                          <IconButton style={{ cursor: AdminStore.isLogin ? 'pointer' : 'not-allowed' }}>
                            <EditIcon />
                          </IconButton></Link>
                      </Tooltip>
                      <Tooltip title={AdminStore.isLogin ? "Delete" : "No permission, sign in first"}>
                        <IconButton color="black" onClick={AdminStore.isLogin ? () => handleDelete(row) : empty}>
                          <DeleteIcon style={{ cursor: AdminStore.isLogin ? 'pointer' : 'not-allowed' }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <Dialog open={openEdit} onClose={handleEditClose} >
        <DialogContent>
          <StyledDiv className='dialog'
            sx={{
              width: '100%'
            }}>
            <EditEmployee employee={selectedEmployee} close={handleEditClose} />
          </StyledDiv></DialogContent>
      </Dialog>
      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
        <DialogActions>
          <Button onClick={closeDeleteDialog} sx={{ color: '#19b394' }} >
            Cancel
          </Button>
          <Button onClick={confirmDelete} autoFocus sx={{ color: '#19b394' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default EmployeeTable;
