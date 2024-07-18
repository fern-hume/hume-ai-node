/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific builtin tool version returned from the server
 */
export interface ReturnBuiltinTool {
  /** Type of Tool. Values from the ToolType enum. */
  toolType: string;
  /** Name applied to all versions of a particular Tool. */
  name: string;
  /** Text to use if the tool fails to generate content. */
  fallbackContent?: string;
}
