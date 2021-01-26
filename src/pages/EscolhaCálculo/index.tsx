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
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import logoApp from "../../assets/logoApp.svg";
import React, { useState } from "react";

const EscolhaCalculo: React.FC = () => {
  const calculo = useState("");

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle color="primary">Escolha do Cálculo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent color="primary">
          <br />
          <IonCard>
            <IonCardContent>
              <IonGrid>
                <IonCol>
                  <IonRow class="ion-justify-content-center">
                    <img src={logoApp} height="205px" />
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
                 
                    <IonRow >
                      <IonGrid class="ion-margin-top">
                        <IonButton
                          color="secondary"
                          expand="block"
                          href="/dadosPaciente/pim"
                          shape="round"
                        >
                          <IonText>
                            <h2>PIM</h2>
                          </IonText>
                        </IonButton>
                      </IonGrid>
                    </IonRow>
                    <IonRow >
                      <IonGrid >
                        <IonButton
                          color="secondary"
                          expand="block"
                          href="/dadosPaciente/pelod"
                          shape="round"
                        >
                          <IonText>
                            <h2>PELOD</h2>
                          </IonText>
                        </IonButton>
                      </IonGrid>
                    </IonRow>
                </IonCol>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default EscolhaCalculo;
