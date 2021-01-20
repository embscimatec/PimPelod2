import React from 'react';
import { IonRow } from '@ionic/react';

interface Referencia {
    autor: string,
    titulo: string,
    complemento: string,
};

const Referencias: React.FC = () => {

    const referencias = [
        {
            autor: "GONÇALVES, Jean-Pierre et al",
            titulo: `Pediatric Logistic Organ Dysfunction-2 (Pelod-2) score as a model for
            predicting mortality in pediatric burn injury`,
            complemento: `Disponível em:
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6733216/ 
            Acesso em: 16 maio 2020`
        },
        {
            autor: `LETEURTRE, Stéphane et al`,
            titulo: "An Update of the Pediatric Logistic Organ Dysfunction Score",
            complemento: `Disponível em: https://cdn.journals.lww.com/ccmjournal/Abstract/2013/07000/PELOD_2__An_Update_of_the_PEdiatric_Logi
            stic_Organ.21.aspx 
            Acesso em: 16 maio 2020.`
        },
        {
            autor: `Open Pediatrics`,
            titulo: `PEDIATRIC INDEX OF MORTALITY 2`,
            complemento: `Estima o risco de mortalidade no ambiente de
            terapia intensiva pediátrica. Disponível em: https://www.openpediatrics.org/assets/calculator/pediatric-index-mortality-2 
            Acesso em: 02 maio 2020.`
        },
        {
            autor: `SFAR-Société Française d’Anesthésie et Réanimation`,
            titulo: `SFAR-Société Française d’Anesthésie et Réanimation`,
            complemento: `Calcula a probabilidade de falência de órgãos em pacientes de UTI pediátricas. Disponível em:
            https://sfar.org/scores2/pelod2.php#haut 
            Acesso em: 5 de junho de 2020`
        },
        {
            autor: `SLATER, Anthony; SHANN, Frank; PEARSON, Gale`,
            titulo: `PIM2: a revised version of the Paediatric Index of Mortality`,
            complemento: `Disponível em: https://link.springer.com/article/10.1007/s00134-002-1601-2 
            Acesso em: 16 maio 2020`
        },
    ];

    return (
        <>
            <div className="textos" >
                <IonRow class="ion-margin-top">
                    <h2>
                        Referências
                    </h2>
                </IonRow>
            </div>
            <div className="referencias" >
            {
                referencias.map((obj: Referencia) => {
                    return <IonRow class="ion-margin-top">
                        <p>
                            {obj.autor}. <b><i>{obj.titulo}</i></b>. {obj.complemento}.
                        </p>
                    </IonRow>
                })
            }
            </div>
        </>
    );
};

export default Referencias;