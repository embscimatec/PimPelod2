import { IonCard, IonCardContent, IonCardHeader, IonRow } from '@ionic/react';
import React from 'react';

const CardInstrucoes: React.FC = () => {

    return (
        <IonCard>
            {/* <IonCardHeader>
                <h2>Instruções</h2>
            </IonCardHeader> */}
            <IonCardContent class="ion-margin-top">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Instruções
                    </h2>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <p>
                        Passo 1: explicação aa aaasa aaaaaaaaaaaaaaa
                    </p>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <p>
                        Passo 2: Descrição do passo 2 aaaaaaaaaaaaaa
                    </p>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <p>
                        Pass 3: Descrição do Passo 3 aaaaaaaaaaaaaaaaa
                    </p>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CardInstrucoes;