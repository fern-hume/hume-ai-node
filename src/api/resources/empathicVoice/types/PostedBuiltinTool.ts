/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A configuration of a built-in tool to be posted to the server
 */
export interface PostedBuiltinTool {
    /**
     * Name of the built-in tool to use. Hume supports the following built-in tools:
     *
     * - **web_search:** enables EVI to search the web for up-to-date information when applicable.
     * - **hang_up:** closes the WebSocket connection when appropriate (e.g., after detecting a farewell in the conversation).
     *
     * For more information, see our guide on [using built-in tools](/docs/empathic-voice-interface-evi/tool-use#using-built-in-tools).
     */
    name: Hume.empathicVoice.PostedBuiltinToolName;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
}
