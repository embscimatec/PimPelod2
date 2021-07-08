import React, { useState } from 'react';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// const store = new Storage();
// await store.create();

let sqlInit = `
create table if not exists Paciente(
  idPaciente INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(32), 
  data_nasc DATE,
  data_coleta DATE,
  calculo VARCHAR(6),
  PRIMARY KEY idPaciente
);

create table if not exists PIM (
  idPIM INTEGER PRIMARY KEY AUTOINCREMENT,
  pas DOUBLE,
  pao2 DOUBLE,
  fio2 DOUBLE, 
  base_excesso DOUBLE,
  reacao_pupilas BOOLEAN,
  alto_risco BOOLEAN,
  ventilacao_mecanica BOOLEAN,
  recuperacao_cirurgica BOOLEAN,
  circulacao_extracorporea BOOLEAN,
  admissao_eletiva BOOLEAN,
  resultado DOUBLE,
  idPaciente unique INT,
  PRIMARY KEY idPIM,
  FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente)
);

create table if not exists PELOD (
  idPELOD INTEGER PRIMARY KEY AUTOINCREMENT,
  glasgow DOUBLE,
  pas DOUBLE,
  pao2 DOUBLE,
  paco2 DOUBLE,
  fio2 DOUBLE,
  lactatemia DOUBLE,
  creatinina DOUBLE,
  globulos_brancos DOUBLE,
  plaquetas DOUBLE,
  reacao_pupila BOOLEAN,
  ventilacao_mecanica BOOLEAN,
  resultado DOUBLE,
  idPaciente unique INT,
  PRIMARY KEY idPELOD,
  FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente)
);
`

let sqlite = SQLite;

export const initDb = (): void => {
    console.log('initDB fired!');
    try {
      SQLite.create({
        name: 'data.db', location: 'default'
      }).then(async (db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
      })
    } catch(e) {
      // setShowAlert(true);
      console.log('please use a device: ', e)
    }
    
};