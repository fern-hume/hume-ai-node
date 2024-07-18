/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../../../../index';
import * as Hume from '../../../../../../../api/index';
import * as core from '../../../../../../../core';

export const PostedConfigVersionDescription: core.serialization.Schema<
  serializers.empathicVoice.PostedConfigVersionDescription.Raw,
  Hume.empathicVoice.PostedConfigVersionDescription
> = core.serialization.object({
  versionDescription: core.serialization.property(
    'version_description',
    core.serialization.string().optional(),
  ),
});

export declare namespace PostedConfigVersionDescription {
  interface Raw {
    version_description?: string | null;
  }
}
