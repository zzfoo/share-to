declare namespace shareTo {
    export interface FacebookShareOptions {
        /**Your app's unique identifier. Required. */
        app_id: string,
        /**The URL to redirect to after a person clicks a button on the dialog. Required when using URL redirection. */
        redirect_uri?: string,
        /**The link attached to this post. Required when using method share. Include open graph meta tags in the page at this URL to customize the story that is shared. */
        href: string,
    }
    export function facebook(options: FacebookShareOptions): void
}