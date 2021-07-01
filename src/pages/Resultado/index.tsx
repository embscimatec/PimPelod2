import { IonHeader, IonToolbar, IonButton, IonBackButton, IonTitle, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import InfoPaciente from '../../components/CardInfoPacientes';
import ProgressBar from '../../components/CardProgressBar';

const Resultado: React.FC = () => {

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonButton slot="start" fill="clear">
                            <IonBackButton defaultHref="/calcular" color="dark" text="Voltar"/>
                        </IonButton>
                        <IonTitle color="dark">Resultado</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color="primary">
                    <IonGrid>
                        <IonCol class="ion-justify-content-center">
                            <IonRow class="ion-justify-content-center">
                                <IonText>
                                    <h2>
                                        RESULTADO
                                    </h2>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonGrid>
                    <ProgressBar porcentagem={0.5} />
                    <InfoPaciente nome="fernandinha" idade={15} calculo="PIM" resultado={40} />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Resultado;