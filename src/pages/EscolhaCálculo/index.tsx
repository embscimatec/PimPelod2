import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonButton,
} from "@ionic/react";
import logoApp from "../../assets/logoApp.svg";
import React from "react";

const Informacoes: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent color="primary">
          <IonCard>
            <IonCardContent class="ion-margin-top">
              <IonGrid>
                <IonCol>
                  <IonRow class="ion-justify-content-center">
                    <img src={logoApp} />
                  </IonRow>
                </IonCol>
              </IonGrid>
              <IonGrid>
                <IonCol>
                  <IonRow class="ion-justify-content-center">
                    <IonLabel color="medium">
                      Escolha qual escore deseja calcular:
                    </IonLabel>
                  </IonRow>
                  <IonGrid class='className="ion-padding-top"'>
                    <IonRow class="ion-justify-content-center">
                      <IonGrid className="ion-padding-horizontal">
                        <IonButton color="secondary" expand="block">
                          <IonText>
                            <h2>PIM</h2>
                          </IonText>
                        </IonButton>
                      </IonGrid>
                    </IonRow>
                    <IonRow class="ion-justify-content-center">
                      <IonGrid className="ion-padding-horizontal">
                        <IonButton color="secondary" expand="block">
                          <IonText>
                            <h2>PELOD</h2>
                          </IonText>
                        </IonButton>
                      </IonGrid>
                    </IonRow>
                  </IonGrid>
                </IonCol>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Informacoes;
