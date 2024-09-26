/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const JobDetails: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.JobDetails.Raw,
    Hume.expressionMeasurement.stream.JobDetails
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string().optional()),
});

export declare namespace JobDetails {
    interface Raw {
        job_id?: string | null;
    }
}
