import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol } from '@ionic/react';
import React from 'react';

const Glossario : React.FC = () => {
    return(
        <>
        <IonPage>
                <IonContent color="primary" >
                    <IonGrid class="ion-margin">
                        <IonCol class="ion-justify-content-center">
                            <IonRow class="ion-justify-content-center">
                                <IonText>
                                    <h2>
                                        Glossário
                                    </h2>
                                </IonText>
                            </IonRow>
                            
                        </IonCol>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Glossario;