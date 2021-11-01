import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import Header from '../Layer/Header';
import Footer from '../Layer/Footer';
import Home from '../Home';
import Advice from '../Advice';
import Event from '../Event';
import FAQ from '../FAQ';
import Become from '../Become';
import Cats from '../Cats';
import Sub from '../Sub';
import ProfilClient from '../ClientSpace/Profil';
import RDVClient from '../ClientSpace/RDVClient';
import ChatClient from '../ClientSpace/ChatClient';
import ProfilAdmin from '../BackOffice/ProfilAdmin';
import ClientList from '../BackOffice/ClientList';
import ClientMap from '../BackOffice/ClientMap';
import ClientDetail from '../BackOffice/ClientDetail';
import Calendar from '../BackOffice/Calendar/index';
import Content from '../BackOffice/Content';
import Statistic from '../BackOffice/Statistic';
import ChatAdmin from '../BackOffice/ChatAdmin';
import Contact from '../Contact';
import CGU from '../CGU';
import Error from '../Error';
import Loader from '../Loader';

import 'src/styles/index.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/conseils" component={Advice} />
      <Route exact path="/prendre-rendez-vous" component={Event} />
      <Route exact path="/foire-aux-questions" component={FAQ} />
      <Route exact path="/que-sont-ils-devenus" component={Become} />
      <Route exact path="/et-les-chats" component={Cats} />
      <Route exact path="/inscription" component={Sub} />
      <Route
        exact
        path="/conditions-generales-d-utilisation"
        component={CGU}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profil" component={ProfilClient} />
      <Route exact path="/rendez-vous" component={RDVClient} />
      <Route exact path="/messagerie" component={ChatClient} />
      <Route
        exact
        path="/backoffice/profil"
        component={ProfilAdmin}
      />
      <Route
        exact
        path="/backoffice/liste-clients"
        component={ClientList}
      />
      <Route
        exact
        path="/backoffice/carte-clients"
        component={ClientMap}
      />
      <Route
        exact
        path="/backoffice/detail-clients"
        component={ClientDetail}
      />
      <Route exact path="/backoffice/calendar" component={Calendar} />
      <Route exact path="/backoffice/content" component={Content} />
      <Route
        exact
        path="/backoffice/statistiques"
        component={Statistic}
      />
      <Route
        exact
        path="/backoffice/messagerie"
        component={ChatAdmin}
      />
      <Route exact path="/loader" component={Loader} />
      <Route path="/page-non-trouvee" component={Error} />
      <Redirect to="/page-non-trouvee" />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
