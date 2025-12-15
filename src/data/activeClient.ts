// ========================================
// 🎯 CONFIGURAÇÃO DO CLIENTE ATIVO
// ========================================
// Para trocar de cliente, basta alterar o import abaixo
// e salvar o arquivo. A página irá recarregar automaticamente!

// EXEMPLOS:
// import * as activeClient from './clients/cliente-exemplo';
// import * as activeClient from './clients/joao-santos';
// import * as activeClient from './clients/ana-oliveira';

// 👇 CLIENTE ATIVO (altere aqui):
import * as activeClient from './clients/cliente-exemplo';

// ========================================
// NÃO ALTERE DAQUI PARA BAIXO
// ========================================
export const { clientData, properties } = activeClient;
