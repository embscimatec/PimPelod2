import { IonPage, IonContent, IonCard, IonTitle } from '@ionic/react';
import React, {useState} from 'react';
import CardRadio from './components/CardRadio';
import CardInputText from './components/CardInputText';
import './InputDados.css'
import { CardsRadio, CardsText } from '../../interfaces/Cards';
// import PalavrasChaves from './components/CardPalavrasChaves';
// import Referencias from './components/CardReferencias';



const lista_input_text : Array<CardsText> = [
    {
        pergunta: "Pressão sistólica:",
        unidade_medida: "mmHg",
        isdisabled: false,
    },
    {
        pergunta: "PaO2:",
        unidade_medida: "mmHg",
        resposta: 10,
        isdisabled: true,
    },
    {
        pergunta: "FiO2:",
        unidade_medida: "%",
        isdisabled: false,
    },
    {
        pergunta: "Base de excesso:",
        unidade_medida: "mmHg",
        isdisabled: false,
    }
    
]

const lista_cards_radio : Array<CardsRadio> = [
    {
        pergunta: "Reação das pupilas:",
        isdisabled: false,
    },
    {
        pergunta: "Diagnóstico de alto risco:",
        isdisabled: false,
    },
    {
        pergunta: "Ventilação mecânica:",
        isdisabled: false,
    },
    {
        pergunta: "Recuperação cirúrgica ou de conhecimento como principal razãode entrada:",
        isdisabled: false,
    },
    {
        pergunta: "Admissão após circulação extracorpórea:",
        isdisabled: false,
    },
    {
        pergunta: "Admissão eletiva:",
        isdisabled: false,
    },
]

export function ValidationArray(arr : Array<CardsRadio>) {
    let faltam = arr.filter(item => item.resposta === undefined);

    if (faltam.length > 0) {
        //faltam preencher dados
        return false;
    }
    //não achou dados faltando
    return true;
}

const ColetaDados: React.FC = () => {

    const [radioInput, setRadioInput] = useState<Array<CardsRadio>>(lista_cards_radio)
    const [textArray, setTextArray] = useState<Array<CardsText>>(lista_input_text)

    return (
        <>
            <IonPage>
                <IonContent color="primary" >
                    <br/>
                    <h1 className="coleta-titulo">Coleta de dados</h1>
                    <br/>
                    <IonCard className="card-radio-content" >
                        {textArray.map((value, index) => {
                            return (
                                <CardInputText 
                                key={index}
                                index={index}
                                arr={textArray}
                                setArray={setTextArray}
                               />
                            )
                        })}
                    </IonCard>

                    <IonCard className="card-radio-content" >
                        {radioInput.map((value, index) => {
                            return (
                                <CardRadio 
                                key={index}
                                index={index}
                                arr={radioInput}
                                setArray={setRadioInput}
                               />
                            )
                        })}
                    </IonCard>
                    <div className="div-btn">
                    <button className="coleta-dados-btn" onClick={e =>{console.log(textArray); console.log(radioInput)}}>CONTINUAR</button>
                        </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default ColetaDados;