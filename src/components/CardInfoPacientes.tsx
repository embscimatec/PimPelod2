import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonRow } from '@ionic/react';
import avatar_icon from '../assets/avatar_icon.svg';

const InfoPaciente: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardContent class="ion-margin-top">
                    <IonItem>
                        <IonAvatar slot="start">
                            <img src={avatar_icon} />
                        </IonAvatar>
                        <div className="textos">
                            <h2>Nome do Paciente</h2>
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
                                        40%<br />
                                        PIM<br />
                                        19<br />
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