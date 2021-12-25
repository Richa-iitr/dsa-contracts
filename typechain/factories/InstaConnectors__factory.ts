/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InstaConnectors,
  InstaConnectorsInterface,
} from "../InstaConnectors";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "LogAddController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "LogDisable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "LogEnable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "LogEnableStatic",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "LogRemoveController",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chief",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "connectorArray",
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
    inputs: [],
    name: "connectorCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "connectorLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "connectors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "disableChief",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "enable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "enableChief",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "enableStatic",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "isConnector",
    outputs: [
      {
        internalType: "bool",
        name: "isOk",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "isStaticConnector",
    outputs: [
      {
        internalType: "bool",
        name: "isOk",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "staticConnectorArray",
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
    inputs: [],
    name: "staticConnectorLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "staticConnectors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611d26380380611d268339818101604052602081101561003357600080fd5b810190808051906020019092919050505080808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505060805160601c611c706100b660003980610673528061095b5280610c675280610e635280610fa352806112ab5250611c706000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806378ba255811610097578063ae15e02c11610066578063ae15e02c146104c5578063cc712c2314610509578063e6c09edf14610527578063f2e180491461056b57610100565b806378ba25581461038a578063a41098bf146103a8578063a829f165146103dc578063ac3f83341461046b57610100565b80632e1fbdce116100d35780632e1fbdce1461028a5780635bfa1b68146102a857806361f82780146102ec5780636b1056ae1461033057610100565b80630867fa45146101055780630e53aae91461015d5780630f70d4a7146101b7578063144c61fe146101fb575b600080fd5b6101316004803603602081101561011b57600080fd5b81019080803590602001909291905050506105c3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019f6004803603602081101561017357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ff565b60405180821515815260200191505060405180910390f35b6101f9600480360360208110156101cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061f565b005b6102726004803603602081101561021157600080fd5b810190808035906020019064010000000081111561022e57600080fd5b82018360208201111561024057600080fd5b8035906020019184602083028401116401000000008311171561026257600080fd5b9091929391929390505050610850565b60405180821515815260200191505060405180910390f35b6102926108fa565b6040518082815260200191505060405180910390f35b6102ea600480360360208110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610907565b005b61032e6004803603602081101561030257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c13565b005b6103726004803603602081101561034657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e3b565b60405180821515815260200191505060405180910390f35b610392610e5b565b6040518082815260200191505060405180910390f35b6103b0610e61565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610453600480360360208110156103f257600080fd5b810190808035906020019064010000000081111561040f57600080fd5b82018360208201111561042157600080fd5b8035906020019184602083028401116401000000008311171561044357600080fd5b9091929391929390505050610e85565b60405180821515815260200191505060405180910390f35b6104ad6004803603602081101561048157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f2f565b60405180821515815260200191505060405180910390f35b610507600480360360208110156104db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f4f565b005b61051161124a565b6040518082815260200191505060405180910390f35b6105696004803603602081101561053d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611257565b005b6105976004803603602081101561058157600080fd5b8101908080359060200190929190505050611552565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600381815481106105d057fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915054906101000a900460ff1681565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061074157507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b1580156106d757600080fd5b505afa1580156106eb573d6000803e3d6000fd5b505050506040513d602081101561070157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6107b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f742d616e2d6368696566000000000000000000000000000000000000000081525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f69483bb868dc7929bac7b0735c53b685aeb5438761d41d189fbcdde8011b279760405160405180910390a250565b60006001905060005b838390508110156108f3576002600085858481811061087457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108e657600091506108f3565b8080600101915050610859565b5092915050565b6000600580549050905090565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610a2957507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b1580156109bf57600080fd5b505afa1580156109d3573d6000803e3d6000fd5b505050506040513d60208110156109e957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610a9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f742d616e2d6368696566000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f616c72656164792d656e61626c6564000000000000000000000000000000000081525060200191505060405180910390fd5b610b648161158e565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506004600081548092919060010191905055508073ffffffffffffffffffffffffffffffffffffffff167fdc949ee4159e00c6f6c0277af4718b4329c1e113164f629e30029915196c530f60405160405180910390a250565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610d3557507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b158015610ccb57600080fd5b505afa158015610cdf573d6000803e3d6000fd5b505050506040513d6020811015610cf557600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610da7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f742d616e2d6368696566000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558073ffffffffffffffffffffffffffffffffffffffff167fb28f1bf5635ec9671f4b88cd6b50e297659dbdfbbe1dc45069e9844ec07a21a160405160405180910390a250565b60006020528060005260406000206000915054906101000a900460ff1681565b60045481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001905060005b83839050811015610f285760016000858584818110610ea957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f1b5760009150610f28565b8080600101915050610e8e565b5092915050565b60026020528060005260406000206000915054906101000a900460ff1681565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061107157507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b15801561100757600080fd5b505afa15801561101b573d6000803e3d6000fd5b505050506040513d602081101561103157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6110e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f742d616e2d6368696566000000000000000000000000000000000000000081525060200191505060405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156111a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f616c72656164792d656e61626c6564000000000000000000000000000000000081525060200191505060405180910390fd5b6111ac816118e4565b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fd1f70568663bd9b4f99ababac3441804970c24aacb20e350d5e0d7b14c5cdb2460405160405180910390a250565b6000600380549050905090565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061137957507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b15801561130f57600080fd5b505afa158015611323573d6000803e3d6000fd5b505050506040513d602081101561133957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6113eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f742d616e2d6368696566000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166114aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f616c72656164792d64697361626c65640000000000000000000000000000000081525060200191505060405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600460008154809291906001900391905055508073ffffffffffffffffffffffffffffffffffffffff167f388f3d05458eb2a997e29ad87ebff76b4482e8c12f760c04a84243c9907af6cc60405160405180910390a250565b6005818154811061155f57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611631576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4e6f742d76616c69642d636f6e6e6563746f720000000000000000000000000081525060200191505060405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663eb15f7816040518163ffffffff1660e01b8152600401604080518083038186803b15801561167857600080fd5b505afa15801561168c573d6000803e3d6000fd5b505050506040513d60408110156116a257600080fd5b810190808051906020019092919080519060200190929190505050915050600160038054905001811461173d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436f6e6e6563746f7249442d646f65736e742d6d61746368000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561178357600080fd5b505afa158015611797573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156117c157600080fd5b81019080805160405193929190846401000000008211156117e157600080fd5b838201915060208201858111156117f757600080fd5b825186600182028301116401000000008211171561181457600080fd5b8083526020830192505050908051906020019080838360005b8381101561184857808201518184015260208101905061182d565b50505050905090810190601f1680156118755780820380516001836020036101000a031916815260200191505b50604052505050506003829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611987576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4e6f742d76616c69642d636f6e6e6563746f720000000000000000000000000081525060200191505060405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663eb15f7816040518163ffffffff1660e01b8152600401604080518083038186803b1580156119ce57600080fd5b505afa1580156119e2573d6000803e3d6000fd5b505050506040513d60408110156119f857600080fd5b8101908080519060200190929190805190602001909291905050509150506001600580549050018114611a93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436f6e6e6563746f7249442d646f65736e742d6d61746368000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015611ad957600080fd5b505afa158015611aed573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015611b1757600080fd5b8101908080516040519392919084640100000000821115611b3757600080fd5b83820191506020820185811115611b4d57600080fd5b8251866001820283011164010000000082111715611b6a57600080fd5b8083526020830192505050908051906020019080838360005b83811015611b9e578082015181840152602081019050611b83565b50505050905090810190601f168015611bcb5780820380516001836020036101000a031916815260200191505b50604052505050506005829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505056fea2646970667358221220cce81d5036f1e077c7017f53227183664f43f410b1803d15bc5904ea342d39e264736f6c63430007000033";

type InstaConnectorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstaConnectorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstaConnectors__factory extends ContractFactory {
  constructor(...args: InstaConnectorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _instaIndex: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstaConnectors> {
    return super.deploy(
      _instaIndex,
      overrides || {}
    ) as Promise<InstaConnectors>;
  }
  getDeployTransaction(
    _instaIndex: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_instaIndex, overrides || {});
  }
  attach(address: string): InstaConnectors {
    return super.attach(address) as InstaConnectors;
  }
  connect(signer: Signer): InstaConnectors__factory {
    return super.connect(signer) as InstaConnectors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstaConnectorsInterface {
    return new utils.Interface(_abi) as InstaConnectorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstaConnectors {
    return new Contract(address, _abi, signerOrProvider) as InstaConnectors;
  }
}
