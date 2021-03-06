/* --- STATE --- */
import { Nullable } from '../../../types';

export interface FastBtcFormState {
  step: number;
  receiverAddress: string;
  isReceiverAddressValidating: boolean;
  isReceiverAddressValid: boolean;
  depositAddress: string;
  minDepositAmount: number;
  maxDepositAmount: number;
  isDepositLoading: boolean;
  depositTx: Nullable<DepositTx>;
  transferTx: Nullable<TransferTx>;
  depositError: string;
  history: Array<HistoryItem>;
  isHistoryLoading: boolean;
}

export type ContainerState = FastBtcFormState;

export interface TransferTx {
  txHash: string;
  value: number;
}

export interface DepositTx {
  txHash: string;
  value: number;
}

export interface HistoryItem {
  btcadr: string;
  dateAdded: Date;
  id: number;
  status: 'confirmed' | 'pending';
  txHash: string;
  type: 'transfer' | 'deposit';
  valueBtc: number;
  valueUsd: number;
  web3adr: string;
}
