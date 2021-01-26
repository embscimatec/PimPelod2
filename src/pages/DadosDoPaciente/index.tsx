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
  IonToolbar,
  IonTitle,
  IonHeader,
  IonBackButton,
} from "@ionic/react";
import React, { useState } from "react";

const DadosPaciente: React.FC = () => {
  const agora = new Date().toISOString();
  const [data, setData] = useState("");
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" fill="clear">
              <IonBackButton
                defaultHref="/calcular"
                color="primary"
              ></IonBackButton>
            </IonButton>
            <IonTitle color="primary">Dados do Paciente</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent color="primary">
          {/* <IonGrid class="ion-margin">
            <IonCol class="ion-justify-content-center">
              <IonRow class="ion-justify-content-center">
                <IonText>
                  <div className="titulo">
                    <h2>Dados do Paciente</h2>
                  </div>
                </IonText>
              </IonRow>
            </IonCol>
          </IonGrid> */}
          <br />
          <IonCard>
            <IonCardContent class="ion-margin-top">
              <IonItem>
                <IonLabel position="stacked">
                  {" "}
                  Digite o nome do paciente
                </IonLabel>
                <IonInput placeholder="Nome do Paciente"></IonInput>
              </IonItem>

              <br />
              <IonItem>
                <IonLabel position="floating">
                  Insira a data de nascimento
                </IonLabel>
                <IonDatetime
                  placeholder="DD/MM/AAAA"
                  displayFormat="DD/MM/YYYY"
                  max={agora}
                  value={data}
                  onIonChange={(e) => setData(e.detail.value!)}
                ></IonDatetime>
              </IonItem>
              <br />

              <IonButton
                color="secondary"
                expand="block"
                shape="round"
                size="large"
              >
                <IonText>
                  <h2>Avançar</h2>
                </IonText>
              </IonButton>
            </IonCardContent>
            <br />
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default DadosPaciente;
