import { IonCard, IonCardContent, IonRow } from '@ionic/react';
import React from 'react';

interface PalavraChave {
    palavra:string,
    descricao:string
};

const CardSobreNos: React.FC = () => {


    return (
        <IonCard>
            <IonCardContent class="ion-margin-top">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Palavras Chaves
                    </h2>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <h4>
                        Palavra: Descrição da palavra aaaaaaaaaaaaaaaaa
                    </h4>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;