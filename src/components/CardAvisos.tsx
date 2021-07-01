import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

const CardAviso: React.FC = () => {
    return (
        <IonCard>
            <IonCardContent>
                <div className="erros">
                    <p>
                        Não há resultados registrados!
                    </p>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default CardAviso;