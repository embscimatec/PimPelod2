import React, { FunctionComponent } from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonRow } from '@ionic/react';
import avatar_icon from '../assets/avatar_icon.svg';
import { calculator } from 'ionicons/icons';

interface Dados {
    nome: string,
    resultado: number,
    calculo: string,
    idade: number,   
};

const InfoPaciente: FunctionComponent<Dados> = ( {nome, resultado, calculo, idade} : Dados ) => {
    return (
        <>
            <IonCard>
                <IonCardContent class="ion-margin-top">
                    <IonItem>
                        <IonAvatar slot="start">
                            <img src={avatar_icon} />
                        </IonAvatar>
                        <div className="textos">
                            <h2>{nome}</h2>
                        </div>
                    </IonItem>
                    <div className="dados">
                        <IonRow>
                            <IonCol>
                                <p>
                                    Situação:<br />
                                    Método:<br />
                                    Idade:<br />
                                </p>
                            </IonCol>
                            <IonCol>
                                <div className="info">
                                    <p>
                                        {resultado}%<br />
                                        {calculo}<br />
                                        {idade}<br />
                                    </p>
                                </div>
                            </IonCol>
                        </IonRow>
                    </div>
                </IonCardContent>
            </IonCard>
        </>
    );
};

export default InfoPaciente;