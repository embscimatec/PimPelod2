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
import Calcular from './pages/EscolhaCálculo';

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
import DadosPaciente from './pages/DadosDoPaciente';
import Glossario from './pages/Glossario';
import ColetaDados from './pages/ColetaDados';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/seusCalculos" component={Tab1} exact={true} />
          <Route path="/calcular" component={Calcular} exact={true} />
          <Route path="/informacoes" component={Informacoes} />
          <Route path="/glossario" component={Glossario} />
          <Route path="/coletadados" component={ColetaDados} />
          <Route path="/dadosPaciente/:escore" component={DadosPaciente} exact={true}/>
          <Route path="/" render={() => <Redirect to="/seusCalculos" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="SeusCalculos" href="/seusCalculos">
            <IonIcon icon={fileTrayFull} />
            <IonLabel>Seus cálculos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calcular" href="/calcular">
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
