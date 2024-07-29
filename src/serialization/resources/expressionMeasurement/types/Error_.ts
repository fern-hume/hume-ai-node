/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const Error_: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.Error_.Raw,
    Hume.expressionMeasurement.Error_
> = core.serialization.object({
    message: core.serialization.string(),
    file: core.serialization.string(),
});

export declare namespace Error_ {
    interface Raw {
        message: string;
        file: string;
    }
}
