/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CustomModel } from "./CustomModel";

export const TlInferenceBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.TlInferenceBaseRequest.Raw,
    Hume.expressionMeasurement.TlInferenceBaseRequest
> = core.serialization.object({
    customModel: core.serialization.property("custom_model", CustomModel),
    urls: core.serialization.list(core.serialization.string()).optional(),
    registryFiles: core.serialization.property(
        "registry_files",
        core.serialization.list(core.serialization.string()).optional()
    ),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
});

export declare namespace TlInferenceBaseRequest {
    interface Raw {
        custom_model: CustomModel.Raw;
        urls?: string[] | null;
        registry_files?: string[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}
