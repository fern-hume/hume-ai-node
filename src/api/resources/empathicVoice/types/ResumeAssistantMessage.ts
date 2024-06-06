/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Resume responses from EVI. Chat history sent while paused will now be sent.
 */
export interface ResumeAssistantMessage {
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** The type of message sent through the socket; for a Resume Assistant message, this must be 'resume_assistant_message'. */
    type?: "resume_assistant_message";
}
