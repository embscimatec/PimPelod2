import { IonCard, IonCardContent, IonRow } from '@ionic/react';
import React from 'react';

interface PalavraChave {
    palavra:string,
    descricao:string
};

const CardSobreNos: React.FC = () => {

    const elementos = [
        {
            palavra: "Admissão Eletiva",
            descricao: "a admissão pode demorar mais de 6 horas sem efeitos adversos." 
        },
        {
            palavra: "Circulação Extracorpórea",
            descricao: "método o qual os pulmões e coração são substituídos temporariamente por uma máquina chamada “pulmão-coração artificial”."
        },
        {
            palavra: "Contagem das Plaquetas",
            descricao: "determina a quantidade de plaquetas no sangue, é fundamental para detecção, prevenção e tratamento de uma série de condições;"
        },
        {
            palavra: "Contagem dos leucócitos",
            descricao: "obter a quantidade de glóbulos brancos no sangue para evidenciar ou não, a presença de infecção ou inflamação;"
        },
        {
            palavra: "Creatina",
            descricao: "taxa diretamente proporcional à massa muscular do paciente, quanto maior a massa muscular, maior a taxa;"
        },
        {
            palavra: "Escala de coma de Glasglow",
            descricao: `avalia situações de trauma permitindo a identificação
                de problemas neurológicos, a avaliação do nível de consciência da pessoa e ainda prever o
                prognóstico;
            `
        },
        {
            palavra: "Excesso de base",
            descricao: `medido em m.mol/L, refere-se ao excesso ou déficit da quantidade
            de base no sangue, indica se o sangue está em equilíbrio ácido-base.
            `
        },
        {
            palavra: "FiO2",
            descricao: `oxigênio inspirado fracionário
            `
        },
        {
            palavra: "Frequência Cardíaca",
            descricao: `número de batimentos cardíacos por minuto.
            `
        },
        {
            palavra: "Gasometria Arterial",
            descricao: `Eficácia da troca de O entre os alvéolos e os capilares pulmonares, medida em mmHg de PaO .
            `
        },
        {
            palavra: "Lactatemia",
            descricao: `Concentração de ácido lático medida em mmol/L`
        },
        {
            palavra: "PaO (kPa)/FiO2",
            descricao: `é a razão entre a pressão parcial de oxigênio arterial (PaO em mmHg) e o oxigênio inspirado fracionário ( FiO2 expresso como uma fração, não como uma porcentagem)`
        },
        {
            palavra: "PaCO2",
            descricao: `corresponde a pressão parcial de no sangue arterial e exprime a eficácia da ventilação alveolar`
        },
        {
            palavra: "PAS",
            descricao: `Pressão arterial sistólica medida em mmHg, é o maior valor verificado durante a
            aferição da medida da pressão arterial.`
        },
        {
            palavra: "Pós-cirúrgico ou operatório como razão de entrada na UTI",
            descricao: `indica se a causa da entrada do paciente na UTI foi devido a uma cirurgia ou procedimento ocorrido
            recentemente`
        },
        {
            palavra: "RFM",
            descricao: `reação foto motora das pupilas.`
        },
        {
            palavra: "Ventilação Mecânica",
            descricao: `Método de substituição da ventilação normal dos pulmões por
            meio de um aparelho`
        }
    ];

    return (
        <IonCard>
            <IonCardContent class="ion-margin-top">
                <IonRow class="ion-margin-bottom">
                    <h2>
                        Palavras Chaves
                    </h2>
                </IonRow>
                <IonRow class="ion-margin-bottom">
                    <h4>
                        Palavra: Descrição da palavra aaaaaaaaaaaaaaaaa
                    </h4>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CardSobreNos;