import Box from '@material-ui/core/Box';


function Card(props) {
  return (
    <Box style={{ backgroundColor: "#17b057" }} p={3}>
      <div style={{ backgroundColor: "#128944",lineHeight:'2.3em',color:'white'}}>
          <div style={{fontSize:'1.3em',textAlign:'left'}}>{props.title}</div>
          <div style={{fontSize:'1.8em',textAlign:'center'}}>{`${props.value} ${props.unit}`}</div>
      </div>
    </Box>
  );
}

export default Card;
