/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of chat_group and its status
 */
export interface ReturnChatGroup {
    /** Identifier for the Chat Group. Any Chat resumed from this Chat Group will have the same `chat_group_id`. Formatted as a UUID. */
    id: string;
    /** Time at which the first Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    firstStartTimestamp: number;
    /** Time at which the most recent Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    mostRecentStartTimestamp: number;
    /** The `chat_id` of the most recent Chat in this Chat Group. Formatted as a UUID. */
    mostRecentChatId?: string;
    mostRecentConfig?: Hume.empathicVoice.ReturnConfigSpec;
    /** The total number of Chats in this Chat Group. */
    numChats: number;
    /** Denotes whether there is an active Chat associated with this Chat Group. */
    active?: boolean;
}
