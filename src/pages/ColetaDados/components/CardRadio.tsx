import React, { FunctionComponent, useState } from 'react';
import { IonCard, IonRadioGroup, IonItem, IonRadio, IonLabel, IonList, IonTitle } from '@ionic/react';
import { truncate } from 'fs';

interface CardsRadio {
    pergunta: string,
    isdisabled: boolean,
    resposta?: boolean,
}

interface RadioProps {
    index: number,
    setArray(a: Array<CardsRadio>): void,
    arr: Array<CardsRadio>
}
const CardRadio: FunctionComponent<RadioProps> = ({ index, setArray, arr }: RadioProps) => {

    const [option, setOption] = useState<boolean>();

    function setNewArray(value: boolean) : void {
        var aux : Array<CardsRadio> = arr;
        aux[index].resposta = value;
        setArray(aux)
    }


    function setEscolha(value: boolean): void {
        setOption(value)
        setNewArray(value)
    }

    return (
        <div className="card-radio">
            <IonList>
                <IonTitle>
                    {arr[index].pergunta}
                </IonTitle>
                {arr[index].isdisabled ?
                    <IonRadioGroup value={arr[index].resposta} onIonChange={e => setEscolha(e.detail.value)}>
                        <IonItem>
                            <IonRadio value={true} disabled />
                            <IonLabel style={{ paddingLeft: '5px' }}>Sim</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonRadio value={false} disabled />
                            <IonLabel style={{ paddingLeft: '5px' }}>Não</IonLabel>
                        </IonItem>
                    </IonRadioGroup>
                    :
                    <IonRadioGroup value={option} onIonChange={e => setEscolha(e.detail.value)}>
                        <IonItem>
                            <IonRadio value={true} />
                            <IonLabel style={{ paddingLeft: '5px' }}>Sim</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonRadio value={false} />
                            <IonLabel style={{ paddingLeft: '5px' }}>Não</IonLabel>
                        </IonItem>
                    </IonRadioGroup>
                }
            </IonList>
            <hr />
            {/* <button onClick={() => console.log(dados)}>CLICAAAAAAAA</button> */}
        </div>

    );
}
export default CardRadio;