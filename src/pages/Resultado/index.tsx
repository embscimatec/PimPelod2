import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import ProgressBar from '../../components/CardProgressBar';

const Resultado: React.FC = () => {

    return (
        <>
            <IonPage>
                <IonContent color="primary">
                    <IonGrid class="ion-margin">
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
                    <ProgressBar porcentagem={0.4} />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Resultado;