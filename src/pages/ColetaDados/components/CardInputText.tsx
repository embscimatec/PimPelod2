import React, { FunctionComponent, useState } from 'react';
import { IonCard, IonRadioGroup, IonItem, IonRadio, IonLabel, IonList, IonTitle, IonInput } from '@ionic/react';
import { truncate } from 'fs';

interface CardsText {
    pergunta: string,
    unidade_medida: string,
    isdisabled: boolean,
    resposta?: number,
}

interface RadioProps {
    index: number,
    setArray(a: Array<CardsText>): void,
    arr: Array<CardsText>
}
const CardInputText: FunctionComponent<RadioProps> = ({ index, setArray, arr }: RadioProps) => {

    const [number, setNumber] = useState<number>();

    function setNewArray(value: number) : void {
        var aux : Array<CardsText> = arr;
        aux[index].resposta = value;
        setArray(aux)
    }


    function setEscolha(value: number): void {
        setNumber(value)
        setNewArray(value)
    }
    
 
    return (
        <div className="card-input-text">
            <h4 className="pergunta">{arr[index].pergunta}</h4>

            <IonInput 
                type="number"
                value={number}
                placeholder="0"
                onIonChange={(e)=> setEscolha(parseInt(e.detail.value!, 10))} 
                disabled={arr[index].isdisabled}
                className="input-text"
            />
            <label className="input-text">&nbsp;{arr[index].unidade_medida}</label>
        </div>

    );
}
export default CardInputText;