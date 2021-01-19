import React from 'react';
import { IonRow } from '@ionic/react';

interface Referencia {
    autor: string,
    titulo: string,
    complemento: string
};

const Referencias: React.FC = () => {

    const referencias = [
        {
            autor: "FARINA, Modesto; PEREZ, Clotilde; BASTOS, Dorinho",
            titulo: "Psicodinâmica das cores em comunicação",
            complemento: `Editora Blucher. 2011. pp. 13, 77, 86 e 96`
        },
    ];

    return (
        <>
            <div className="textos" >
                <IonRow class="ion-margin-top">
                    <h2>
                        Referências
                </h2>
                </IonRow>
            </div>
            {
                referencias.map((obj: Referencia) => {
                    return <IonRow class="ion-margin-top">
                        <p>
                            {obj.autor}. <b>{obj.titulo}</b>. {obj.complemento}.
                        </p>
                    </IonRow>
                })
            }
        </>
    );
};

export default Referencias;