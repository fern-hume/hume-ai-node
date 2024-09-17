/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Failed } from "./Failed";

export const StateTrainingFailed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingFailed.Raw,
    Hume.expressionMeasurement.batch.StateTrainingFailed
> = core.serialization.object({}).extend(Failed);

export declare namespace StateTrainingFailed {
    interface Raw extends Failed.Raw {}
}
