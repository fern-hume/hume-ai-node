/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "Weather Assistant Config",
 *         prompt: {
 *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
 *             version: 0
 *         },
 *         eviVersion: "2",
 *         voice: {
 *             provider: Hume.empathicVoice.PostedVoiceProvider.HumeAi,
 *             name: "SAMPLE VOICE"
 *         },
 *         languageModel: {
 *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
 *             modelResource: Hume.empathicVoice.PostedLanguageModelModelResource.Claude35Sonnet20240620,
 *             temperature: 1
 *         },
 *         eventMessages: {
 *             onNewChat: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onInactivityTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onMaxDurationTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             }
 *         }
 *     }
 */
export interface PostedConfig {
    /** Specifies the EVI version to use. Use `"1"` for version 1, or `"2"` for the latest enhanced version. For a detailed comparison of the two versions, refer to our [guide](/docs/empathic-voice-interface-evi/evi-2). */
    eviVersion: string;
    /** Name applied to all versions of a particular Config. */
    name: string;
    /** An optional description of the Config version. */
    versionDescription?: string;
    prompt?: Hume.empathicVoice.PostedConfigPromptSpec;
    /** A voice specification associated with this Config. */
    voice?: Hume.empathicVoice.PostedVoice;
    /**
     * The supplemental language model associated with this Config.
     *
     * This model is used to generate longer, more detailed responses from EVI. Choosing an appropriate supplemental language model for your use case is crucial for generating fast, high-quality responses from EVI.
     */
    languageModel?: Hume.empathicVoice.PostedLanguageModel;
    /**
     * The eLLM setup associated with this Config.
     *
     * Hume's eLLM (empathic Large Language Model) is a multimodal language model that takes into account both expression measures and language. The eLLM generates short, empathic language responses and guides text-to-speech (TTS) prosody.
     */
    ellmModel?: Hume.empathicVoice.PostedEllmModel;
    /** List of user-defined tools associated with this Config. */
    tools?: (Hume.empathicVoice.PostedUserDefinedToolSpec | undefined)[];
    /** List of built-in tools associated with this Config. */
    builtinTools?: (Hume.empathicVoice.PostedBuiltinTool | undefined)[];
    eventMessages?: Hume.empathicVoice.PostedEventMessageSpecs;
    timeouts?: Hume.empathicVoice.PostedTimeoutSpecs;
    /** Webhook config specifications for each subscriber. */
    webhooks?: (Hume.empathicVoice.PostedWebhookSpec | undefined)[];
}
