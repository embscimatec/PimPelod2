import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonList, IonCard, IonCardContent, IonItemDivider } from '@ionic/react';
import React from 'react';
import CardRadio from './components/CardRadio';
// import PalavrasChaves from './components/CardPalavrasChaves';
// import Referencias from './components/CardReferencias';

const ColetaDados: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonContent color="primary" >
                <CardRadio perguntas={['Fernanda é bonita?', 'Antonio toma banho?', 'Maria sabe fazer um aplicativo em menos de uma semana?']}/>
                </IonContent>
            </IonPage>
        </>
    );
};

export default ColetaDados;