/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { StateTlInferenceQueued } from "./StateTlInferenceQueued";
import { StateTlInferenceInProgress } from "./StateTlInferenceInProgress";
import { StateTlInferenceCompletedTlInference } from "./StateTlInferenceCompletedTlInference";
import { StateTlInferenceFailed } from "./StateTlInferenceFailed";

export const StateTlInference: core.serialization.Schema<
    serializers.customModels.StateTlInference.Raw,
    Hume.customModels.StateTlInference
> = core.serialization
    .union("status", {
        QUEUED: StateTlInferenceQueued,
        IN_PROGRESS: StateTlInferenceInProgress,
        COMPLETED: StateTlInferenceCompletedTlInference,
        FAILED: StateTlInferenceFailed,
    })
    .transform<Hume.customModels.StateTlInference>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateTlInference {
    type Raw =
        | StateTlInference.Queued
        | StateTlInference.InProgress
        | StateTlInference.Completed
        | StateTlInference.Failed;

    interface Queued extends StateTlInferenceQueued.Raw {
        status: "QUEUED";
    }

    interface InProgress extends StateTlInferenceInProgress.Raw {
        status: "IN_PROGRESS";
    }

    interface Completed extends StateTlInferenceCompletedTlInference.Raw {
        status: "COMPLETED";
    }

    interface Failed extends StateTlInferenceFailed.Raw {
        status: "FAILED";
    }
}
