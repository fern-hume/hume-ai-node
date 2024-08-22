/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Classification: core.serialization.Schema<
    serializers.expressionMeasurement.Classification.Raw,
    Hume.expressionMeasurement.Classification
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Classification {
    type Raw = Record<string, unknown>;
}
