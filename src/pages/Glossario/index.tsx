import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonCard, IonCardContent, IonItemDivider } from '@ionic/react';
import React from 'react';
import ConceitosAplicados from './components/CardConceitosAplicados';
import PalavrasChaves from './components/CardPalavrasChaves';

const Glossario: React.FC = () => {
    return (
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
                            <IonRow class="ion-justify-content-center">
                                <IonCard>
                                    <IonCardContent class="ion-margin-top">
                                        <PalavrasChaves />
                                        <IonItemDivider mode="md" />
                                        <ConceitosAplicados />
                                        <IonItemDivider mode="md" />
                                    </IonCardContent>
                                </IonCard>
                            </IonRow>
                        </IonCol>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Glossario;