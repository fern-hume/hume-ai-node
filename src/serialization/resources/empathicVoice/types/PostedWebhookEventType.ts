/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedWebhookEventType: core.serialization.Schema<
    serializers.empathicVoice.PostedWebhookEventType.Raw,
    Hume.empathicVoice.PostedWebhookEventType
> = core.serialization.enum_(["chat_started", "chat_ended"]);

export declare namespace PostedWebhookEventType {
    type Raw = "chat_started" | "chat_ended";
}
