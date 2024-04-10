/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const TimeInterval: core.serialization.ObjectSchema<
    serializers.customModels.TimeInterval.Raw,
    Hume.customModels.TimeInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace TimeInterval {
    interface Raw {
        begin: number;
        end: number;
    }
}
