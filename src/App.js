import { Grid } from "@material-ui/core";
import Card from './Components/Card'
import DateCard from './Components/DateCard'
import SimpleColumn from "./Components/SimpleColumn";
import Summary from "./Components/Summary";
import ComplexColumn from "./Components/ComplexColumn";
// align="center"
function App() {
  return (
    <Grid container direction="column" style={{ border: "1px solid black" }} >
      <Grid item  container style={{ border: "1px solid grey" }} >
        <Grid item xs={12} sm={12} md={9} container direction="column"  spacing={0} wrap="nowrap" >
          <SimpleColumn title="工程名稱" value="高雄市立小港醫院BOT醫療大樓新建工程"/>
          <SimpleColumn title="建照執照" value="(108)高市工建築字第02302號"/>
          <SimpleColumn title="起造人" value="財團法人私立高雄醫學大學"/>
          <SimpleColumn title="設計人" value="劉培森建築師事務所"/>
          <SimpleColumn title="監造人" value="劉培森建築師事務所"/>
          <SimpleColumn title="承造人" value="聯鋼營造工程股份有限公司"/>
          <Summary title="工程概要" value="地下三樓，地上十樓，高雄市立小港醫院BOT醫療大樓" startDate="109年01月30日" endDate="112年01月30日"/>
          <ComplexColumn topTitle="服務電話" bottomTitle="空汙管制編號" servicePhone="07-8010301" controlNumber="E109EB1008-1"/>
        </Grid>
        <Grid item xs={12} sm={12} md={3} container>
          <Grid item xs={6} sm={4} md={12}><Card title="溫度" value="50" unit="°C"/></Grid>
          <Grid item xs={6} sm={4} md={12}><Card title="濕度" value="50" unit="%"/></Grid>
          <Grid item xs={6} sm={4} md={12}><Card title="PM10" value="50" unit="μg/m3"/></Grid>
          <Grid item xs={6} sm={4} md={12}><Card title="PM2.5" value="50" unit="μg/m3"/></Grid>
          <Grid item xs={6} sm={4} md={12}><Card title="TVOC" value="50" unit="ppb"/></Grid>
          <Grid item xs={6} sm={4} md={12}><Card title="均能音量" value="50" unit="db"/></Grid>
        </Grid>
      </Grid>
      <Grid item container align="center">
        <Grid item xs={8} sm={9} md={9}><DateCard title="2022年5月3日" time="15:30"/></Grid>
        <Grid item xs={4} sm={3} md={3}><Card title="最大音量" value="75" unit="db"/></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
