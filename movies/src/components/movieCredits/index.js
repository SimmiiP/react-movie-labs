import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {getMovieCredits} from "../../api/tmdb-api";


export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Job</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((c) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                {c.job}
              </TableCell>
              <TableCell >{c.name}</TableCell>
              <TableCell >{c.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}