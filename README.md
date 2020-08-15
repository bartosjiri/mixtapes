# Mixtapes

A Svelte application to showcase your Spotify playlists in style.

## Preview
`TBD`

## Development

1. Navigate to the project folder and install dependencies:
	```sh
    cd mixtapes
    npm install
    ```
2. Run the project in a development mode:
	```sh
    npm run dev
    ```

For more information about folder structure, bundler config and more, check out the [Sapper template](https://github.com/sveltejs/sapper-template) documentation.

## Configuration

In order to fetch user/playlist data from Spotify's API, you will need to provide your client ID and client secret:

1. Register a new application and obtain your Spotify client ID and secret ([guide](https://developer.spotify.com/documentation/general/guides/app-settings/)).
2. Create a new `.env` file in the root folder of the project and fill in your credentials:
    ```sh
    cp .env.example .env
    ```
    *Note: Do not share your credentials in public. If you are hosting your application on Netlify or similar services, you will need to provide these throught its interface ([guide](https://docs.netlify.com/configure-builds/environment-variables/)).* 

The general application configuration is located in the `src/configuration/application.yml` file:

| Field | Description | Value |
|:--|:--|:--|
| name | Display name used in the site title and meta | string; optional |
| url | External link in the site title | string; optional |
| user_id | Spotify user ID/name (available [here](https://www.spotify.com/account/overview/)) | string |
| enable_all | Import all user's public playlists (if false, only playlists listed in playlists config will be displayed) | boolean |

You can optionally customize individual playlists in the `src/configuration/playlists.yml` file:
| Field | Description | Value |
|:--|:--|:--|
| id | Spotify playlist ID (alphanumeric string from playlist's URL) | string |
| image | Custom playlist cover image URL | string; optional |
| color | Background color in any valid CSS format | string; optional |
| enabled | Include playlist in the application (overrides `enable_all` from application configuration) | boolean; optional |
| order | Order priority in the list | number; optional |

## Deployment

You can export the application and host it on your server:

1. Export the static version of the application:
	 ```sh
    npx sapper export
    ```
2. Upload the contents of the `__sapper__/export` folder on your server.

Alternatively, you can deploy the application through static site hosting services like [Netlify](https://netlify.app):
1. Setup the build command to `npm run export`.
2. Setup the publish directory to `__sapper__/export`.
3. Declare the environment variables `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` and its values ([configuration - step 1](#configuration)).

	*Note: In Netlify, you can set this up under "Settings > Build & deploy > Environment > Environment variables".*