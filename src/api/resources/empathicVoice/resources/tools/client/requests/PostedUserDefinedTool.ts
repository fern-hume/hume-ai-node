/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "get_current_weather",
 *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
 *         versionDescription: "Fetches current weather and uses celsius or fahrenheit based on location of user.",
 *         description: "This tool is for getting the current weather.",
 *         fallbackContent: "Unable to fetch current weather."
 *     }
 */
export interface PostedUserDefinedTool {
  /** Name applied to all versions of a particular Tool. */
  name: string;
  /** Description that is appended to a specific version of a Tool. */
  versionDescription?: string;
  /** Text describing what the tool does. */
  description?: string;
  /** Stringified JSON defining the parameters used by this version of the Tool. */
  parameters: string;
  /** Text to use if the tool fails to generate content. */
  fallbackContent?: string;
}
