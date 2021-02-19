import React, { FunctionComponent, useState } from 'react';
import {IonCard, IonRadioGroup, IonItem, IonRadio, IonLabel, IonList } from '@ionic/react';

interface RadioProps {
    perguntas: Array<string>
}
const CardRadio: FunctionComponent<RadioProps> = ( {perguntas} : RadioProps ) => {
    // const [dados, setDados] = useState<Array<boolean>>([]);
    // const [dados, setDados] = React.useState<Array<boolean>>([]);
    var dados: Array<boolean> = [];
    return (
        <IonCard className="card-radio-content" >
            {
                perguntas.map((titulo: string, index: number) => {
                    return (
                        <div key={index} className="card-radio">
                            <span>
                                {titulo}
                            </span>
                            <IonList>
                                <IonRadioGroup onIonChange={e => dados[index] = e.detail.value}>
                                    <IonItem>
                                        <IonRadio value={true}/>
                                        <IonLabel style={{paddingLeft: '5px'}}>Sim</IonLabel>
                                    </IonItem>

                                    <IonItem>
                                        <IonRadio value={false}/>
                                        <IonLabel style={{paddingLeft: '5px'}}>Não</IonLabel>
                                    </IonItem>
                                </IonRadioGroup>
                            </IonList>
                            <hr/>
                        </div>
                    )
                })
            }
            {/* <button onClick={() => console.log(dados)}>CLICAAAAAAAA</button> */}
        </IonCard>
    );
}
export default CardRadio;