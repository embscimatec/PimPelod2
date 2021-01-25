import React from 'react';
import { IonRow } from '@ionic/react';

interface Conceito {
    nome: string,
    descricao: string
};

const ConceitosAplicados: React.FC = () => {

    const conceitos = [
        {
            nome: "XXXX",
            descricao: "xxxxxxxxxxxxxxxxxxxx"
        },
        {
            nome: "XXXX",
            descricao: "xxxxxxxxxxxxxxxxxxxx"
        },
    ];

    return (
        <div className="textos" >
            <IonRow class="ion-margin-top">
                <h2>
                    Conceitos Aplicados
                </h2>
            </IonRow>
            {
                conceitos.map((obj: Conceito) => {
                    return <IonRow class="ion-margin-top">
                        <p>
                            {obj.nome}: {obj.descricao}.
                        </p>
                    </IonRow>
                })
            }
        </div>
    );
};

export default ConceitosAplicados;