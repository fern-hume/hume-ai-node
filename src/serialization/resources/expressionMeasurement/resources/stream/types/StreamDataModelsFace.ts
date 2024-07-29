/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamDataModelsFace: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.StreamDataModelsFace.Raw,
    Hume.expressionMeasurement.StreamDataModelsFace
> = core.serialization.object({
    facs: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    descriptions: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    identifyFaces: core.serialization.property("identify_faces", core.serialization.boolean().optional()),
    fpsPred: core.serialization.property("fps_pred", core.serialization.number().optional()),
    probThreshold: core.serialization.property("prob_threshold", core.serialization.number().optional()),
    minFaceSize: core.serialization.property("min_face_size", core.serialization.number().optional()),
});

export declare namespace StreamDataModelsFace {
    interface Raw {
        facs?: Record<string, unknown> | null;
        descriptions?: Record<string, unknown> | null;
        identify_faces?: boolean | null;
        fps_pred?: number | null;
        prob_threshold?: number | null;
        min_face_size?: number | null;
    }
}
