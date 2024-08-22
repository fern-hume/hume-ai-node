/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Ner: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.Ner.Raw,
    Hume.expressionMeasurement.Ner
> = core.serialization.object({
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
});

export declare namespace Ner {
    interface Raw {
        identify_speakers?: boolean | null;
    }
}
