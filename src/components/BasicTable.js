import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableStyle.css';

export default function BasicTable(props) {
  const rows = props.data;
  
  return (
    <TableContainer component={Paper} className="TableContainer">
      <Table sx={{ minWidth: 650 }} className="Table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="TableHeadCell" >Equipe</TableCell>
            <TableCell className="TableHeadCell" align="center">Ligue</TableCell>
            <TableCell className="TableHeadCell" align="center">But</TableCell>
            <TableCell className="TableHeadCell" align="center">Tir par match</TableCell>
            <TableCell className="TableHeadCell" align="center">Carton jaune/rouge</TableCell>
            <TableCell className="TableHeadCell" align="center">Possesion</TableCell>
            <TableCell className="TableHeadCell" align="center">Passe reussie</TableCell>
            <TableCell className="TableHeadCell" align="center">Duels aeriens</TableCell>
            <TableCell className="TableHeadCell" align="center">Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="TableRow" component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell className="TableRow" align="center">{row[1]}</TableCell>
                <TableCell className="TableRow" align="center">{row[2]}</TableCell>
                <TableCell className="TableRow" align="center">{row[3]}</TableCell>
                <TableCell className="TableRow" align="center">{row[4]} / {row[5]}</TableCell>
                <TableCell className="TableRow" align="center">{row[6]}</TableCell>
                <TableCell className="TableRow" align="center">{row[7]}</TableCell>
                <TableCell className="TableRow" align="center">{row[8]}</TableCell>
                <TableCell className="TableRow" align="center">{row[9]}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}