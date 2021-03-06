import { Grid, Hidden } from "@material-ui/core";
import Card from "./Components/Card";

import DateCard from "./Components/DateCard";
import SimpleColumn from "./Components/SimpleColumn";
import Summary from "./Components/Summary";
import ComplexColumn from "./Components/ComplexColumn";
// function XML() {
//   let xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("GET", "https://www.jsene.com/Api/ASE/ASE15.xml", false);
//   xmlhttp.send(null);
//   let xmlDoc = xmlhttp.responseXML;
//   console.log(xmlDoc);
//   document.write("<ul id='content' data-role='listview' data-inset='true'>");
//   let x = xmlDoc.getElementsByTagName("From_Jsene");
//   let a = x[0].getElementsByTagName("Date_Time")[0].childNodes[0].nodeValue
//   console.log(x[0].getElementsByTagName("Date_Time")[0].childNodes[0].nodeValue)
//   console.log(x[0].getElementsByTagName("STID")[0].childNodes[0].nodeValue)
//   console.log(x[0].getElementsByTagName("Value1")[0].childNodes[0].nodeValue) 
//   console.log(x[0].getElementsByTagName("Value2")[0].childNodes[0].nodeValue) 
//   console.log(x[0].getElementsByTagName("Value4")[0].childNodes[0].nodeValue) 
//   console.log(x[0].getElementsByTagName("Value5")[0].childNodes[0].nodeValue) 
//   console.log(x[0].getElementsByTagName("Value7")[0].childNodes[0].nodeValue) 
//   console.log(x[0].getElementsByTagName("Value8")[0].childNodes[0].nodeValue) 
// }

function App() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://www.jsene.com/Api/Kaohsiung_EPB/Construction.xml", false);
  xmlhttp.send(null);
  let xmlDoc = xmlhttp.responseXML;
  document.write("<ul id='content' data-role='listview' data-inset='true'>");
  let x = xmlDoc.getElementsByTagName("From_Jsene");
  let JseneDay = x[0].getElementsByTagName("Date_Time")[0].childNodes[0].nodeValue.slice(0,10)
  let JseneTime = x[0].getElementsByTagName("Date_Time")[0].childNodes[0].nodeValue.slice(11)
  // let STID = x[0].getElementsByTagName("STID")[0].childNodes[0].nodeValue
  let TMP = Math.round(x[0].getElementsByTagName("TMP")[0].childNodes[0].nodeValue * 10) / 10
  let HUM = Math.round(x[0].getElementsByTagName("HUM")[0].childNodes[0].nodeValue * 10) / 10
  let PM10 = Math.round(x[0].getElementsByTagName("PM10")[0].childNodes[0].nodeValue * 10) / 10
  let PM25 = Math.round(x[0].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue * 10) / 10
  let TVOC = Math.round(x[0].getElementsByTagName("TVOC")[0].childNodes[0].nodeValue * 10) / 10
  let Leq = Math.round(x[0].getElementsByTagName("Leq")[0].childNodes[0].nodeValue * 10) / 10
  let Lmax = Math.round(x[0].getElementsByTagName("Lmax")[0].childNodes[0].nodeValue * 10) / 10

  // console.log(x[0].getElementsByTagName("Date_Time")[0].childNodes[0].nodeValue)
  // console.log(x[0].getElementsByTagName("STID")[0].childNodes[0].nodeValue)
  // console.log(x[0].getElementsByTagName("Value1")[0].childNodes[0].nodeValue) 
  // console.log(x[0].getElementsByTagName("Value2")[0].childNodes[0].nodeValue) 
  // console.log(x[0].getElementsByTagName("Value4")[0].childNodes[0].nodeValue) 
  // console.log(x[0].getElementsByTagName("Value5")[0].childNodes[0].nodeValue) 
  // console.log(x[0].getElementsByTagName("Value7")[0].childNodes[0].nodeValue) 
  // console.log(x[0].getElementsByTagName("Value8")[0].childNodes[0].nodeValue) 

  return (
    <Grid container direction="column" style={{ border: "1px solid black" }}>
      <Grid item container style={{ border: "1px solid grey" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          container
          direction="column"
          spacing={0}
          wrap="nowrap"
        >
          <SimpleColumn
            title="????????????"
            value="????????????????????????BOT????????????????????????"
          />
          <SimpleColumn title="????????????" value="(108)?????????????????????02302???" />
          <SimpleColumn title="?????????" value="????????????????????????????????????" />
          <SimpleColumn title="?????????" value="???????????????????????????" />
          <SimpleColumn title="?????????" value="???????????????????????????" />
          <SimpleColumn title="?????????" value="????????????????????????????????????" />
          <Summary
            title="????????????"
            value="??????????????????????????????????????????????????????BOT????????????"
            startDate="109???01???30???"
            endDate="112???01???30???"
          />
          <ComplexColumn
            topTitle="????????????"
            bottomTitle="??????????????????"
            servicePhone="07-8010301"
            controlNumber="E109EB1008-1"
            director="????????????"
            directorName="?????????"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} container>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="??????" value={TMP} unit="??C" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="??????" value={HUM} unit="%" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="PM10" value={PM10} unit="??g/m3" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="PM2.5" value={PM25} unit="??g/m3" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="TVOC" value={TVOC} unit="ppb" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="????????????" value={Leq} unit="db" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container align="center" className="direction-xs-column">
        <Hidden xsDown>
          <Grid item xs={false} sm={9} md={9}>
            <DateCard title={JseneDay} time={JseneTime} />
          </Grid>
          <Grid item xs={false} sm={3} md={3}>
            <Card title="????????????" value={Lmax} unit="db" />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12} sm={false} md={false}>
            <Card title="????????????" value={Lmax} unit="db" />
          </Grid>
          <Grid item xs={12} sm={false} md={false}>
            <DateCard title={JseneDay} time={JseneTime} />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default App;
