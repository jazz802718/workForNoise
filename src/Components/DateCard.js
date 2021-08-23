import Box from "@material-ui/core/Box";

function DateCard(props) {
  return (
    <Box style={{ backgroundColor: "#17b057" }} p={3}>
      <div
        style={{
          display: "flex",
          backgroundColor: "#128944",
          fontSize: "2.0em",
          textAlign: "left",
          justifyContent: "space-around",
          lineHeight: "2em",
          color: "white",
        }}
      >
        <div>{props.title}</div>
        <div>{props.time}</div>
      </div>
    </Box>
  );
}

export default DateCard;
