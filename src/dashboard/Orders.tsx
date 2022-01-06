import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  address: string,
  ano: string,
  salary: number,
) {
  return { id, date, name, address, ano, salary };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Esha Shah',
    'Kathmandu',
    '010***********11',
    31200,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul Ghimire',
    'Hetauda',
    '871**********574',
    33155,
  ),
  createData(2, '16 Mar, 2019', 'Tom Glance', 'Pokhara', '198*******458', 80876),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Bhojpur',
    '986***********126',
    45678,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Tamang',
    '675*************267',
    'VISA ⠀•••• 5919',
    72189,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recently Paid Salary</Title>
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