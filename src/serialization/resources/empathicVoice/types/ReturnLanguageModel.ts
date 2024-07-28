/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';
import { ReturnLanguageModelModelProvider } from './ReturnLanguageModelModelProvider';

export const ReturnLanguageModel: core.serialization.ObjectSchema<
  serializers.empathicVoice.ReturnLanguageModel.Raw,
  Hume.empathicVoice.ReturnLanguageModel
> = core.serialization.object({
  modelProvider: core.serialization.property(
    'model_provider',
    ReturnLanguageModelModelProvider.optional(),
  ),
  modelResource: core.serialization.property(
    'model_resource',
    core.serialization.string().optional(),
  ),
  temperature: core.serialization.number().optional(),
});

export declare namespace ReturnLanguageModel {
  interface Raw {
    model_provider?: ReturnLanguageModelModelProvider.Raw | null;
    model_resource?: string | null;
    temperature?: number | null;
  }
}
