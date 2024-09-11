/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TrainingCustomModel: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TrainingCustomModel.Raw,
    Hume.expressionMeasurement.batch.TrainingCustomModel
> = core.serialization.object({
    id: core.serialization.string(),
    versionId: core.serialization.property("version_id", core.serialization.string().optional()),
});

export declare namespace TrainingCustomModel {
    interface Raw {
        id: string;
        version_id?: string | null;
    }
}
