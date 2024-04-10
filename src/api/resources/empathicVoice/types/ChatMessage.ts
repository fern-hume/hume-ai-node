/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../..";

export interface ChatMessage {
    /** Transcript of the message. */
    content: string;
    /** Role of who is providing the message. */
    role: Hume.empathicVoice.Role;
}
