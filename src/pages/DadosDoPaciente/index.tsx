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
  IonItem,
  IonInput,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";

const DadosPaciente: React.FC = () => {
  const agora = new Date().toISOString();
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));
  return (
    <>
      <IonPage>
        <IonContent color="primary">
          <IonGrid class="ion-margin">
            <IonCol class="ion-justify-content-center">
              <IonRow class="ion-justify-content-center">
                <IonText>
                  <div className="titulo">
                    <h2>Dados do Paciente</h2>
                  </div>
                </IonText>
              </IonRow>
            </IonCol>
          </IonGrid>

          <IonCard>
            <IonCardContent class="ion-margin-top">
              <IonItem>
                <IonInput placeholder="Nome do Paciente"></IonInput>
              </IonItem>

              <br />
              <IonItem>
                <IonLabel position="floating" color="medium">
                  DD/MM/YYYY
                </IonLabel>
                <IonDatetime
                  displayFormat="DD/MM/YYYY"
                  min="1994-03-14"
                  max={agora}
                  value={data}
                  onIonChange={(e) => setData(e.detail.value!)}
                ></IonDatetime>
              </IonItem>
              <br />

              <IonButton color="secondary" expand="block">
                <IonText>
                  <h2>Avançar</h2>
                </IonText>
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default DadosPaciente;
