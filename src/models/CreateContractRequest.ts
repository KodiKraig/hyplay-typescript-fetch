/* tslint:disable */
/* eslint-disable */
/**
 * HYPLAY API
 * HYPLAY API Specification
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: braydon@hytopia.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateContractRequest
 */
export interface CreateContractRequest {
    /**
     * The chain to deploy or import a contract on.
     * @type {string}
     * @memberof CreateContractRequest
     */
    chain: CreateContractRequestChainEnum;
    /**
     * The template id to deploy a contract for. Templates have pre-defined ABIs and bytecode, allowing quick deployment of contracts one or multiple times.
     * @type {string}
     * @memberof CreateContractRequest
     */
    templateId?: string;
    /**
     * An array of constructor arguments required by the contract template being deployed from. Only required if deploying a contract from a template that requires constructor arguments.
     * @type {Array<string>}
     * @memberof CreateContractRequest
     */
    args?: Array<string>;
    /**
     * A salt value as a hex string, prefixed with 0x. Only required if deploying a contract from a template as a user.
     * @type {string}
     * @memberof CreateContractRequest
     */
    salt?: string;
    /**
     * A nonce value as a hex string, prefixed with 0x. Only required if deploying a contract from a template as a user.
     * @type {string}
     * @memberof CreateContractRequest
     */
    nonce?: string;
    /**
     * An array of authority signatures to use for the contract deployment. Only required if deploying a contract from a template as a user. Provided signature(s) must be generated by the authority wallet of a user by signing a properly formatted "create request" object. See the hychain-crypto-js library on NPM for convenience methods in generating these signatures and create request objects if necessary.
     * @type {Array<string>}
     * @memberof CreateContractRequest
     */
    signatures?: Array<string>;
    /**
     * The deadline for the contract deployment execution. This can be set to a unix timestamp in the future. Typically set this to 24 hours in the future. Only required if deploying a contract from a template as a user.
     * @type {number}
     * @memberof CreateContractRequest
     */
    deadline?: number;
    /**
     * JSON string of the contract's ABI when importing an already deployed contract.
     * @type {string}
     * @memberof CreateContractRequest
     */
    abi?: string;
    /**
     * The address of a contract being imported. Only required when importing an already deployed contract.
     * @type {string}
     * @memberof CreateContractRequest
     */
    address?: string;
    /**
     * The contract's name. Used to help distinguish contracts from one another. Optional for deploys and imports.
     * @type {string}
     * @memberof CreateContractRequest
     */
    name?: string;
    /**
     * A description of the contract and what it does. This is helpful to set as a reminder for what a contract is used for. Optional for deploys and imports.
     * @type {string}
     * @memberof CreateContractRequest
     */
    description?: string;
    /**
     * A JSON object of metadata as a string for the contract. This is an arbitrary JSON blob and is only intended for storing public data related to the contract for any use case.
     * @type {string}
     * @memberof CreateContractRequest
     */
    metadata?: string;
}


/**
 * @export
 */
export const CreateContractRequestChainEnum = {
    Hychain: 'HYCHAIN',
    HychainTestnet: 'HYCHAIN_TESTNET',
    Local: 'LOCAL'
} as const;
export type CreateContractRequestChainEnum = typeof CreateContractRequestChainEnum[keyof typeof CreateContractRequestChainEnum];


/**
 * Check if a given object implements the CreateContractRequest interface.
 */
export function instanceOfCreateContractRequest(value: object): value is CreateContractRequest {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function CreateContractRequestFromJSON(json: any): CreateContractRequest {
    return CreateContractRequestFromJSONTyped(json, false);
}

export function CreateContractRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContractRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': json['chain'],
        'templateId': json['templateId'] == null ? undefined : json['templateId'],
        'args': json['args'] == null ? undefined : json['args'],
        'salt': json['salt'] == null ? undefined : json['salt'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'signatures': json['signatures'] == null ? undefined : json['signatures'],
        'deadline': json['deadline'] == null ? undefined : json['deadline'],
        'abi': json['abi'] == null ? undefined : json['abi'],
        'address': json['address'] == null ? undefined : json['address'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function CreateContractRequestToJSON(value?: CreateContractRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chain': value['chain'],
        'templateId': value['templateId'],
        'args': value['args'],
        'salt': value['salt'],
        'nonce': value['nonce'],
        'signatures': value['signatures'],
        'deadline': value['deadline'],
        'abi': value['abi'],
        'address': value['address'],
        'name': value['name'],
        'description': value['description'],
        'metadata': value['metadata'],
    };
}

