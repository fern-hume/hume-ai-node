/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type SubscribeEvent =
    | Hume.empathicVoice.AssistantEnd
    | Hume.empathicVoice.AssistantMessage
    | Hume.empathicVoice.AudioOutput
    | Hume.empathicVoice.Error_
    | Hume.empathicVoice.UserInterruption
    | Hume.empathicVoice.UserMessage
    | Hume.empathicVoice.ToolCallMessage
    | Hume.empathicVoice.ToolResponseMessage
    | Hume.empathicVoice.ToolErrorMessage;
