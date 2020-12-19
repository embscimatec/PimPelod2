import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import CardInstruncoes from './components/CardInstrucoes';

const Informacoes: React.FC = () => {

    return (
        <>
            <IonPage>
                <IonContent color="primary" class="ion-padding">
                    <IonGrid class="ion-margin">
                        <IonCol class="ion-justify-content-center">
                            <IonRow class="ion-justify-content-center">
                                <IonText>
                                    <h2>
                                        Informações
                                    </h2>
                                </IonText>
                            </IonRow>
                            <IonRow class="ion-justify-content-center">
                                <CardInstruncoes />
                            </IonRow>
                        </IonCol>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Informacoes;