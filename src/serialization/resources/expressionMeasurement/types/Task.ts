/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';
import { TaskClassification } from './TaskClassification';
import { TaskRegression } from './TaskRegression';

export const Task: core.serialization.Schema<
  serializers.expressionMeasurement.Task.Raw,
  Hume.expressionMeasurement.Task
> = core.serialization
  .union('type', {
    classification: TaskClassification,
    regression: TaskRegression,
  })
  .transform<Hume.expressionMeasurement.Task>({
    transform: (value) => value,
    untransform: (value) => value,
  });

export declare namespace Task {
  type Raw = Task.Classification | Task.Regression;

  interface Classification extends TaskClassification.Raw {
    type: 'classification';
  }

  interface Regression extends TaskRegression.Raw {
    type: 'regression';
  }
}
