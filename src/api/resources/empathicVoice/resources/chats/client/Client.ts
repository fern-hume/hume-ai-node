/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Chats {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Chats {
    constructor(protected readonly _options: Chats.Options = {}) {}

    /**
     * Fetches a paginated list of **Chats**.
     *
     * @param {Hume.empathicVoice.ChatsListChatsRequest} request
     * @param {Chats.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chats.listChats({
     *         pageNumber: 0,
     *         pageSize: 1,
     *         ascendingOrder: true
     *     })
     */
    public async listChats(
        request: Hume.empathicVoice.ChatsListChatsRequest = {},
        requestOptions?: Chats.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnChat>> {
        const list = async (
            request: Hume.empathicVoice.ChatsListChatsRequest
        ): Promise<Hume.empathicVoice.ReturnPagedChats> => {
            const { pageNumber, pageSize, ascendingOrder, configId } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (ascendingOrder != null) {
                _queryParams["ascending_order"] = ascendingOrder.toString();
            }
            if (configId != null) {
                _queryParams["config_id"] = configId;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    "v0/evi/chats"
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.9",
                    "User-Agent": "hume/0.9.9",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnPagedChats.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<Hume.empathicVoice.ReturnPagedChats, Hume.empathicVoice.ReturnChat>({
            response: await list(request),
            hasNextPage: (response) => (response?.chatsPage ?? []).length > 0,
            getItems: (response) => response?.chatsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Fetches a paginated list of **Chat** events.
     *
     * @param {string} id - Identifier for a Chat. Formatted as a UUID.
     * @param {Hume.empathicVoice.ChatsListChatEventsRequest} request
     * @param {Chats.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chats.listChatEvents("470a49f6-1dec-4afe-8b61-035d3b2d63b0", {
     *         pageNumber: 0,
     *         pageSize: 3,
     *         ascendingOrder: true
     *     })
     */
    public async listChatEvents(
        id: string,
        request: Hume.empathicVoice.ChatsListChatEventsRequest = {},
        requestOptions?: Chats.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnChatEvent>> {
        const list = async (
            request: Hume.empathicVoice.ChatsListChatEventsRequest
        ): Promise<Hume.empathicVoice.ReturnChatPagedEvents> => {
            const { pageSize, pageNumber, ascendingOrder } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (ascendingOrder != null) {
                _queryParams["ascending_order"] = ascendingOrder.toString();
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    `v0/evi/chats/${encodeURIComponent(id)}`
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.9",
                    "User-Agent": "hume/0.9.9",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnChatPagedEvents.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<Hume.empathicVoice.ReturnChatPagedEvents, Hume.empathicVoice.ReturnChatEvent>({
            response: await list(request),
            hasNextPage: (response) => (response?.eventsPage ?? []).length > 0,
            getItems: (response) => response?.eventsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Fetches the audio of a previous **Chat**. For more details, see our guide on audio reconstruction [here](/docs/empathic-voice-interface-evi/faq#can-i-access-the-audio-of-previous-conversations-with-evi).
     *
     * @param {string} id - Identifier for a chat. Formatted as a UUID.
     * @param {Chats.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chats.getAudio("470a49f6-1dec-4afe-8b61-035d3b2d63b0")
     */
    public async getAudio(
        id: string,
        requestOptions?: Chats.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnChatAudioReconstruction> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/chats/${encodeURIComponent(id)}/audio`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.9",
                "User-Agent": "hume/0.9.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnChatAudioReconstruction.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
