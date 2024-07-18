/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const TextPosition: core.serialization.ObjectSchema<
  serializers.expressionMeasurement.TextPosition.Raw,
  Hume.expressionMeasurement.TextPosition
> = core.serialization.object({
  begin: core.serialization.number().optional(),
  end: core.serialization.number().optional(),
});

export declare namespace TextPosition {
  interface Raw {
    begin?: number | null;
    end?: number | null;
  }
}
