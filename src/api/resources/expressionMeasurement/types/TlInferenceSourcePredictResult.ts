/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../..";

export interface TlInferenceSourcePredictResult {
    source: Hume.expressionMeasurement.Source;
    results?: Hume.expressionMeasurement.TlInferenceResults;
    /** An error message. */
    error?: string;
}
