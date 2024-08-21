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
 * @interface CreateLeaderboardScoreRequest
 */
export interface CreateLeaderboardScoreRequest {
    /**
     * The user id to associate the score with.
     * @type {string}
     * @memberof CreateLeaderboardScoreRequest
     */
    userId?: string;
    /**
     * The score to submit. Can be any number.
     * @type {number}
     * @memberof CreateLeaderboardScoreRequest
     */
    score: number;
    /**
     * The hash of the score when submitting with session authorization. Must be generated as a hash using sha256(leaderboardKey:userId:score).
     * @type {string}
     * @memberof CreateLeaderboardScoreRequest
     */
    hash?: string;
}

/**
 * Check if a given object implements the CreateLeaderboardScoreRequest interface.
 */
export function instanceOfCreateLeaderboardScoreRequest(value: object): value is CreateLeaderboardScoreRequest {
    if (!('score' in value) || value['score'] === undefined) return false;
    return true;
}

export function CreateLeaderboardScoreRequestFromJSON(json: any): CreateLeaderboardScoreRequest {
    return CreateLeaderboardScoreRequestFromJSONTyped(json, false);
}

export function CreateLeaderboardScoreRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLeaderboardScoreRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'] == null ? undefined : json['userId'],
        'score': json['score'],
        'hash': json['hash'] == null ? undefined : json['hash'],
    };
}

export function CreateLeaderboardScoreRequestToJSON(value?: CreateLeaderboardScoreRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userId': value['userId'],
        'score': value['score'],
        'hash': value['hash'],
    };
}

