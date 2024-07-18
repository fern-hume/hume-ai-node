/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../index';

export interface GroupedPredictionsNerPrediction {
  /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
  id: string;
  predictions: Hume.expressionMeasurement.NerPrediction[];
}
