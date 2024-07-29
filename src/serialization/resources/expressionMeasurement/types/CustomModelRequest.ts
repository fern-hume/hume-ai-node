/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Tag } from "./Tag";

export const CustomModelRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.CustomModelRequest.Raw,
    Hume.expressionMeasurement.CustomModelRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    tags: core.serialization.list(Tag).optional(),
});

export declare namespace CustomModelRequest {
    interface Raw {
        name: string;
        description?: string | null;
        tags?: Tag.Raw[] | null;
    }
}
