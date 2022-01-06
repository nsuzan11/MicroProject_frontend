import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, address, ano, salary) {
  return { id, date, name, address, ano, salary };
}

const rows = [
  createData(
    0,
    '16 Mar, 2020',
    'Elvis Pandey',
    'Kathmandu',
    '100*******765',
    18000,
  ),
  createData(
    1,
    '19 Mar, 2020',
    'Paul Tamang',
    'Hetauda',
    '786*******2574',
    71056,
  ),
  createData(2, '20 Feb, 2020', 'Tom Koirala', 'Pokhara', '455*******1253', 45343),
  createData(
    3,
    '16 May, 2021',
    'Michael Pandey',
    'Chitwan',
    '133*******2000',
    65456,
  ),
  createData(
    4,
    '15 Mar, 2020',
    'Bruce Mainali',
    'Nepalgunj',
    '161********5919',
    21279,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Payments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>A/C no</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.ano}</TableCell>
              <TableCell align="right">{`$${row.salary}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more payments
      </Link>
    </React.Fragment>
  );
}