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
  CreateTransactionRequest,
  TransactionModel,
} from '../models/index';

export interface CreateTransactionOperationRequest {
    createTransactionRequest: CreateTransactionRequest;
    xAppAuthorization?: string;
    xSessionAuthorization?: string;
    xAuthorization?: string;
}

export interface GetTransactionRequest {
    transactionId: string;
}

export interface GetTransactionsRequest {
    appId?: string;
    sessionId?: string;
    userId?: string;
    walletId?: string;
    chain?: GetTransactionsChainEnum;
}

/**
 * TransactionsApi - interface
 * 
 * @export
 * @interface TransactionsApiInterface
 */
export interface TransactionsApiInterface {
    /**
     * Create and submit a transaction to the target contract id or address. Transactions are submitted on behalf of the authorization type used, such as an app, user or user via a user\'s session.  Transaction submission supports contract function invocation and native transfers to contracts or externally owned accounts (EOAs).  This endpoint is designed to be highly flexible. Please refer to the HYCHAIN guides and documentation for detailed examples of the many ways this endpoint can be used.
     * @summary Create transaction
     * @param {CreateTransactionRequest} createTransactionRequest 
     * @param {string} [xAppAuthorization] The &#x60;secretKey&#x60; or &#x60;testSecretKey&#x60; of the authenticating app.
     * @param {string} [xSessionAuthorization] The &#x60;accessToken&#x60; of the authenticating session.
     * @param {string} [xAuthorization] The &#x60;accessToken&#x60; of the authenticating user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    createTransactionRaw(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>>;

    /**
     * Create and submit a transaction to the target contract id or address. Transactions are submitted on behalf of the authorization type used, such as an app, user or user via a user\'s session.  Transaction submission supports contract function invocation and native transfers to contracts or externally owned accounts (EOAs).  This endpoint is designed to be highly flexible. Please refer to the HYCHAIN guides and documentation for detailed examples of the many ways this endpoint can be used.
     * Create transaction
     */
    createTransaction(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel>;

    /**
     * Returns a transaction object for the provided transactionId.
     * @summary Get transaction
     * @param {string} transactionId A transaction id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>>;

    /**
     * Returns a transaction object for the provided transactionId.
     * Get transaction
     */
    getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel>;

    /**
     * Returns an array of transactions for the provided appId, sessionId, userId or walletId. Transactions are returned in descending order of creation date.
     * @summary Get transactions
     * @param {string} [appId] An application id.
     * @param {string} [sessionId] A session id.
     * @param {string} [userId] A user id.
     * @param {string} [walletId] A wallet id.
     * @param {'HYCHAIN' | 'HYCHAIN_TESTNET' | 'LOCAL'} [chain] A chain name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionModel>>>;

    /**
     * Returns an array of transactions for the provided appId, sessionId, userId or walletId. Transactions are returned in descending order of creation date.
     * Get transactions
     */
    getTransactions(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionModel>>;

}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI implements TransactionsApiInterface {

    /**
     * Create and submit a transaction to the target contract id or address. Transactions are submitted on behalf of the authorization type used, such as an app, user or user via a user\'s session.  Transaction submission supports contract function invocation and native transfers to contracts or externally owned accounts (EOAs).  This endpoint is designed to be highly flexible. Please refer to the HYCHAIN guides and documentation for detailed examples of the many ways this endpoint can be used.
     * Create transaction
     */
    async createTransactionRaw(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters['createTransactionRequest'] == null) {
            throw new runtime.RequiredError(
                'createTransactionRequest',
                'Required parameter "createTransactionRequest" was null or undefined when calling createTransaction().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xAppAuthorization'] != null) {
            headerParameters['x-app-authorization'] = String(requestParameters['xAppAuthorization']);
        }

        if (requestParameters['xSessionAuthorization'] != null) {
            headerParameters['x-session-authorization'] = String(requestParameters['xSessionAuthorization']);
        }

        if (requestParameters['xAuthorization'] != null) {
            headerParameters['x-authorization'] = String(requestParameters['xAuthorization']);
        }

        const response = await this.request({
            path: `/v1/transactions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['createTransactionRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create and submit a transaction to the target contract id or address. Transactions are submitted on behalf of the authorization type used, such as an app, user or user via a user\'s session.  Transaction submission supports contract function invocation and native transfers to contracts or externally owned accounts (EOAs).  This endpoint is designed to be highly flexible. Please refer to the HYCHAIN guides and documentation for detailed examples of the many ways this endpoint can be used.
     * Create transaction
     */
    async createTransaction(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.createTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a transaction object for the provided transactionId.
     * Get transaction
     */
    async getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling getTransaction().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/transactions/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a transaction object for the provided transactionId.
     * Get transaction
     */
    async getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.getTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of transactions for the provided appId, sessionId, userId or walletId. Transactions are returned in descending order of creation date.
     * Get transactions
     */
    async getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionModel>>> {
        const queryParameters: any = {};

        if (requestParameters['appId'] != null) {
            queryParameters['appId'] = requestParameters['appId'];
        }

        if (requestParameters['sessionId'] != null) {
            queryParameters['sessionId'] = requestParameters['sessionId'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['userId'] = requestParameters['userId'];
        }

        if (requestParameters['walletId'] != null) {
            queryParameters['walletId'] = requestParameters['walletId'];
        }

        if (requestParameters['chain'] != null) {
            queryParameters['chain'] = requestParameters['chain'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns an array of transactions for the provided appId, sessionId, userId or walletId. Transactions are returned in descending order of creation date.
     * Get transactions
     */
    async getTransactions(requestParameters: GetTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionModel>> {
        const response = await this.getTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetTransactionsChainEnum = {
    Hychain: 'HYCHAIN',
    HychainTestnet: 'HYCHAIN_TESTNET',
    Local: 'LOCAL'
} as const;
export type GetTransactionsChainEnum = typeof GetTransactionsChainEnum[keyof typeof GetTransactionsChainEnum];
