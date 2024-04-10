/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const EmotionScores: core.serialization.ObjectSchema<
    serializers.empathicVoice.EmotionScores.Raw,
    Hume.empathicVoice.EmotionScores
> = core.serialization.object({
    admiration: core.serialization.property("Admiration", core.serialization.number()),
    adoration: core.serialization.property("Adoration", core.serialization.number()),
    aestheticAppreciation: core.serialization.property("Aesthetic Appreciation", core.serialization.number()),
    amusement: core.serialization.property("Amusement", core.serialization.number()),
    anger: core.serialization.property("Anger", core.serialization.number()),
    anxiety: core.serialization.property("Anxiety", core.serialization.number()),
    awe: core.serialization.property("Awe", core.serialization.number()),
    awkwardness: core.serialization.property("Awkwardness", core.serialization.number()),
    boredom: core.serialization.property("Boredom", core.serialization.number()),
    calmness: core.serialization.property("Calmness", core.serialization.number()),
    concentration: core.serialization.property("Concentration", core.serialization.number()),
    confusion: core.serialization.property("Confusion", core.serialization.number()),
    contemplation: core.serialization.property("Contemplation", core.serialization.number()),
    contempt: core.serialization.property("Contempt", core.serialization.number()),
    contentment: core.serialization.property("Contentment", core.serialization.number()),
    craving: core.serialization.property("Craving", core.serialization.number()),
    desire: core.serialization.property("Desire", core.serialization.number()),
    determination: core.serialization.property("Determination", core.serialization.number()),
    disappointment: core.serialization.property("Disappointment", core.serialization.number()),
    disgust: core.serialization.property("Disgust", core.serialization.number()),
    distress: core.serialization.property("Distress", core.serialization.number()),
    doubt: core.serialization.property("Doubt", core.serialization.number()),
    ecstasy: core.serialization.property("Ecstasy", core.serialization.number()),
    embarrassment: core.serialization.property("Embarrassment", core.serialization.number()),
    empathicPain: core.serialization.property("Empathic Pain", core.serialization.number()),
    entrancement: core.serialization.property("Entrancement", core.serialization.number()),
    envy: core.serialization.property("Envy", core.serialization.number()),
    excitement: core.serialization.property("Excitement", core.serialization.number()),
    fear: core.serialization.property("Fear", core.serialization.number()),
    guilt: core.serialization.property("Guilt", core.serialization.number()),
    horror: core.serialization.property("Horror", core.serialization.number()),
    interest: core.serialization.property("Interest", core.serialization.number()),
    joy: core.serialization.property("Joy", core.serialization.number()),
    love: core.serialization.property("Love", core.serialization.number()),
    nostalgia: core.serialization.property("Nostalgia", core.serialization.number()),
    pain: core.serialization.property("Pain", core.serialization.number()),
    pride: core.serialization.property("Pride", core.serialization.number()),
    realization: core.serialization.property("Realization", core.serialization.number()),
    relief: core.serialization.property("Relief", core.serialization.number()),
    romance: core.serialization.property("Romance", core.serialization.number()),
    sadness: core.serialization.property("Sadness", core.serialization.number()),
    satisfaction: core.serialization.property("Satisfaction", core.serialization.number()),
    shame: core.serialization.property("Shame", core.serialization.number()),
    surpriseNegative: core.serialization.property("Surprise (negative)", core.serialization.number()),
    surprisePositive: core.serialization.property("Surprise (positive)", core.serialization.number()),
    sympathy: core.serialization.property("Sympathy", core.serialization.number()),
    tiredness: core.serialization.property("Tiredness", core.serialization.number()),
    triumph: core.serialization.property("Triumph", core.serialization.number()),
});

export declare namespace EmotionScores {
    interface Raw {
        Admiration: number;
        Adoration: number;
        "Aesthetic Appreciation": number;
        Amusement: number;
        Anger: number;
        Anxiety: number;
        Awe: number;
        Awkwardness: number;
        Boredom: number;
        Calmness: number;
        Concentration: number;
        Confusion: number;
        Contemplation: number;
        Contempt: number;
        Contentment: number;
        Craving: number;
        Desire: number;
        Determination: number;
        Disappointment: number;
        Disgust: number;
        Distress: number;
        Doubt: number;
        Ecstasy: number;
        Embarrassment: number;
        "Empathic Pain": number;
        Entrancement: number;
        Envy: number;
        Excitement: number;
        Fear: number;
        Guilt: number;
        Horror: number;
        Interest: number;
        Joy: number;
        Love: number;
        Nostalgia: number;
        Pain: number;
        Pride: number;
        Realization: number;
        Relief: number;
        Romance: number;
        Sadness: number;
        Satisfaction: number;
        Shame: number;
        "Surprise (negative)": number;
        "Surprise (positive)": number;
        Sympathy: number;
        Tiredness: number;
        Triumph: number;
    }
}
