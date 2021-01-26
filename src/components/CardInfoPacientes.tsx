import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonIcon, IonImg, IonItem, IonRow } from '@ionic/react';
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
                </IonCardContent>
            </IonCard>
        </>
    );
};

export default InfoPaciente;