/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface InferenceBaseRequest {
    /**
     * Specify the models to use for inference.
     *
     * If this field is not explicitly set, then all models will run by default.
     */
    models?: Hume.expressionMeasurement.Models;
    transcription?: Hume.expressionMeasurement.Transcription;
    /**
     * URLs to the media files to be processed. Each must be a valid public URL to a media file (see recommended input filetypes) or an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`) of media files.
     *
     * If you wish to supply more than 100 URLs, consider providing them as an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`).
     */
    urls?: string[];
    /** List of File IDs corresponding to the files in the asset registry. */
    registryFiles?: string[];
    /** Text supplied directly to our Emotional Language and NER models for analysis. */
    text?: string[];
    /** If provided, a `POST` request will be made to the URL with the generated predictions on completion or the error message on failure. */
    callbackUrl?: string;
    /** Whether to send an email notification to the user upon job completion/failure. */
    notify?: boolean;
}
