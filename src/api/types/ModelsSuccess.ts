/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "..";

export interface ModelsSuccess {
    /** Response for the vocal burst emotion model. */
    burst?: Hume.ModelsSuccessBurst;
    /** Response for the facial expression emotion model. */
    face?: Hume.ModelsSuccessFace;
    /** Response for the facemesh emotion model. */
    facemesh?: Hume.ModelsSuccessFacemesh;
    /** Response for the language emotion model. */
    language?: Hume.ModelsSuccessLanguage;
    /** Response for the speech prosody emotion model. */
    prosody?: Hume.ModelsSuccessProsody;
}
