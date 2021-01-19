import React from 'react';
import { IonRow } from '@ionic/react';

interface Referencia {
    autor: string,
    titulo: string,
    complemento: string
};

const Referencias: React.FC = () => {

    return (
        <div className="textos" >
            <IonRow class="ion-margin-top">
                <h2>
                    Referências
                </h2>
            </IonRow>
        </div>
    );
};

export default Referencias;