import { IonCard, IonCardContent, IonRow } from '@ionic/react';
import React from 'react';


const CardSobreNos: React.FC = () => {

    return (
        <IonCard>
            <IonCardContent class="ion-margin-top">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Sobre Nós
                    </h2>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <div className="titulo">
                        <h4>
                            O que é o IEEE?
                        </h4>
                    </div>
                    <div className="texto">
                        <h4>
                            O Instituto de Engenheiros Eletricistas e Eletrônicos ou Instituto de Engenheiros Eletrotécnicos e Eletrónicos ou IEEE é uma organização profissional sem fins lucrativos. O IEEE é a maior organização profissional técnica do mundo dedicada ao avanço da tecnologia em benefício da humanidade.
                        </h4>
                    </div>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <div className="titulo">
                        <h4>
                            Do objetivo:
                        </h4>
                    </div>
                    <div className="texto">
                        <h4>
                            O presente aplicativo busca realizar de forma rápida e eficiente os cálculos da
                            probabilidade de mortalidade (<i>PIM</i>) e disfunção de órgãos de uma criança (<i>PELOD</i>), para melhorar e otimizar
                            o atendimento nas UTIPs.
                        </h4>
                    </div>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;