/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { JobEmbeddingGeneration } from "./JobEmbeddingGeneration";

export const EmbeddingGenerationJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.EmbeddingGenerationJob.Raw,
    Hume.expressionMeasurement.EmbeddingGenerationJob
> = core.serialization.object({}).extend(JobEmbeddingGeneration);

export declare namespace EmbeddingGenerationJob {
    interface Raw extends JobEmbeddingGeneration.Raw {}
}
