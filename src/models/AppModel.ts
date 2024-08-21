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
 * @interface AppModel
 */
export interface AppModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    iconImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    backgroundImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    logoImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof AppModel
     */
    galleryMediaAssetIds?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    testSecretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    discordUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    twitterUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    steamUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    appleIosUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    appleMacUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    googlePlayUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    microsoftUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    privacyUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    termsUrl?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof AppModel
     */
    redirectUris?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    verificationStatus?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the AppModel interface.
 */
export function instanceOfAppModel(value: object): value is AppModel {
    return true;
}

export function AppModelFromJSON(json: any): AppModel {
    return AppModelFromJSONTyped(json, false);
}

export function AppModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'walletId': json['walletId'] == null ? undefined : json['walletId'],
        'iconImageAssetId': json['iconImageAssetId'] == null ? undefined : json['iconImageAssetId'],
        'backgroundImageAssetId': json['backgroundImageAssetId'] == null ? undefined : json['backgroundImageAssetId'],
        'logoImageAssetId': json['logoImageAssetId'] == null ? undefined : json['logoImageAssetId'],
        'galleryMediaAssetIds': json['galleryMediaAssetIds'] == null ? undefined : json['galleryMediaAssetIds'],
        'secretKey': json['secretKey'] == null ? undefined : json['secretKey'],
        'testSecretKey': json['testSecretKey'] == null ? undefined : json['testSecretKey'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'url': json['url'] == null ? undefined : json['url'],
        'discordUrl': json['discordUrl'] == null ? undefined : json['discordUrl'],
        'twitterUrl': json['twitterUrl'] == null ? undefined : json['twitterUrl'],
        'steamUrl': json['steamUrl'] == null ? undefined : json['steamUrl'],
        'appleIosUrl': json['appleIosUrl'] == null ? undefined : json['appleIosUrl'],
        'appleMacUrl': json['appleMacUrl'] == null ? undefined : json['appleMacUrl'],
        'googlePlayUrl': json['googlePlayUrl'] == null ? undefined : json['googlePlayUrl'],
        'microsoftUrl': json['microsoftUrl'] == null ? undefined : json['microsoftUrl'],
        'privacyUrl': json['privacyUrl'] == null ? undefined : json['privacyUrl'],
        'termsUrl': json['termsUrl'] == null ? undefined : json['termsUrl'],
        'redirectUris': json['redirectUris'] == null ? undefined : json['redirectUris'],
        'verificationStatus': json['verificationStatus'] == null ? undefined : json['verificationStatus'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
    };
}

export function AppModelToJSON(value?: AppModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'walletId': value['walletId'],
        'iconImageAssetId': value['iconImageAssetId'],
        'backgroundImageAssetId': value['backgroundImageAssetId'],
        'logoImageAssetId': value['logoImageAssetId'],
        'galleryMediaAssetIds': value['galleryMediaAssetIds'],
        'secretKey': value['secretKey'],
        'testSecretKey': value['testSecretKey'],
        'name': value['name'],
        'description': value['description'],
        'url': value['url'],
        'discordUrl': value['discordUrl'],
        'twitterUrl': value['twitterUrl'],
        'steamUrl': value['steamUrl'],
        'appleIosUrl': value['appleIosUrl'],
        'appleMacUrl': value['appleMacUrl'],
        'googlePlayUrl': value['googlePlayUrl'],
        'microsoftUrl': value['microsoftUrl'],
        'privacyUrl': value['privacyUrl'],
        'termsUrl': value['termsUrl'],
        'redirectUris': value['redirectUris'],
        'verificationStatus': value['verificationStatus'],
        'updatedAt': value['updatedAt'],
        'createdAt': value['createdAt'],
    };
}

