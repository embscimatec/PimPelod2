import { IonCard, IonCardContent, IonRow } from '@ionic/react';
import React from 'react';


const CardSobreNos: React.FC = () => {

    return (
        <IonCard>
            <IonCardContent class="ion-margin-top">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Sobre Nós
                    </h2>
                </IonRow>
               
            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;