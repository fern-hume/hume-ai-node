/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific tool identifier to be posted to the server
 */
export interface PostedUserDefinedToolSpec {
  /** Identifier for a Tool. Formatted as a UUID. */
  id: string;
  /** Version number for a Tool. Version numbers should be integers. The combination of configId and version number is unique. */
  version?: number;
}
