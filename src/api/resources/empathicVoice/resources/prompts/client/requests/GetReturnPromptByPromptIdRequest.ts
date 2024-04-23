/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface GetReturnPromptByPromptIdRequest {
    /**
     * The page number of the results to return.
     */
    pageNumber?: number;
    /**
     * The maximum number of results to include per page.
     */
    pageSize?: number;
    /**
     * Only include the most recent version of each prompt in the list.
     */
    restrictToMostRecent?: boolean;
}
