/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Collection of timeout specifications returned by the server.
 *
 * Timeouts are sent by the server when specific time-based events occur during a chat session. These specifications set the inactivity timeout and the maximum duration an EVI WebSocket connection can stay open before it is automatically disconnected.
 */
export interface PostedTimeoutSpecs {
    /**
     * Specifies the duration of user inactivity (in seconds) after which the EVI WebSocket connection will be automatically disconnected. Default is 600 seconds (10 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    inactivity?: Hume.empathicVoice.PostedTimeoutSpecsInactivity;
    /**
     * Specifies the maximum allowed duration (in seconds) for an EVI WebSocket connection before it is automatically disconnected. Default is 1,800 seconds (30 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    maxDuration?: Hume.empathicVoice.PostedTimeoutSpecsMaxDuration;
}
