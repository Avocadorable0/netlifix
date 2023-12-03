import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableStyle.css';

export default function BasictableDefensive(props) {
  const rows = props.data;
  return (
    <TableContainer component={Paper} className="TableContainer">
      <Table sx={{ minWidth: 650 }} className="Table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="TableHeadCell" >Equipe</TableCell>
            <TableCell className="TableHeadCell" align="right">Ligue</TableCell>
            <TableCell className="TableHeadCell" align="right">Tir concédé</TableCell>
            <TableCell className="TableHeadCell" align="right">Tacle par match</TableCell>
            <TableCell className="TableHeadCell" align="right">Interception par match</TableCell>
            <TableCell className="TableHeadCell" align="right">Faute par match</TableCell>
            <TableCell className="TableHeadCell" align="right">Hors jeu par match</TableCell>
            <TableCell className="TableHeadCell" align="right">Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="TableRow" component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell className="TableRow" align="right">{row[1]}</TableCell>
              <TableCell className="TableRow" align="right">{row[2]}</TableCell>
              <TableCell className="TableRow" align="right">{row[3]}</TableCell>
              <TableCell className="TableRow" align="right">{row[4]}</TableCell>
              <TableCell className="TableRow" align="right">{row[5]}</TableCell>
              <TableCell className="TableRow" align="right">{row[6]}</TableCell>
              <TableCell className="TableRow" align="right">{row[7]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}