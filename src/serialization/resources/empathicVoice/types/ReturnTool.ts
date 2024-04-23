/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const ReturnTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnTool.Raw,
    Hume.empathicVoice.ReturnTool
> = core.serialization.object({
    id: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    createdOn: core.serialization.property("created_on", core.serialization.number().optional()),
    modifiedOn: core.serialization.property("modified_on", core.serialization.number().optional()),
    docstring: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
});

export declare namespace ReturnTool {
    interface Raw {
        id?: string | null;
        version?: number | null;
        version_description?: string | null;
        name?: string | null;
        created_on?: number | null;
        modified_on?: number | null;
        docstring?: string | null;
        schema?: string | null;
    }
}
