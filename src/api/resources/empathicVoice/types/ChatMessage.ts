/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../index';

export interface ChatMessage {
  /** Role of who is providing the message. */
  role: Hume.empathicVoice.Role;
  /** Transcript of the message. */
  content?: string;
  /** Function call name and arguments. */
  toolCall?: Hume.empathicVoice.ToolCallMessage;
  /** Function call response from client. */
  toolResult?: Hume.empathicVoice.ChatMessageToolResult;
}
