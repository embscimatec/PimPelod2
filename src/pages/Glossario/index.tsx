import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonList, IonCard, IonCardContent, IonItemDivider } from '@ionic/react';
import React from 'react';
import ConceitosAplicados from './components/CardConceitosAplicados';
import PalavrasChaves from './components/CardPalavrasChaves';
import Referencias from './components/CardReferencias';

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
                        </IonCol>
                    </IonGrid>
                    <IonCard>
                        <IonCardContent class="ion-margin-top">
                            <IonList>
                            <PalavrasChaves />
                            <IonItemDivider mode="md" />
                            <ConceitosAplicados />
                            <IonItemDivider mode="md" />
                            <Referencias />
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <br />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Glossario;