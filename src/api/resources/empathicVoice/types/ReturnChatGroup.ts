/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A description of chat_group and its status
 */
export interface ReturnChatGroup {
  /** Identifier for the chat group. Any chat resumed from this chat will have the same chat_group_id. Formatted as a UUID. */
  id: string;
  /** The timestamp when the first chat in this chat group started, formatted as a Unix epoch milliseconds. */
  firstStartTimestamp: number;
  /** The timestamp when the most recent chat in this chat group started, formatted as a Unix epoch milliseconds. */
  mostRecentStartTimestamp: number;
  /** The chat_id of the most recent chat in this chat group. Formatted as a UUID. */
  mostRecentChatId?: string;
  /** The total number of chats in this chat group. */
  numChats: number;
  active?: boolean;
}
