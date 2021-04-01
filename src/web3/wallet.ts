
import { toHex, bsv } from 'scryptlib';

export interface UTXO {
  txHash: number,
  outputIndex: string;
  satoshis: number;
  script: string;
}

export interface Output {
  satoshis: number,
  script: string;
}


export interface Input {
  utxo: UTXO,
  sequence: number,
  script: string;
}

export interface Tx {
  inputs: Input[],
  outputs: Output[],
}

export interface Account {
  name: string,
  paymail: string,
  address: string,
  permissions?: string[]
}


export enum NetWork {
  Testnet = 'testnet',
  Mainnet = 'mainnet',
  STN = 'STN'
}


export enum SignType {
  ALL = 0x00000001 | 0x00000040,
  SINGLE = 0x00000003 | 0x00000040,
  NONE = 0x00000002 | 0x00000040,
  ANYONECANPAY_ALL = 0x00000001 | 0x00000040 | 0x00000080,
  ANYONECANPAY_SINGLE = 0x00000003 | 0x00000040 | 0x00000080,
  ANYONECANPAY_NONE = 0x00000002 | 0x00000040 | 0x00000080
}


export abstract class wallet {

  network: NetWork;

  constructor(network: NetWork) {
    this.network = network;
  }


  abstract requestAccount(name: string, permissions: string[]): Promise<Account>;

  abstract getbalance(): Promise<number>;


  abstract signRawTransaction(tx: Tx, inputIndex: number, sigHashType: SignType,
    onlySig?: boolean,
  ): Promise<string>;

  abstract getSignature(tx: Tx, inputIndex: number, sigHashType: SignType
  ): Promise<string>;

  abstract sendRawTransaction(rawTx: string): Promise<string>;

  //Returns array of unspent transaction outputs
  abstract listunspent(minAmount: number, options?: {
    purpose?: string
  }): Promise<UTXO[]>;

  abstract getRawChangeAddress(options?: {
    purpose?: string
  }): Promise<string>;

  abstract getPublicKey(options?: {
    purpose?: string
  }): Promise<string>;

}