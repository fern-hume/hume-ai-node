/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface Language {
    granularity?: Hume.expressionMeasurement.Granularity;
    sentiment?: Hume.expressionMeasurement.Unconfigurable;
    toxicity?: Hume.expressionMeasurement.Unconfigurable;
    /** Whether to return identifiers for speakers over time. If `true`, unique identifiers will be assigned to spoken words to differentiate different speakers. If `false`, all speakers will be tagged with an `unknown` ID. */
    identifySpeakers?: boolean;
}
