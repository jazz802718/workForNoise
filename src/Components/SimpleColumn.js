import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';


function SimpleColumn(props) {
    return (
        <Grid item xs={12} sm={12} md={12} container style={{ borderBottom: "1px solid black",borderRight:"1px solid black" }}>
        <Grid item xs={4} sm={4} md={3}  style={{ borderRight:"1px solid black" }}>
        <Box p={3} display="flex" alignItems="center" justifyContent="center">
          {props.title}
        </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={9}>
        <Box p={3} display="flex" alignItems="center" justifyContent="center">
            {props.value}
        </Box>
        </Grid>
      </Grid>
    )
}

export default SimpleColumn