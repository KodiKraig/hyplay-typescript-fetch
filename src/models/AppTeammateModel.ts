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
 * @interface AppTeammateModel
 */
export interface AppTeammateModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    appId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    role?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppTeammateModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the AppTeammateModel interface.
 */
export function instanceOfAppTeammateModel(value: object): value is AppTeammateModel {
    return true;
}

export function AppTeammateModelFromJSON(json: any): AppTeammateModel {
    return AppTeammateModelFromJSONTyped(json, false);
}

export function AppTeammateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppTeammateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'appId': json['appId'] == null ? undefined : json['appId'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'role': json['role'] == null ? undefined : json['role'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
    };
}

export function AppTeammateModelToJSON(value?: AppTeammateModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'appId': value['appId'],
        'userId': value['userId'],
        'role': value['role'],
        'updatedAt': value['updatedAt'],
        'createdAt': value['createdAt'],
    };
}

