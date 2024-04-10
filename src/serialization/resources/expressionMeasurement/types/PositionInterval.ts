/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const PositionInterval: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.PositionInterval.Raw,
    Hume.expressionMeasurement.PositionInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace PositionInterval {
    interface Raw {
        begin: number;
        end: number;
    }
}
