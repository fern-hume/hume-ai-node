/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ModelsSuccessBurst: core.serialization.ObjectSchema<
    serializers.ModelsSuccessBurst.Raw,
    Hume.ModelsSuccessBurst
> = core.serialization.object({
    predictions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ModelsSuccessBurstPredictionsItem))
        .optional(),
});

export declare namespace ModelsSuccessBurst {
    interface Raw {
        predictions?: serializers.ModelsSuccessBurstPredictionsItem.Raw[] | null;
    }
}
