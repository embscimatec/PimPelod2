import { IonCard, IonCardContent, IonText } from '@ionic/react';
import React from 'react';

const ProgressBar: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardContent class="ion-margin-top">
                    <IonText>
                        <h1>90%</h1>
                    </IonText>
                </IonCardContent>
            </IonCard>
        </>
    );
};

export default ProgressBar;