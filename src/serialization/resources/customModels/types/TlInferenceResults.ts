/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { TlInferencePrediction } from "./TlInferencePrediction";
import { Error_ } from "./Error_";

export const TlInferenceResults: core.serialization.ObjectSchema<
    serializers.customModels.TlInferenceResults.Raw,
    Hume.customModels.TlInferenceResults
> = core.serialization.object({
    predictions: core.serialization.list(TlInferencePrediction),
    errors: core.serialization.list(Error_),
});

export declare namespace TlInferenceResults {
    interface Raw {
        predictions: TlInferencePrediction.Raw[];
        errors: Error_.Raw[];
    }
}
