import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#111",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="md">
        {/* Top Bar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
            {/*
          <Typography variant="h5" fontWeight="bold">
            🎬 Cinefy
          </Typography>

          <Box>
            <Button
              variant="outlined"
              sx={{ mr: 2, color: "white", borderColor: "white" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Box>
          */}
        </Box>
        {/* Welcome Section */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome 🎥
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.8 }}>
            Discover movies you’ll love based on your taste.
          </Typography>

          <Box mt={5}>
            <Button
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{ color: "white", borderColor: "white" }}
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
