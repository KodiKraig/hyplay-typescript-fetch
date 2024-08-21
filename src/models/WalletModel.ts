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
 * @interface WalletModel
 */
export interface WalletModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    type?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    authorityCiphertext?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof WalletModel
     */
    authorityBackupCiphertexts?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    authorityProofSignature?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof WalletModel
     */
    backupQuestions?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the WalletModel interface.
 */
export function instanceOfWalletModel(value: object): value is WalletModel {
    return true;
}

export function WalletModelFromJSON(json: any): WalletModel {
    return WalletModelFromJSONTyped(json, false);
}

export function WalletModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'address': json['address'] == null ? undefined : json['address'],
        'authorityCiphertext': json['authorityCiphertext'] == null ? undefined : json['authorityCiphertext'],
        'authorityBackupCiphertexts': json['authorityBackupCiphertexts'] == null ? undefined : json['authorityBackupCiphertexts'],
        'authorityProofSignature': json['authorityProofSignature'] == null ? undefined : json['authorityProofSignature'],
        'backupQuestions': json['backupQuestions'] == null ? undefined : json['backupQuestions'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
    };
}

export function WalletModelToJSON(value?: WalletModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
        'address': value['address'],
        'authorityCiphertext': value['authorityCiphertext'],
        'authorityBackupCiphertexts': value['authorityBackupCiphertexts'],
        'authorityProofSignature': value['authorityProofSignature'],
        'backupQuestions': value['backupQuestions'],
        'updatedAt': value['updatedAt'],
        'createdAt': value['createdAt'],
    };
}

