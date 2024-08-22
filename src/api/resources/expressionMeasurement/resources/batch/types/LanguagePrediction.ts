/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface LanguagePrediction {
    /** A segment of text (like a word or a sentence). */
    text: string;
    position: Hume.expressionMeasurement.PositionInterval;
    time?: Hume.expressionMeasurement.TimeInterval;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence in this text. */
    confidence?: number;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence that this text was spoken by this speaker. */
    speakerConfidence?: number;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.EmotionScore[];
    /**
     * Sentiment predictions returned as a distribution. This model predicts the probability that a given text could be interpreted as having each sentiment level from `1` (negative) to `9` (positive).
     *
     * Compared to returning one estimate of sentiment, this enables a more nuanced analysis of a text's meaning. For example, a text with very neutral sentiment would have an average rating of `5`. But also a text that could be interpreted as having very positive sentiment or very negative sentiment would also have an average rating of `5`. The average sentiment is less informative than the distribution over sentiment, so this API returns a value for each sentiment level.
     */
    sentiment?: Hume.expressionMeasurement.SentimentScore[];
    /** Toxicity predictions returned as probabilities that the text can be classified into the following categories: `toxic`, `severe_toxic`, `obscene`, `threat`, `insult`, and `identity_hate`. */
    toxicity?: Hume.expressionMeasurement.ToxicityScore[];
}
