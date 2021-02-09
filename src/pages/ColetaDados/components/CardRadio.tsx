import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonRadioGroup, IonItem, IonRadio, IonLabel, IonList } from '@ionic/react';

interface RadioProps {
    perguntas: Array<string>
}

export default function CardRadio({ perguntas }: RadioProps) {
    // const [dados, setDados] = useState<Array<boolean>>([]);
    // const [dados, setDados] = React.useState<Array<boolean>>([]);
    var dados: Array<boolean> = [];
    return (
        <IonCard >
            {
                perguntas.map((value: string, index: number) => {
                    return (
                        <IonGrid>
                            <IonRow>
                                <IonCol><h3>{value}</h3></IonCol>
                            </IonRow>
                            <IonList>
                                <IonRadioGroup value={dados[index]} onIonChange={e => dados[index] = e.detail.value}>
                                    <IonLabel>Sim</IonLabel>
                                    <IonRadio slot="start" value={true} />
                                    <IonLabel>Não</IonLabel>
                                    <IonRadio slot="start" value={false} />
                                </IonRadioGroup>
                            </IonList>
                            <hr></hr>
                        </IonGrid>
                    )
                })
            }
            <button onClick={() => console.log(dados)}>CLICAAAAAAAA</button>
        </IonCard>
    );
}