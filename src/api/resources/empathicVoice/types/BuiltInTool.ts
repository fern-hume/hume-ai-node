/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Name of the built-in tool. Set to `web_search` to equip EVI with the built-in Web Search tool.
 */
export type BuiltInTool = "web_search" | "hang_up";

export const BuiltInTool = {
    WebSearch: "web_search",
    HangUp: "hang_up",
} as const;
