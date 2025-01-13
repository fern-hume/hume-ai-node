/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedWebhookSpecEventsItem } from "./PostedWebhookSpecEventsItem";

export const PostedWebhookSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedWebhookSpec.Raw,
    Hume.empathicVoice.PostedWebhookSpec
> = core.serialization.object({
    url: core.serialization.string(),
    events: core.serialization.list(PostedWebhookSpecEventsItem),
});

export declare namespace PostedWebhookSpec {
    interface Raw {
        url: string;
        events: PostedWebhookSpecEventsItem.Raw[];
    }
}
