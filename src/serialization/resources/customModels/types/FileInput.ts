/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const FileInput: core.serialization.ObjectSchema<
    serializers.customModels.FileInput.Raw,
    Hume.customModels.FileInput
> = core.serialization.object({
    name: core.serialization.string(),
    uri: core.serialization.string().optional(),
    humeStorage: core.serialization.property("hume_storage", core.serialization.boolean()),
    dataType: core.serialization.property("data_type", core.serialization.string()),
});

export declare namespace FileInput {
    interface Raw {
        name: string;
        uri?: string | null;
        hume_storage: boolean;
        data_type: string;
    }
}
