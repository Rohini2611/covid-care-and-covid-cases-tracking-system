import "./App.css";

import Home from "./Sections/Home";
import SpreadOfCovid from "./Sections/SpreadOfCovid";
import Precautions from "./Sections/Precautions";
import FaqsOfCovid from "./Sections/FaqsOfCovid";
import CovidSymptoms from "./Sections/CovidSymptoms";
import CovidDiet from "./Sections/CovidDiet";
import Videos from "./Sections/Videos";
import Vaccine from "./Sections/Vaccine";
import Myths from "./Sections/Myths";
import Layout from "./Layout/Layout"
import {Route ,Switch, Redirect} from "react-router-dom";

function App() {
  return (
      <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Home'/>
        </Route>
        <Route path='/Home' exact>
          <Home />
          <SpreadOfCovid/>
          <Precautions/>
          <FaqsOfCovid/>
        </Route>
        <Route path='/Health' exact>
          <CovidSymptoms/>
          <CovidDiet/>
          <Videos/>
        </Route>
        <Route path='/Vaccine' exact>
          <Vaccine/>
          <Myths/>
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;