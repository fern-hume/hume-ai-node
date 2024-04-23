/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { CustomModels } from "./api/resources/customModels/client/Client";
import { ExpressionMeasurement } from "./api/resources/expressionMeasurement/client/Client";

export declare namespace HumeClient {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accountToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class HumeClient {
    constructor(protected readonly _options: HumeClient.Options = {}) {}

    protected _customModels: CustomModels | undefined;

    public get customModels(): CustomModels {
        return (this._customModels ??= new CustomModels(this._options));
    }

    protected _expressionMeasurement: ExpressionMeasurement | undefined;

    public get expressionMeasurement(): ExpressionMeasurement {
        return (this._expressionMeasurement ??= new ExpressionMeasurement(this._options));
    }
}
