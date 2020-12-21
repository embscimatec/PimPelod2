import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import CardInstrucoes from './components/CardInstrucoes';
import CardSobreNos from './components/CardSobreNos';

const Informacoes: React.FC = () => {

    return (
        <>
            <IonPage>
                <IonContent color="primary" >
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
                                <CardInstrucoes />
                            </IonRow>
                            <IonRow class="ion-justify-content-center">
                                <CardSobreNos />
                            </IonRow>
                        </IonCol>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Informacoes;