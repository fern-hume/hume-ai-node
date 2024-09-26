/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Failed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Failed.Raw,
    Hume.expressionMeasurement.batch.Failed
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
    message: core.serialization.string(),
});

export declare namespace Failed {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
        message: string;
    }
}
