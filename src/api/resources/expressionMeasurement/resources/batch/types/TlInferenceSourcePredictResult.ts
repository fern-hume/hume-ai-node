/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TlInferenceSourcePredictResult {
    source: Hume.expressionMeasurement.batch.Source;
    results?: Hume.expressionMeasurement.batch.TlInferenceResults;
    /** An error message. */
    error?: string;
}
