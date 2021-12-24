/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Variables, VariablesInterface } from "../Variables";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_instaIndex",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "accountAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accountID",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "accountLink",
    outputs: [
      {
        internalType: "address",
        name: "first",
        type: "address",
      },
      {
        internalType: "address",
        name: "last",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "count",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accountList",
    outputs: [
      {
        internalType: "address",
        name: "prev",
        type: "address",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accounts",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instaIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userLink",
    outputs: [
      {
        internalType: "uint64",
        name: "first",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "last",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "count",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "userList",
    outputs: [
      {
        internalType: "uint64",
        name: "prev",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "next",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106fa3803806106fa8339818101604052602081101561003357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505060805160601c610661610099600039806105a352506106616000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063748e6e181161005b578063748e6e18146102185780638028a9fd1461029f578063a41098bf1461032f578063f227a99f1461036357610088565b80635f3c37f91461008d57806360330d791461012c57806368cd03f61461018e5780636cfaf5e9146101b6575b600080fd5b6100e3600480360360408110156100a357600080fd5b81019080803567ffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103e7565b604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b6101626004803603602081101561014257600080fd5b81019080803567ffffffffffffffff169060200190929190505050610458565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019661048b565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6101f8600480360360208110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a3565b604051808267ffffffffffffffff16815260200191505060405180910390f35b61026e6004803603604081101561022e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff1690602001909291905050506104ca565b604051808367ffffffffffffffff1681526020018267ffffffffffffffff1681526020019250505060405180910390f35b6102d5600480360360208110156102b557600080fd5b81019080803567ffffffffffffffff169060200190929190505050610523565b604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018267ffffffffffffffff168152602001935050505060405180910390f35b6103376105a1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103a56004803603602081101561037957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105c5565b604051808467ffffffffffffffff1681526020018367ffffffffffffffff1681526020018267ffffffffffffffff168152602001935050505060405180910390f35b6006602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900467ffffffffffffffff1681565b60016020528060005260406000206000915054906101000a900467ffffffffffffffff1681565b6004602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900467ffffffffffffffff16905082565b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900467ffffffffffffffff16905083565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900467ffffffffffffffff16908060000160109054906101000a900467ffffffffffffffff1690508356fea2646970667358221220ad05f3f7304c7f71f5f6f448842da3b197215611f468dce305d01ddca99d0fa964736f6c63430007000033";

type VariablesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VariablesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Variables__factory extends ContractFactory {
  constructor(...args: VariablesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _instaIndex: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Variables> {
    return super.deploy(_instaIndex, overrides || {}) as Promise<Variables>;
  }
  getDeployTransaction(
    _instaIndex: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_instaIndex, overrides || {});
  }
  attach(address: string): Variables {
    return super.attach(address) as Variables;
  }
  connect(signer: Signer): Variables__factory {
    return super.connect(signer) as Variables__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VariablesInterface {
    return new utils.Interface(_abi) as VariablesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Variables {
    return new Contract(address, _abi, signerOrProvider) as Variables;
  }
}