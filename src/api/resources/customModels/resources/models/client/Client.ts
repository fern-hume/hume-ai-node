/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Models {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Models {
    constructor(protected readonly _options: Models.Options = {}) {}

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.getModelById("id")
     */
    public async getModelById(
        id: string,
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ExternalModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `models/${id}`
            ),
            method: "GET",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.ExternalModel.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.renameModel("id", {
     *         name: "name"
     *     })
     */
    public async renameModel(
        id: string,
        request: Hume.customModels.ModelsRenameModelRequest,
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ExternalModel> {
        const { name } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["name"] = name;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `models/${id}`
            ),
            method: "PATCH",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.ExternalModel.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.getExternalModelVersionsById("id")
     */
    public async getExternalModelVersionsById(
        id: string,
        request: Hume.customModels.ModelsGetExternalModelVersionsByIdRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ExternalModelVersion> {
        const { sharedAssets } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (sharedAssets != null) {
            _queryParams["shared_assets"] = sharedAssets.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `models/version/${id}`
            ),
            method: "GET",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.ExternalModelVersion.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.updateModelVersionDescription("id", "string")
     */
    public async updateModelVersionDescription(
        id: string,
        request: string,
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ExternalModelVersion> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `models/version/${id}`
            ),
            method: "PATCH",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.customModels.models.updateModelVersionDescription.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.ExternalModelVersion.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.getModelsByUserAndName()
     */
    public async getModelsByUserAndName(
        request: Hume.customModels.ModelsGetModelsByUserAndNameRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ModelPage> {
        const { name, pageNumber, pageSize, sharedAssets } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (name != null) {
            _queryParams["name"] = name;
        }

        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (sharedAssets != null) {
            _queryParams["shared_assets"] = sharedAssets.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "models"
            ),
            method: "GET",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.ModelPage.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns 200 if successful
     *
     * @example
     *     await hume.customModels.models.getModelVersionsByQuery()
     */
    public async getModelVersionsByQuery(
        request: Hume.customModels.ModelsGetModelVersionsByQueryRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Hume.customModels.ExternalModelVersion[]> {
        const { id, name, version, sharedAssets } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id != null) {
            if (Array.isArray(id)) {
                _queryParams["id"] = id.map((item) => item);
            } else {
                _queryParams["id"] = id;
            }
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        if (version != null) {
            _queryParams["version"] = version;
        }

        if (sharedAssets != null) {
            _queryParams["shared_assets"] = sharedAssets.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "models/version"
            ),
            method: "GET",
            headers: {
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customModels.models.getModelVersionsByQuery.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}
