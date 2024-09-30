/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceArgs } from "./VoiceArgs";

export const ExtendedVoiceArgs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ExtendedVoiceArgs.Raw,
    Hume.empathicVoice.ExtendedVoiceArgs
> = core.serialization.object({
    text: core.serialization.string(),
    useS2A: core.serialization.property("use_s2a", core.serialization.boolean().optional()),
    voiceArgs: core.serialization.property("voice_args", VoiceArgs),
});

export declare namespace ExtendedVoiceArgs {
    interface Raw {
        text: string;
        use_s2a?: boolean | null;
        voice_args: VoiceArgs.Raw;
    }
}
