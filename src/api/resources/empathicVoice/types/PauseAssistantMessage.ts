/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Pause responses from EVI. Chat history is still saved and sent after resuming.
 */
export interface PauseAssistantMessage {
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** The type of message sent through the socket; for a Pause Assistant message, this must be 'pause_assistant_message'. */
    type?: "pause_assistant_message";
}
