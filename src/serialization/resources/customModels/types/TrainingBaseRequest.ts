/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { CustomModelRequest } from "./CustomModelRequest";
import { Dataset } from "./Dataset";
import { Task } from "./Task";
import { EvaluationArgs } from "./EvaluationArgs";
import { Alternative } from "./Alternative";

export const TrainingBaseRequest: core.serialization.ObjectSchema<
    serializers.customModels.TrainingBaseRequest.Raw,
    Hume.customModels.TrainingBaseRequest
> = core.serialization.object({
    customModel: core.serialization.property("custom_model", CustomModelRequest),
    dataset: Dataset,
    targetFeature: core.serialization.property("target_feature", core.serialization.string().optional()),
    task: Task.optional(),
    evaluation: EvaluationArgs.optional(),
    alternatives: core.serialization.list(Alternative).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
});

export declare namespace TrainingBaseRequest {
    interface Raw {
        custom_model: CustomModelRequest.Raw;
        dataset: Dataset.Raw;
        target_feature?: string | null;
        task?: Task.Raw | null;
        evaluation?: EvaluationArgs.Raw | null;
        alternatives?: Alternative.Raw[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}
