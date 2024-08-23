/* tslint:disable */
/* eslint-disable */
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
 * 
 * @export
 * @interface AppReferralsModel
 */
export interface AppReferralsModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    appId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    referredUserId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    referrerUserId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AppReferralsModel
     */
    createdAt?: string;
}
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
 * 
 * @export
 * @interface AssetModel
 */
export interface AssetModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    s3Url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    cdnUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    mime?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    extension?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    checksum?: string;
    /**
     * This field has not had a description added.
     * @type {number}
     * @memberof AssetModel
     */
    size?: number;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AssetModel
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface ContractModel
 */
export interface ContractModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    appId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    templateId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof ContractModel
     */
    abi?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof ContractModel
     */
    metadata?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface CreateApp200Response
 */
export interface CreateApp200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    iconImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    backgroundImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    logoImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof CreateApp200Response
     */
    galleryMediaAssetIds?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    testSecretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    discordUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    twitterUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    steamUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    appleIosUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    appleMacUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    googlePlayUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    microsoftUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    privacyUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    termsUrl?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof CreateApp200Response
     */
    redirectUris?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    verificationStatus?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateApp200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {AssetModel}
     * @memberof CreateApp200Response
     */
    iconImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof CreateApp200Response
     */
    backgroundImageAsset?: AssetModel;
    /**
     * 
     * @type {WalletModel}
     * @memberof CreateApp200Response
     */
    wallet?: WalletModel;
}
/**
 * 
 * @export
 * @interface CreateAppRequest
 */
export interface CreateAppRequest {
    /**
     * The assetId of the icon image. Icon images are recommended to be a 1:1 aspect ratio and at least 512x512 pixels.
     * @type {string}
     * @memberof CreateAppRequest
     */
    iconImageAssetId?: string;
    /**
     * The assetId of the background image. Background images are recommended to be a 16:9 aspect ratio and at least 1920x1080 pixels.
     * @type {string}
     * @memberof CreateAppRequest
     */
    backgroundImageAssetId?: string;
    /**
     * The assetId of the logo image. Logo image are used on pages like preregistration, questing, etc and can be any aspect ratio.
     * @type {string}
     * @memberof CreateAppRequest
     */
    logoImageAssetId?: string;
    /**
     * An array of assetIds for media assets to be displayed for app promotional purposes. Such as the web page media gallery.
     * @type {Array<string>}
     * @memberof CreateAppRequest
     */
    galleryMediaAssetIds?: Array<string>;
    /**
     * The name of the app.
     * @type {string}
     * @memberof CreateAppRequest
     */
    name: string;
    /**
     * A brief description of the app and what it is and does.
     * @type {string}
     * @memberof CreateAppRequest
     */
    description?: string;
    /**
     * The URL of the app, such as its website or where users can learn more about it.
     * @type {string}
     * @memberof CreateAppRequest
     */
    url?: string;
    /**
     * The URL of the app's Discord server.
     * @type {string}
     * @memberof CreateAppRequest
     */
    discordUrl?: string;
    /**
     * The URL of the app's Twitter page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    twitterUrl?: string;
    /**
     * The URL of the app's Steam page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    steamUrl?: string;
    /**
     * The URL of the app's Apple iOS page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    appleIosUrl?: string;
    /**
     * The URL of the app's Apple Mac page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    appleMacUrl?: string;
    /**
     * The URL of the app's Google Play page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    googlePlayUrl?: string;
    /**
     * The URL of the app's Windows Store page.
     * @type {string}
     * @memberof CreateAppRequest
     */
    microsoftUrl?: string;
    /**
     * The URL of the app's privacy policy.
     * @type {string}
     * @memberof CreateAppRequest
     */
    privacyUrl?: string;
    /**
     * The URL of the app's terms of service.
     * @type {string}
     * @memberof CreateAppRequest
     */
    termsUrl?: string;
    /**
     * An array of valid redirect URIs for the user authorization flows of the app.
     * @type {Array<string>}
     * @memberof CreateAppRequest
     */
    redirectUris?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateAppTeammateRequest
 */
export interface CreateAppTeammateRequest {
    /**
     * The user id to add as a teammate of the app.
     * @type {string}
     * @memberof CreateAppTeammateRequest
     */
    userId: string;
    /**
     * The role of the teammate.
     * @type {string}
     * @memberof CreateAppTeammateRequest
     */
    role: CreateAppTeammateRequestRoleEnum;
}


/**
 * @export
 */
export const CreateAppTeammateRequestRoleEnum = {
    Owner: 'OWNER',
    Developer: 'DEVELOPER',
    Editor: 'EDITOR',
    Analyst: 'ANALYST'
} as const;
export type CreateAppTeammateRequestRoleEnum = typeof CreateAppTeammateRequestRoleEnum[keyof typeof CreateAppTeammateRequestRoleEnum];

/**
 * 
 * @export
 * @interface CreateAssetRequest
 */
export interface CreateAssetRequest {
    /**
     * The base64 string of the asset being uploaded. Uploads may not exceed 5mb.
     * @type {string}
     * @memberof CreateAssetRequest
     */
    fileBase64?: string;
}
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
 * 
 * @export
 * @interface CreateLeaderboard200Response
 */
export interface CreateLeaderboard200Response {
    /**
     * The leaderboard ID.
     * @type {string}
     * @memberof CreateLeaderboard200Response
     */
    id?: string;
    /**
     * The leaderboard name.
     * @type {string}
     * @memberof CreateLeaderboard200Response
     */
    name?: string;
    /**
     * The leaderboard description.
     * @type {string}
     * @memberof CreateLeaderboard200Response
     */
    description?: string;
    /**
     * The leaderboard scores, keyed by user ID, defaults to an empty object.
     * @type {object}
     * @memberof CreateLeaderboard200Response
     */
    scores?: object;
    /**
     * The leaderboard hash key, used to generate hashes for client side submission of scores.
     * @type {string}
     * @memberof CreateLeaderboard200Response
     */
    key?: string;
    /**
     * The timestamp of the leaderboard creation in seconds since the Unix epoch.
     * @type {number}
     * @memberof CreateLeaderboard200Response
     */
    createdAt?: number;
}
/**
 * 
 * @export
 * @interface CreateLeaderboardRequest
 */
export interface CreateLeaderboardRequest {
    /**
     * The leaderboard name.
     * @type {string}
     * @memberof CreateLeaderboardRequest
     */
    name: string;
    /**
     * The leaderboard description.
     * @type {string}
     * @memberof CreateLeaderboardRequest
     */
    description?: string;
}
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
 * 
 * @export
 * @interface CreateTemplateRequest
 */
export interface CreateTemplateRequest {
    /**
     * The name of the template.
     * @type {string}
     * @memberof CreateTemplateRequest
     */
    name: string;
    /**
     * A description of the template.
     * @type {string}
     * @memberof CreateTemplateRequest
     */
    description?: string;
    /**
     * The solidity source code of the template to compile. This must be a flattened contract with all imports inlined.
     * @type {string}
     * @memberof CreateTemplateRequest
     */
    solidity: string;
    /**
     * The contract from the inlined solidity source code that is intended to be deployed for this template.
     * @type {string}
     * @memberof CreateTemplateRequest
     */
    target: string;
}
/**
 * 
 * @export
 * @interface CreateTransactionRequest
 */
export interface CreateTransactionRequest {
    /**
     * The contract id to target.
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    contractId?: string;
    /**
     * The address to target.
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    address?: string;
    /**
     * The function name or function signature of the contract.
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    func?: string;
    /**
     * An array of arguments to pass to the function.
     * @type {Array<ReadContractArgsParameterInner>}
     * @memberof CreateTransactionRequest
     */
    args?: Array<ReadContractArgsParameterInner>;
    /**
     * The amount of native token to send with the transaction.
     * @type {number}
     * @memberof CreateTransactionRequest
     */
    value?: number;
    /**
     * The nonce of the transaction.
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    nonce?: string;
    /**
     * The deadline for the transaction as a timestamp in seconds.
     * @type {number}
     * @memberof CreateTransactionRequest
     */
    deadline?: number;
    /**
     * An array of signatures for the transaction.
     * @type {Array<string>}
     * @memberof CreateTransactionRequest
     */
    signatures?: Array<string>;
    /**
     * The chain the session is to be started for.
     * @type {string}
     * @memberof CreateTransactionRequest
     */
    chain?: CreateTransactionRequestChainEnum;
}


/**
 * @export
 */
export const CreateTransactionRequestChainEnum = {
    Hychain: 'HYCHAIN',
    HychainTestnet: 'HYCHAIN_TESTNET',
    Local: 'LOCAL'
} as const;
export type CreateTransactionRequestChainEnum = typeof CreateTransactionRequestChainEnum[keyof typeof CreateTransactionRequestChainEnum];

/**
 * 
 * @export
 * @interface DeleteFromWhitelistRequest
 */
export interface DeleteFromWhitelistRequest {
    /**
     * User Ids to add to the whitelist.
     * @type {Array<string>}
     * @memberof DeleteFromWhitelistRequest
     */
    userIds?: Array<string>;
    /**
     * Emails to add to the whitelist.
     * @type {Array<string>}
     * @memberof DeleteFromWhitelistRequest
     */
    emails?: Array<string>;
    /**
     * Usernames to add to the whitelist.
     * @type {Array<string>}
     * @memberof DeleteFromWhitelistRequest
     */
    usernames?: Array<string>;
}
/**
 * 
 * @export
 * @interface DeleteLeaderboardScoreRequest
 */
export interface DeleteLeaderboardScoreRequest {
    /**
     * The user id to delete the score for.
     * @type {string}
     * @memberof DeleteLeaderboardScoreRequest
     */
    userId: string;
}
/**
 * 
 * @export
 * @interface EndSessionRequest
 */
export interface EndSessionRequest {
    /**
     * If the `X-App-Authorization` or `X-Session-Authorization` header is not set, `appId` must be provided to indicate the application for which to end user sessions for.
     * @type {string}
     * @memberof EndSessionRequest
     */
    appId?: string;
    /**
     * If the user's `X-Authorization` or `X-Session-Authorization` header is not set, `userId` must be provided to indicate the user for which to end sessions for.
     * @type {string}
     * @memberof EndSessionRequest
     */
    userId?: string;
    /**
     * The chain to end sessions for.
     * @type {string}
     * @memberof EndSessionRequest
     */
    chain: EndSessionRequestChainEnum;
}


/**
 * @export
 */
export const EndSessionRequestChainEnum = {
    Hychain: 'HYCHAIN',
    HychainTestnet: 'HYCHAIN_TESTNET',
    Local: 'LOCAL'
} as const;
export type EndSessionRequestChainEnum = typeof EndSessionRequestChainEnum[keyof typeof EndSessionRequestChainEnum];

/**
 * 
 * @export
 * @interface GetAppState200Response
 */
export interface GetAppState200Response {
    /**
     * Public state data for the app or user.
     * @type {object}
     * @memberof GetAppState200Response
     */
    publicState?: object;
    /**
     * Protected state data for the app or user.
     * @type {object}
     * @memberof GetAppState200Response
     */
    protectedState?: object;
    /**
     * Private state data for the app or user.
     * @type {object}
     * @memberof GetAppState200Response
     */
    privateState?: object;
}
/**
 * 
 * @export
 * @interface GetAppTeammates200Response
 */
export interface GetAppTeammates200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    appId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    role?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppTeammates200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {GetAppTeammates200ResponseAllOfUser}
     * @memberof GetAppTeammates200Response
     */
    user?: GetAppTeammates200ResponseAllOfUser;
}
/**
 * 
 * @export
 * @interface GetAppTeammates200ResponseAllOfUser
 */
export interface GetAppTeammates200ResponseAllOfUser {
    /**
     * 
     * @type {string}
     * @memberof GetAppTeammates200ResponseAllOfUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAppTeammates200ResponseAllOfUser
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface GetAppUser200Response
 */
export interface GetAppUser200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    phone?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    appleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    discordId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    facebookId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    googleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    microsoftId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    twitterId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {boolean}
     * @memberof GetAppUser200Response
     */
    isChild?: boolean;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    accessTokenExpiresAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUser200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetAppUser200Response
     */
    wallet?: WalletModel;
    /**
     * 
     * @type {number}
     * @memberof GetAppUser200Response
     */
    totalAppReferrals?: number;
}
/**
 * 
 * @export
 * @interface GetAppUsers200Response
 */
export interface GetAppUsers200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    phone?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    appleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    discordId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    facebookId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    googleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    microsoftId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    twitterId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {boolean}
     * @memberof GetAppUsers200Response
     */
    isChild?: boolean;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    accessTokenExpiresAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetAppUsers200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetAppUsers200Response
     */
    wallet?: WalletModel;
}
/**
 * 
 * @export
 * @interface GetApps200Response
 */
export interface GetApps200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    iconImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    backgroundImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    logoImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetApps200Response
     */
    galleryMediaAssetIds?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    testSecretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    discordUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    twitterUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    steamUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    appleIosUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    appleMacUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    googlePlayUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    microsoftUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    privacyUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    termsUrl?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetApps200Response
     */
    redirectUris?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    verificationStatus?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetApps200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetApps200Response
     */
    iconImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetApps200Response
     */
    backgroundImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetApps200Response
     */
    logoImageAsset?: AssetModel;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetApps200Response
     */
    wallet?: WalletModel;
}
/**
 * 
 * @export
 * @interface GetLeaderboardScore200Response
 */
export interface GetLeaderboardScore200Response {
    /**
     * 
     * @type {string}
     * @memberof GetLeaderboardScore200Response
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof GetLeaderboardScore200Response
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLeaderboardScore200Response
     */
    timestamp?: number;
}
/**
 * 
 * @export
 * @interface GetLeaderboardScores200Response
 */
export interface GetLeaderboardScores200Response {
    /**
     * 
     * @type {Array<GetLeaderboardScores200ResponseScoresInner>}
     * @memberof GetLeaderboardScores200Response
     */
    scores?: Array<GetLeaderboardScores200ResponseScoresInner>;
    /**
     * 
     * @type {number}
     * @memberof GetLeaderboardScores200Response
     */
    totalScores?: number;
}
/**
 * 
 * @export
 * @interface GetLeaderboardScores200ResponseScoresInner
 */
export interface GetLeaderboardScores200ResponseScoresInner {
    /**
     * 
     * @type {string}
     * @memberof GetLeaderboardScores200ResponseScoresInner
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLeaderboardScores200ResponseScoresInner
     */
    username?: string;
    /**
     * 
     * @type {number}
     * @memberof GetLeaderboardScores200ResponseScoresInner
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLeaderboardScores200ResponseScoresInner
     */
    timestamp?: number;
}
/**
 * 
 * @export
 * @interface GetLeaderboards200ResponseInner
 */
export interface GetLeaderboards200ResponseInner {
    /**
     * The leaderboard ID.
     * @type {string}
     * @memberof GetLeaderboards200ResponseInner
     */
    id?: string;
    /**
     * The leaderboard name.
     * @type {string}
     * @memberof GetLeaderboards200ResponseInner
     */
    name?: string;
    /**
     * The leaderboard description.
     * @type {string}
     * @memberof GetLeaderboards200ResponseInner
     */
    description?: string;
    /**
     * The total number of users with scores in the leaderboard.
     * @type {number}
     * @memberof GetLeaderboards200ResponseInner
     */
    totalScores?: number;
}
/**
 * 
 * @export
 * @interface GetPage200Response
 */
export interface GetPage200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    iconImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    backgroundImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    logoImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetPage200Response
     */
    galleryMediaAssetIds?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    testSecretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    discordUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    twitterUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    steamUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    appleIosUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    appleMacUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    googlePlayUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    microsoftUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    privacyUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    termsUrl?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetPage200Response
     */
    redirectUris?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    verificationStatus?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPage200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPage200Response
     */
    iconImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPage200Response
     */
    backgroundImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPage200Response
     */
    logoImageAsset?: AssetModel;
    /**
     * 
     * @type {Array<AssetModel>}
     * @memberof GetPage200Response
     */
    galleryMediaAssets?: Array<AssetModel>;
    /**
     * 
     * @type {GetPage200ResponseAllOfPreregister}
     * @memberof GetPage200Response
     */
    preregister?: GetPage200ResponseAllOfPreregister;
    /**
     * 
     * @type {GetPage200ResponseAllOfLeaderboard}
     * @memberof GetPage200Response
     */
    leaderboard?: GetPage200ResponseAllOfLeaderboard;
    /**
     * 
     * @type {GetPage200ResponseAllOfReferral}
     * @memberof GetPage200Response
     */
    referral?: GetPage200ResponseAllOfReferral;
    /**
     * 
     * @type {Array<GetPage200ResponseAllOfLinksInner>}
     * @memberof GetPage200Response
     */
    links?: Array<GetPage200ResponseAllOfLinksInner>;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetPage200Response
     */
    wallet?: WalletModel;
    /**
     * 
     * @type {number}
     * @memberof GetPage200Response
     */
    totalUsers?: number;
}
/**
 * 
 * @export
 * @interface GetPage200ResponseAllOfLeaderboard
 */
export interface GetPage200ResponseAllOfLeaderboard {
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfLeaderboard
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetPage200ResponseAllOfLeaderboard
     */
    visible?: boolean;
}
/**
 * 
 * @export
 * @interface GetPage200ResponseAllOfLinksInner
 */
export interface GetPage200ResponseAllOfLinksInner {
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfLinksInner
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfLinksInner
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface GetPage200ResponseAllOfPreregister
 */
export interface GetPage200ResponseAllOfPreregister {
    /**
     * 
     * @type {boolean}
     * @memberof GetPage200ResponseAllOfPreregister
     */
    visible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfPreregister
     */
    incentiveText?: string;
}
/**
 * 
 * @export
 * @interface GetPage200ResponseAllOfReferral
 */
export interface GetPage200ResponseAllOfReferral {
    /**
     * 
     * @type {boolean}
     * @memberof GetPage200ResponseAllOfReferral
     */
    visible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfReferral
     */
    titleText?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPage200ResponseAllOfReferral
     */
    incentiveText?: string;
}
/**
 * 
 * @export
 * @interface GetPublicApp200Response
 */
export interface GetPublicApp200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    iconImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    backgroundImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    logoImageAssetId?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetPublicApp200Response
     */
    galleryMediaAssetIds?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    testSecretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    url?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    discordUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    twitterUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    steamUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    appleIosUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    appleMacUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    googlePlayUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    microsoftUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    privacyUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    termsUrl?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetPublicApp200Response
     */
    redirectUris?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    verificationStatus?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetPublicApp200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPublicApp200Response
     */
    iconImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPublicApp200Response
     */
    backgroundImageAsset?: AssetModel;
    /**
     * 
     * @type {AssetModel}
     * @memberof GetPublicApp200Response
     */
    logoImageAsset?: AssetModel;
    /**
     * 
     * @type {Array<AssetModel>}
     * @memberof GetPublicApp200Response
     */
    galleryMediaAssets?: Array<AssetModel>;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetPublicApp200Response
     */
    wallet?: WalletModel;
    /**
     * 
     * @type {number}
     * @memberof GetPublicApp200Response
     */
    totalUsers?: number;
}
/**
 * 
 * @export
 * @interface GetUser200Response
 */
export interface GetUser200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    phone?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    appleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    discordId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    facebookId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    googleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    microsoftId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    twitterId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {boolean}
     * @memberof GetUser200Response
     */
    isChild?: boolean;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    accessTokenExpiresAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetUser200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetUser200Response
     */
    preregistered?: boolean;
    /**
     * 
     * @type {WalletModel}
     * @memberof GetUser200Response
     */
    wallet?: WalletModel;
}
/**
 * 
 * @export
 * @interface GetWallet200Response
 */
export interface GetWallet200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    type?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    authorityCiphertext?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetWallet200Response
     */
    authorityBackupCiphertexts?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    authorityProofSignature?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GetWallet200Response
     */
    backupQuestions?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetWallet200Response
     */
    createdAt?: string;
    /**
     * The mainnet wallet implementation address to upgrade to if the wallet requires an upgrade, otherwise null if no upgrade required.
     * @type {string}
     * @memberof GetWallet200Response
     */
    mainnetRequiresUpgradeTo?: string;
    /**
     * The testnet wallet implementation address to upgrade to if the wallet requires an upgrade, otherwise null if no upgrade required.
     * @type {string}
     * @memberof GetWallet200Response
     */
    testnetRequiresUpgradeTo?: string;
    /**
     * The local wallet implementation address to upgrade to if the wallet requires an upgrade, otherwise null if no upgrade required.
     * @type {string}
     * @memberof GetWallet200Response
     */
    localRequiresUpgradeTo?: string;
}
/**
 * 
 * @export
 * @interface GetWhitelist200Response
 */
export interface GetWhitelist200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetWhitelist200Response
     */
    enabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetWhitelist200Response
     */
    userIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetWhitelist200Response
     */
    emails?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetWhitelist200Response
     */
    usernames?: Array<string>;
}
/**
 * 
 * @export
 * @interface GrantSessionTokenRequest
 */
export interface GrantSessionTokenRequest {
    /**
     * An unused exchange code associated with the provided session id. Exchange codes can only be used once and then become invalid.
     * @type {string}
     * @memberof GrantSessionTokenRequest
     */
    exchangeCode: string;
}
/**
 * 
 * @export
 * @interface NonceModel
 */
export interface NonceModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof NonceModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof NonceModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof NonceModel
     */
    nonce?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof NonceModel
     */
    createdAt?: string;
}
/**
 * @type ReadContractArgsParameterInner
 * 
 * @export
 */
export type ReadContractArgsParameterInner = Array<ReadContractArgsParameterInnerOneOfInner> | boolean | number | string;
/**
 * @type ReadContractArgsParameterInnerOneOfInner
 * 
 * @export
 */
export type ReadContractArgsParameterInnerOneOfInner = boolean | number | string;
/**
 * 
 * @export
 * @interface SessionModel
 */
export interface SessionModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    appId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    exchangeCode?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    scopes?: object;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    contractFunctionSelectors?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    nativeAllowance?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    erc20Allowances?: object;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    erc721Allowances?: object;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    erc1155Allowances?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    nonce?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof SessionModel
     */
    signatures?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    deadline?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    expiresAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    endedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof SessionModel
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface SetAppState200Response
 */
export interface SetAppState200Response {
    /**
     * Public state data for the app or user.
     * @type {object}
     * @memberof SetAppState200Response
     */
    publicState: object;
    /**
     * Protected state data for the app or user.
     * @type {object}
     * @memberof SetAppState200Response
     */
    protectedState: object;
    /**
     * Private state data for the app or user.
     * @type {object}
     * @memberof SetAppState200Response
     */
    privateState?: object;
}
/**
 * 
 * @export
 * @interface SetAppStateRequest
 */
export interface SetAppStateRequest {
    /**
     * Any unique lookup key for this data. This can be things such as a hyplay user id, an internal battle match id for your game, some arbitrary settings identifier for a system of your app and more. Keys are flexible ways to create string based lookup identifiers for data you want to store/lookup. Keys are unique to your application and are not shared globally.
     * @type {string}
     * @memberof SetAppStateRequest
     */
    key?: string;
    /**
     * Public state data to set for the app or user.
     * @type {{ [key: string]: any; }}
     * @memberof SetAppStateRequest
     */
    publicState?: { [key: string]: any; };
    /**
     * Protected state data to set for the app or user.
     * @type {{ [key: string]: any; }}
     * @memberof SetAppStateRequest
     */
    protectedState?: { [key: string]: any; };
    /**
     * Private state data to set for the app or user.
     * @type {{ [key: string]: any; }}
     * @memberof SetAppStateRequest
     */
    privateState?: { [key: string]: any; };
    /**
     * If true, the state will be overwritten with the provided state. If false or omitted, the state will be deep merged with the provided state.
     * @type {boolean}
     * @memberof SetAppStateRequest
     */
    overwrite?: boolean;
}
/**
 * 
 * @export
 * @interface TemplateModel
 */
export interface TemplateModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    userId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    solidity?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    target?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    bytecode?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof TemplateModel
     */
    abi?: object;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof TemplateModel
     */
    errors?: object;
    /**
     * This field has not had a description added.
     * @type {boolean}
     * @memberof TemplateModel
     */
    approved?: boolean;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TemplateModel
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface TransactionModel
 */
export interface TransactionModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    sessionId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    relayerAddress?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    func?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof TransactionModel
     */
    args?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    value?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    hash?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof TransactionModel
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface UpdateAppRequest
 */
export interface UpdateAppRequest {
    /**
     * The assetId of the icon image.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    iconImageAssetId?: string;
    /**
     * The assetId of the background image.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    backgroundImageAssetId?: string;
    /**
     * The assetId of the logo image.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    logoImageAssetId?: string;
    /**
     * An array of assetIds for media assets to be displayed for app promotional purposes. Such as the web page media gallery.
     * @type {Array<string>}
     * @memberof UpdateAppRequest
     */
    galleryMediaAssetIds?: Array<string>;
    /**
     * The name of the app.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    name?: string;
    /**
     * A brief description of the app and what it is and does.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    description?: string;
    /**
     * The URL of the app, such as its website or where users can learn more about it.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    url?: string;
    /**
     * The URL of the app's Discord server.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    discordUrl?: string;
    /**
     * The URL of the app's Twitter page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    twitterUrl?: string;
    /**
     * The URL of the app's Steam page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    steamUrl?: string;
    /**
     * The URL of the app's Apple iOS page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    appleIosUrl?: string;
    /**
     * The URL of the app's Apple Mac page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    appleMacUrl?: string;
    /**
     * The URL of the app's Google Play page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    googlePlayUrl?: string;
    /**
     * The URL of the app's Windows page.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    microsoftUrl?: string;
    /**
     * The URL of the app's privacy policy.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    privacyUrl?: string;
    /**
     * The URL of the app's terms of service.
     * @type {string}
     * @memberof UpdateAppRequest
     */
    termsUrl?: string;
    /**
     * An array of valid redirect URIs for the user authorization flows of the app.
     * @type {Array<string>}
     * @memberof UpdateAppRequest
     */
    redirectUris?: Array<string>;
    /**
     * If true, reset the secretKey of the app.
     * @type {boolean}
     * @memberof UpdateAppRequest
     */
    resetSecretKey?: boolean;
    /**
     * If true, reset the testSecretKey of the app.
     * @type {boolean}
     * @memberof UpdateAppRequest
     */
    resetTestSecretKey?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateAppTeammateRequest
 */
export interface UpdateAppTeammateRequest {
    /**
     * The role of the teammate.
     * @type {string}
     * @memberof UpdateAppTeammateRequest
     */
    role: UpdateAppTeammateRequestRoleEnum;
}


/**
 * @export
 */
export const UpdateAppTeammateRequestRoleEnum = {
    Owner: 'OWNER',
    Developer: 'DEVELOPER',
    Editor: 'EDITOR',
    Analyst: 'ANALYST'
} as const;
export type UpdateAppTeammateRequestRoleEnum = typeof UpdateAppTeammateRequestRoleEnum[keyof typeof UpdateAppTeammateRequestRoleEnum];

/**
 * 
 * @export
 * @interface UpdateContractRequest
 */
export interface UpdateContractRequest {
    /**
     * JSON string of the contract's ABI.
     * @type {string}
     * @memberof UpdateContractRequest
     */
    abi?: string;
    /**
     * The contract's name. Named contracts are easier for users to identify during app or game authorization flows through HYPLAY.
     * @type {string}
     * @memberof UpdateContractRequest
     */
    name?: string;
    /**
     * A description of the contract and what it does.
     * @type {string}
     * @memberof UpdateContractRequest
     */
    description?: string;
    /**
     * A JSON string of arbitrary metadata for the contract. May be used by developers for a variety of reasons.
     * @type {string}
     * @memberof UpdateContractRequest
     */
    metadata?: string;
}
/**
 * 
 * @export
 * @interface UpdateLeaderboard200Response
 */
export interface UpdateLeaderboard200Response {
    /**
     * The leaderboard ID.
     * @type {string}
     * @memberof UpdateLeaderboard200Response
     */
    id?: string;
    /**
     * The leaderboard name.
     * @type {string}
     * @memberof UpdateLeaderboard200Response
     */
    name?: string;
    /**
     * The leaderboard description.
     * @type {string}
     * @memberof UpdateLeaderboard200Response
     */
    description?: string;
    /**
     * The leaderboard scores, keyed by user ID.
     * @type {object}
     * @memberof UpdateLeaderboard200Response
     */
    scores?: object;
    /**
     * The leaderboard hash key, used to generate hashes
     * @type {string}
     * @memberof UpdateLeaderboard200Response
     */
    key?: string;
    /**
     * The timestamp of the leaderboard creation in seconds since the Unix epoch.
     * @type {number}
     * @memberof UpdateLeaderboard200Response
     */
    createdAt?: number;
}
/**
 * 
 * @export
 * @interface UpdateLeaderboardRequest
 */
export interface UpdateLeaderboardRequest {
    /**
     * The leaderboard name.
     * @type {string}
     * @memberof UpdateLeaderboardRequest
     */
    name?: string;
    /**
     * The leaderboard description.
     * @type {string}
     * @memberof UpdateLeaderboardRequest
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface UpdatePage200Response
 */
export interface UpdatePage200Response {
    /**
     * 
     * @type {GetPage200ResponseAllOfPreregister}
     * @memberof UpdatePage200Response
     */
    preregister?: GetPage200ResponseAllOfPreregister;
    /**
     * 
     * @type {GetPage200ResponseAllOfLeaderboard}
     * @memberof UpdatePage200Response
     */
    leaderboard?: GetPage200ResponseAllOfLeaderboard;
    /**
     * 
     * @type {GetPage200ResponseAllOfReferral}
     * @memberof UpdatePage200Response
     */
    referral?: GetPage200ResponseAllOfReferral;
    /**
     * 
     * @type {Array<GetPage200ResponseAllOfLinksInner>}
     * @memberof UpdatePage200Response
     */
    links?: Array<GetPage200ResponseAllOfLinksInner>;
}
/**
 * 
 * @export
 * @interface UpdatePageRequest
 */
export interface UpdatePageRequest {
    /**
     * Whether the pre-register section is visible.
     * @type {boolean}
     * @memberof UpdatePageRequest
     */
    preregisterVisible?: boolean;
    /**
     * The incentive text to display with the pre-register prompt.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    preregisterIncentiveText?: string;
    /**
     * The id of the leaderboard to display.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    leaderboardId?: string;
    /**
     * Whether the leaderboard section is visible.
     * @type {boolean}
     * @memberof UpdatePageRequest
     */
    leaderboardVisible?: boolean;
    /**
     * Whether the referral section is visible.
     * @type {boolean}
     * @memberof UpdatePageRequest
     */
    referralVisible?: boolean;
    /**
     * The title text to display in the referral section.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    referralTitleText?: string;
    /**
     * The incentive text to display in the referral section.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    referralIncentiveText?: string;
    /**
     * 
     * @type {Array<GetPage200ResponseAllOfLinksInner>}
     * @memberof UpdatePageRequest
     */
    links?: Array<GetPage200ResponseAllOfLinksInner>;
}
/**
 * 
 * @export
 * @interface UpdateWalletRequest
 */
export interface UpdateWalletRequest {
    /**
     * The chain to deploy or import a contract on.
     * @type {string}
     * @memberof UpdateWalletRequest
     */
    chain?: UpdateWalletRequestChainEnum;
    /**
     * The deadline for the transaction as a timestamp in seconds.
     * @type {number}
     * @memberof UpdateWalletRequest
     */
    deadline?: number;
    /**
     * If true, the wallet will be upgraded to the latest available wallet implementation for the provided chain.
     * @type {boolean}
     * @memberof UpdateWalletRequest
     */
    upgradeToLatest?: boolean;
    /**
     * An array of signatures to authorize the upgrade.
     * @type {Array<string>}
     * @memberof UpdateWalletRequest
     */
    signatures?: Array<string>;
}


/**
 * @export
 */
export const UpdateWalletRequestChainEnum = {
    Hychain: 'HYCHAIN',
    HychainTestnet: 'HYCHAIN_TESTNET',
    Local: 'LOCAL'
} as const;
export type UpdateWalletRequestChainEnum = typeof UpdateWalletRequestChainEnum[keyof typeof UpdateWalletRequestChainEnum];

/**
 * 
 * @export
 * @interface UpdateWhitelistRequest
 */
export interface UpdateWhitelistRequest {
    /**
     * Whether the whitelist is enabled.
     * @type {boolean}
     * @memberof UpdateWhitelistRequest
     */
    enabled?: boolean;
    /**
     * User Ids to add to the whitelist.
     * @type {Array<string>}
     * @memberof UpdateWhitelistRequest
     */
    userIds?: Array<string>;
    /**
     * Emails to add to the whitelist.
     * @type {Array<string>}
     * @memberof UpdateWhitelistRequest
     */
    emails?: Array<string>;
    /**
     * Usernames to add to the whitelist.
     * @type {Array<string>}
     * @memberof UpdateWhitelistRequest
     */
    usernames?: Array<string>;
}
/**
 * 
 * @export
 * @interface UserModel
 */
export interface UserModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    phone?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    appleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    discordId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    facebookId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    googleId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    microsoftId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    twitterId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {boolean}
     * @memberof UserModel
     */
    isChild?: boolean;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    accessTokenExpiresAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UserModel
     */
    createdAt?: string;
}
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
