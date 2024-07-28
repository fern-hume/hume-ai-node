/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const ReturnChatEventRole: core.serialization.Schema<
  serializers.empathicVoice.ReturnChatEventRole.Raw,
  Hume.empathicVoice.ReturnChatEventRole
> = core.serialization.enum_(['USER', 'AGENT', 'SYSTEM', 'TOOL']);

export declare namespace ReturnChatEventRole {
  type Raw = 'USER' | 'AGENT' | 'SYSTEM' | 'TOOL';
}
