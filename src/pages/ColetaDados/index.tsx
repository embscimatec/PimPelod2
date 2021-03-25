import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonList, IonCard, IonCardContent, IonItemDivider } from '@ionic/react';
import { truncate } from 'fs';
import { car } from 'ionicons/icons';
import React, {useState} from 'react';
import CardRadio from './components/CardRadio';
import './InputDados.css'
// import PalavrasChaves from './components/CardPalavrasChaves';
// import Referencias from './components/CardReferencias';

interface CardsRadio {
    pergunta: string,
    isdisabled: boolean,
    resposta?: boolean,
}

// let card1 = {
//     pergunta: "Antônio toma banho?",
//     isdisabled: true,
// }

// let card2 = {
//     pergunta: "Maria é casada com Antônio?",
//     isdisabled: true,
//     resposta: true
// }

var lista_cards : Array<CardsRadio> = [
    {
        pergunta: "Antonio toma banho?",
        isdisabled: false,
    },
    {
        pergunta: "Maria é casada com antonio?",
        isdisabled: false,
    },
    {
        pergunta: "Fernanda tomou 4 banhos por dia?",
        isdisabled: false,
    },
]

const ColetaDados: React.FC = () => {

    const [cards, setCards] = useState<Array<CardsRadio>>(lista_cards)
    //TODO: Validação dos arrays

    return (
        <>
            <IonPage>
                <IonContent color="primary" >
                    <IonCard className="card-radio-content" >
                        {cards.map((value, index) => {
                            return (
                                <CardRadio 
                                key={index}
                                index={index}
                                arr={cards}
                                setArray={setCards}
                               />
                            )
                        })}
                        <button onClick={e => console.log(cards)}>CLICA EM MIM AAAAAAAA</button>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    );
};

export default ColetaDados;