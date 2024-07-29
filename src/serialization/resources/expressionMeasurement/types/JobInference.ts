/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { InferenceRequest } from "./InferenceRequest";
import { StateInference } from "./StateInference";

export const JobInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.JobInference.Raw,
    Hume.expressionMeasurement.JobInference
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: InferenceRequest,
    state: StateInference,
});

export declare namespace JobInference {
    interface Raw {
        job_id: string;
        user_id: string;
        request: InferenceRequest.Raw;
        state: StateInference.Raw;
    }
}
