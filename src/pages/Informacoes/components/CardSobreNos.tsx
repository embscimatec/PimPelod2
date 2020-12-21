import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';
import React from 'react';
import Antonio from '../../../assets/Antonio.png';
import Fernanda from '../../../assets/Fernanda.png';
import Maria from '../../../assets/Maria.png';
import logoEmbs from '../../../assets/logoEmbs.png'

const CardSobreNos: React.FC = () => {

    return (
        <IonCard>
            <IonCardContent class="ion-margin-top ion-margin-bottom">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Sobre Nós
                    </h2>
                </IonRow>
                <IonRow class="ion-justify-content-center ion-margin-bottom">
                    <img src={logoEmbs} />
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <div className="titulo">
                        <h4>
                            O que é o IEEE?
                        </h4>
                    </div>
                    <div className="texto">
                        <p>
                            O Instituto de Engenheiros Eletricistas e Eletrônicos ou Instituto de Engenheiros Eletrotécnicos e Eletrónicos ou IEEE é uma organização profissional sem fins lucrativos. O IEEE é a maior organização profissional técnica do mundo dedicada ao avanço da tecnologia em benefício da humanidade.
                        </p>
                    </div>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <div className="titulo">
                        <h4>
                            Do objetivo:
                        </h4>
                    </div>
                    <div className="texto">
                        <p>
                            O presente aplicativo busca realizar de forma rápida e eficiente os cálculos da
                            probabilidade de mortalidade (<i>PIM</i>) e disfunção de órgãos de uma criança (<i>PELOD</i>), para melhorar e otimizar
                            o atendimento nas UTIPs.
                        </p>
                    </div>
                </IonRow>
                <IonRow>
                    <div className="titulo">
                        <h4>
                            Desenvolvedores:
                        </h4>
                    </div>
                </IonRow>
                <IonRow class="ion-justify-content-center ion-margin-bottom">
                    <IonCol class="ion-margin-end">
                        <img src={Antonio} />
                    </IonCol>
                    <IonCol class="ion-margin-end">
                        <img src={Fernanda} />
                    </IonCol>
                    <IonCol>
                        <img src={Maria} />
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;