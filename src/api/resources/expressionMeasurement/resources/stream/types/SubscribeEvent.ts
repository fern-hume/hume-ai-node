/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type SubscribeEvent =
    /**
     * Model predictions */
    | Hume.expressionMeasurement.Config
    /**
     * Error message */
    | Hume.expressionMeasurement.StreamErrorMessage
    /**
     * Warning message */
    | Hume.expressionMeasurement.StreamWarningMessage;
