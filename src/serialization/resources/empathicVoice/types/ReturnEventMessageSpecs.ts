/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnEventMessageSpec } from "./ReturnEventMessageSpec";

export const ReturnEventMessageSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnEventMessageSpecs.Raw,
    Hume.empathicVoice.ReturnEventMessageSpecs
> = core.serialization.object({
    onNewChat: core.serialization.property("on_new_chat", ReturnEventMessageSpec.optional()),
    onInactivityTimeout: core.serialization.property("on_inactivity_timeout", ReturnEventMessageSpec.optional()),
    onMaxDurationTimeout: core.serialization.property("on_max_duration_timeout", ReturnEventMessageSpec.optional()),
});

export declare namespace ReturnEventMessageSpecs {
    interface Raw {
        on_new_chat?: ReturnEventMessageSpec.Raw | null;
        on_inactivity_timeout?: ReturnEventMessageSpec.Raw | null;
        on_max_duration_timeout?: ReturnEventMessageSpec.Raw | null;
    }
}
