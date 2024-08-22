/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AssistantInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.AssistantInput.Raw,
    Hume.empathicVoice.AssistantInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("assistant_input"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace AssistantInput {
    interface Raw {
        type: "assistant_input";
        custom_session_id?: string | null;
        text: string;
    }
}
