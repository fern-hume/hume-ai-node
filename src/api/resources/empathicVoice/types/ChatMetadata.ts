/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is a chat metadata message.
 */
export interface ChatMetadata {
    /** ID of the chat group. Used to resume a chat. */
    chatGroupId: string;
    /** ID of the chat. */
    chatId: string;
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** The type of message sent through the socket; for a Chat Metadata message, this must be 'chat_metadata'. */
    type: "chat_metadata";
}
