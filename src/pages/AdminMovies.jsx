import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { authFetch } from "../api/api";

export default function AdminMovies() {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await authFetch("http://localhost:8080/api/movies");
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;

    await authFetch(`http://localhost:8080/api/admin/movies/${id}`, {
      method: "DELETE"
    });

    fetchMovies();
  };

  const handleEdit = (id) => {
    window.location.href = `/admin/edit/${id}`;
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Manage Movies
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.releaseYear}</TableCell>
              <TableCell>{movie.language}</TableCell>

              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleEdit(movie.id)}
                >
                  Edit
                </Button>

                <Button
                  size="small"
                  color="error"
                  sx={{ ml: 1 }}
                  variant="contained"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

    </Box>
  );
}
