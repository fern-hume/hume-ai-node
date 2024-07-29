/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { EmbeddingGenerationBaseRequest } from "./EmbeddingGenerationBaseRequest";
import { StateEmbeddingGeneration } from "./StateEmbeddingGeneration";

export const JobEmbeddingGeneration: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.JobEmbeddingGeneration.Raw,
    Hume.expressionMeasurement.JobEmbeddingGeneration
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: EmbeddingGenerationBaseRequest,
    state: StateEmbeddingGeneration,
});

export declare namespace JobEmbeddingGeneration {
    interface Raw {
        job_id: string;
        user_id: string;
        request: EmbeddingGenerationBaseRequest.Raw;
        state: StateEmbeddingGeneration.Raw;
    }
}
