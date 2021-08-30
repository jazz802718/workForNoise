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
            title="工程名稱"
            value="高雄市立小港醫院BOT醫療大樓新建工程"
          />
          <SimpleColumn title="建照執照" value="(108)高市工建築字第02302號" />
          <SimpleColumn title="起造人" value="財團法人私立高雄醫學大學" />
          <SimpleColumn title="設計人" value="劉培森建築師事務所" />
          <SimpleColumn title="監造人" value="劉培森建築師事務所" />
          <SimpleColumn title="承造人" value="聯鋼營造工程股份有限公司" />
          <Summary
            title="工程概要"
            value="地下三樓，地上十樓，高雄市立小港醫院BOT醫療大樓"
            startDate="109年01月30日"
            endDate="112年01月30日"
          />
          <ComplexColumn
            topTitle="服務電話"
            bottomTitle="空汙管制編號"
            servicePhone="07-8010301"
            controlNumber="E109EB1008-1"
            director="工地主任"
            directorName="李權益"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} container>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="溫度" value={TMP} unit="°C" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="濕度" value={HUM} unit="%" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="PM10" value={PM10} unit="μg/m3" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="PM2.5" value={PM25} unit="μg/m3" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="TVOC" value={TVOC} unit="ppb" />
          </Grid>
          <Grid item xs={6} sm={4} md={12}>
            <Card title="均能音量" value={Leq} unit="db" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container align="center" className="direction-xs-column">
        <Hidden xsDown>
          <Grid item xs={false} sm={9} md={9}>
            <DateCard title={JseneDay} time={JseneTime} />
          </Grid>
          <Grid item xs={false} sm={3} md={3}>
            <Card title="最大音量" value={Lmax} unit="db" />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12} sm={false} md={false}>
            <Card title="最大音量" value={Lmax} unit="db" />
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
