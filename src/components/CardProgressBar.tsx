import { IonCard, IonCol, IonRow, IonCardContent, IonText, IonProgressBar } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Valor {
    porcentagem: number
}

const ProgressBar: FunctionComponent<Valor> = ( {porcentagem} : Valor ) => {

    const statusVital = () => {
        if (porcentagem <= 0.4)
            return "success";
        else if (porcentagem > 0.4 && porcentagem < 0.7)
            return "warning";
        else
            return "dark";
    }

    return (
        <>
            <IonCard>
                <IonCardContent class="ion-margin-top">
                    <IonCol class="ion-justify-content-center">
                        <IonText color={statusVital()}>
                            <h1>{porcentagem*100}%</h1>
                        </IonText>

                        <IonRow class="ion-margin-top">
                            <IonProgressBar color={statusVital()} value={porcentagem} />
                        </IonRow>
                    </IonCol>

                </IonCardContent>
            </IonCard>
        </>
    );
};

export default ProgressBar;