import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";

function ComplexColumn(props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      container
      style={{
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
      }}
    >
      {/* 左側 */}
      <Grid item xs={12} sm={12} md={9} container>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Box p={3} display="flex" alignItems="center" justifyContent="center">
            {props.topTitle}
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          container
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={4}
            style={{ borderRight: "1px solid black" }}
          >
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              工地電話
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={8}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {props.servicePhone}
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Box p={3} display="flex" alignItems="center" justifyContent="center">
            {props.bottomTitle}
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          container
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {props.controlNumber}
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Box p={3} display="flex" alignItems="center" justifyContent="center">
            {props.director}
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          container
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {props.directorName}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* 右側 */}
      <Grid item xs={12} sm={12} md={3} container>
        <Grid
          item
          xs={4}
          sm={4}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid black",
          }}
        >
          <Box>主管機關電話</Box>
        </Grid>
        <Grid item xs={8} sm={8} md={6} container direction="column">
          <Grid item>
            <Box p={2}>市民專線電話 : 1999</Box>
          </Grid>
          <Grid item>
            <Box p={2}>環保陳情專線 : 0800066666</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ComplexColumn;
