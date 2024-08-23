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


import * as runtime from '../runtime';
import type {
  GetPage200Response,
  UpdatePage200Response,
  UpdatePageRequest,
} from '../models/index';

export interface GetPageRequest {
    appId: string;
}

export interface UpdatePageOperationRequest {
    xAuthorization: string;
    appId: string;
    updatePageRequest: UpdatePageRequest;
}

/**
 * PromoPageApi - interface
 * 
 * @export
 * @interface PromoPageApiInterface
 */
export interface PromoPageApiInterface {
    /**
     * Get the HYPLAY page data for an app.
     * @summary Get page
     * @param {string} appId An application id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoPageApiInterface
     */
    getPageRaw(requestParameters: GetPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPage200Response>>;

    /**
     * Get the HYPLAY page data for an app.
     * Get page
     */
    getPage(requestParameters: GetPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPage200Response>;

    /**
     * Update the HYPLAY page data for an app.
     * @summary Update page
     * @param {string} xAuthorization The &#x60;accessToken&#x60; of the authenticating user.
     * @param {string} appId An application id.
     * @param {UpdatePageRequest} updatePageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromoPageApiInterface
     */
    updatePageRaw(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePage200Response>>;

    /**
     * Update the HYPLAY page data for an app.
     * Update page
     */
    updatePage(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePage200Response>;

}

/**
 * 
 */
export class PromoPageApi extends runtime.BaseAPI implements PromoPageApiInterface {

    /**
     * Get the HYPLAY page data for an app.
     * Get page
     */
    async getPageRaw(requestParameters: GetPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPage200Response>> {
        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling getPage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/apps/{appId}/page`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters['appId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the HYPLAY page data for an app.
     * Get page
     */
    async getPage(requestParameters: GetPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPage200Response> {
        const response = await this.getPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the HYPLAY page data for an app.
     * Update page
     */
    async updatePageRaw(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePage200Response>> {
        if (requestParameters['xAuthorization'] == null) {
            throw new runtime.RequiredError(
                'xAuthorization',
                'Required parameter "xAuthorization" was null or undefined when calling updatePage().'
            );
        }

        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling updatePage().'
            );
        }

        if (requestParameters['updatePageRequest'] == null) {
            throw new runtime.RequiredError(
                'updatePageRequest',
                'Required parameter "updatePageRequest" was null or undefined when calling updatePage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xAuthorization'] != null) {
            headerParameters['x-authorization'] = String(requestParameters['xAuthorization']);
        }

        const response = await this.request({
            path: `/v1/apps/{appId}/page`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters['appId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updatePageRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the HYPLAY page data for an app.
     * Update page
     */
    async updatePage(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePage200Response> {
        const response = await this.updatePageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
