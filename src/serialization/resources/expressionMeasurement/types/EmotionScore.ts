/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const EmotionScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.EmotionScore.Raw,
    Hume.expressionMeasurement.EmotionScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace EmotionScore {
    interface Raw {
        name: string;
        score: number;
    }
}
