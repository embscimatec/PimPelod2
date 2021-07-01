import { IonHeader, IonToolbar, IonButton, IonBackButton, IonTitle, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import InfoPaciente from '../../components/CardInfoPacientes';
import ProgressBar from '../../components/CardProgressBar';
import CardInputText from '../ColetaDados/components/CardInputText';
import CardRadio from '../ColetaDados/components/CardRadio';
import { CardsRadio, CardsText } from '../../interfaces/Cards';


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


const Resultado: React.FC = () => {

    const [radioInput, setRadioInput] = useState<Array<CardsRadio>>(lista_cards_radio)
    const [textArray, setTextArray] = useState<Array<CardsText>>(lista_input_text)

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonButton slot="start" fill="clear">
                            <IonBackButton defaultHref="/calcular" color="dark" text="Voltar"/>
                        </IonButton>
                        <IonTitle color="dark">Resultado</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color="primary">
                    <IonGrid>
                        <IonCol class="ion-justify-content-center">
                            <IonRow class="ion-justify-content-center">
                                <IonText>
                                    <h2>
                                        RESULTADO
                                    </h2>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonGrid>
                    <ProgressBar porcentagem={0.5} />
                    <IonCard className="card-radio-content" >
                        <InfoPaciente nome="fernandinha" idade={15} calculo="PIM" resultado={40} />
                    </IonCard>
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
                </IonContent>
            </IonPage>
        </>
    );
};

export default Resultado;