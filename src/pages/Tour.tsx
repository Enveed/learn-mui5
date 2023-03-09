import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900, my: 5 }}>
      <Typography variant="h3" component="h1">
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
          alt=""
          height={325}
          width={450}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body2" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          impedit delectus eos sequi minus odit pariatur mollitia, soluta iusto
          corrupti? Esse placeat laudantium exercitationem voluptate accusamus.
          Recusandae voluptatem harum at!x
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginY={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
