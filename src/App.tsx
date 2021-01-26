import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculator, informationCircle, fileTrayFull, bookmarks } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Informacoes from './pages/Informacoes';
import Glossario from './pages/Glossario';
import Resultado from './pages/Resultado';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/informacoes" component={Informacoes} />
          <Route path="/glossario" component={Glossario} />
          <Route path="/resultado" component={Resultado} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="nav-bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={fileTrayFull} />
            <IonLabel>Seus cálculos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={calculator} />
            <IonLabel>Calcular</IonLabel>
          </IonTabButton>
          <IonTabButton tab="informacoes" href="/informacoes">
            <IonIcon icon={informationCircle} />
            <IonLabel>Informações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="glossario" href="/glossario">
            <IonIcon icon={bookmarks}  />
            <IonLabel>Glossário</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
