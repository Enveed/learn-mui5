import Container from "@mui/material/Container";
import "../App.css";
import TourCard from "../components/TourCard";
import Grid from "@mui/material/Unstable_Grid2";
import { cities } from "../utils/data";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="App">
      <Container
        sx={{
          my: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography variant="h4" component="h2" marginY={5}>
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default Home;
