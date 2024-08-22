/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RegistryFileDetail } from "./RegistryFileDetail";

export const EmbeddingGenerationBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.EmbeddingGenerationBaseRequest.Raw,
    Hume.expressionMeasurement.EmbeddingGenerationBaseRequest
> = core.serialization.object({
    registryFileDetails: core.serialization.property(
        "registry_file_details",
        core.serialization.list(RegistryFileDetail).optional()
    ),
});

export declare namespace EmbeddingGenerationBaseRequest {
    interface Raw {
        registry_file_details?: RegistryFileDetail.Raw[] | null;
    }
}
