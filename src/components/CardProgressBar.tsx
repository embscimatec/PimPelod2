import { IonCard, IonCol, IonRow, IonCardContent, IonText, IonProgressBar } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Valor {
    porcentagem: number
}

const ProgressBar: FunctionComponent<Valor> = ( {porcentagem} : Valor ) => {
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