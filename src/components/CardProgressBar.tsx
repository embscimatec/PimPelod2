import { IonCard, IonCol, IonRow, IonCardContent, IonText, IonProgressBar } from '@ionic/react';
import React from 'react';

const ProgressBar: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardContent class="ion-margin-top">
                    <IonCol class="ion-justify-content-center">
                        <IonText>
                            <h1>90%</h1>
                        </IonText>

                        <IonRow class="ion-margin-top">
                            <IonProgressBar color="danger" value={0.5} />
                        </IonRow>
                    </IonCol>

                </IonCardContent>
            </IonCard>
        </>
    );
};

export default ProgressBar;