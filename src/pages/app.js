import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'src/Layout/Header';
import Footer from 'src/Layout/Footer';
import Loader from 'src/components/Loader';
import AdminPlanning from 'src/containers/admin/planning';
import Home from './home';
import Advice from './advice';
import Appointment from './appointment';
import FAQ from './faq';
import Become from './become';
import Cats from './cats';
import Subscription from './subscription';
import ProfileClient from './user/profile';
import ChatClient from './user/chatClient';
import UserPlanning from './user/planning';
import ProfilAdmin from './admin/profile';
import ClientList from './admin/clientList';
import ClientMap from './admin/clientMap';
import ClientDetail from './admin/clientDetails';
import Statistic from './admin/statistics';
import ChatAdmin from './admin/chat';
import Contact from './contact';
import Editor from '../modals/Editor';
import CGU from './cgu';
import Error from './error';

import 'src/styles/app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/conseils" component={Advice} />
      <Route exact path="/prendre-rendez-vous" component={Appointment} />
      <Route exact path="/foire-aux-questions" component={FAQ} />
      <Route exact path="/que-sont-ils-devenus" component={Become} />
      <Route exact path="/et-les-chats" component={Cats} />
      <Route exact path="/inscription" component={Subscription} />
      <Route
        exact
        path="/conditions-generales-d-utilisation"
        component={CGU}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profil" component={ProfileClient} />
      <Route exact path="/rendez-vous" component={UserPlanning} />
      <Route exact path="/messagerie" component={ChatClient} />
      <Route exact path="/backoffice/profil" component={ProfilAdmin} />
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
      <Route
        exact
        path="/backoffice/calendar"
        component={AdminPlanning}
      />
      <Route
        exact
        path="/backoffice/statistiques"
        component={Statistic}
      />
      <Route exact path="/backoffice/messagerie" component={ChatAdmin} />
      <Route exact path="/loader" component={Loader} />
      <Route exact path="/editor" component={Editor} />
      <Route path="/page-non-trouvee" component={Error} />
      <Redirect to="/page-non-trouvee" />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
