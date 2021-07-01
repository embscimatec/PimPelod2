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

const InfoPaciente: FunctionComponent<Dados> = ({ nome, resultado, calculo, idade }: Dados) => {
    return (
        <>
            <IonItem>
                <IonAvatar slot="start">
                    <img src={avatar_icon} />
                </IonAvatar>
                <h4 className="pergunta">{nome}</h4>
            </IonItem>
            <div className="card-dados-paciente">
                <h4>
                    Situação:<br />
                    {/* Método:<br />
                    Idade:<br />
                     */}
                </h4>
                <h4 >
                    {resultado}%

                </h4>
            </div>
            <div className="card-dados-paciente">
                <h4>
                    Método:
                </h4>
                <h4>
                    {calculo}
                </h4>
            </div>
            <div className="card-dados-paciente">
                <h4>
                    Idade:
                </h4>
                <h4>
                    {idade}
                </h4>
            </div>
        </>
    );
};

export default InfoPaciente;