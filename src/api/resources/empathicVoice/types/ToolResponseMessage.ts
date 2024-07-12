/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a function call response.
 */
export interface ToolResponseMessage {
    /**
     * The type of message sent through the socket; for a Tool Response message, this must be `tool_response`.
     *
     * Upon receiving a [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type) and successfully invoking the function, this message is sent to convey the result of the function call back to EVI.
     */
    type: "tool_response";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * The unique identifier for a specific tool call instance.
     *
     * This ID is used to track the request and response of a particular tool invocation, ensuring that the correct response is linked to the appropriate request. The specified `tool_call_id` must match the one received in the [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.tool_call_id).
     */
    toolCallId: string;
    /** Return value of the tool call. Contains the output generated by the tool to pass back to EVI. */
    content: string;
    /**
     * Name of the tool.
     *
     * Include this optional field to help the supplemental LLM identify which tool generated the response. The specified `tool_name` must match the one received in the [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type).
     */
    toolName?: string;
    /** Type of tool called. Either `builtin` for natively implemented tools, like web search, or `function` for user-defined tools. */
    toolType?: Hume.empathicVoice.ToolType;
}
