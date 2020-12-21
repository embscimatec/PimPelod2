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
                    <h4>
                        O que é o IEEE?
                    </h4>
                    <div className="texto">
                        <h4>
                            O Instituto de Engenheiros Eletricistas e Eletrônicos ou Instituto de Engenheiros Eletrotécnicos e Eletrónicos ou IEEE é uma organização profissional sem fins lucrativos. O IEEE é a maior organização profissional técnica do mundo dedicada ao avanço da tecnologia em benefício da humanidade.
                        </h4>
                    </div>
                </IonRow>

            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;