<p align="center">
  <a href="https://mixtapes.bartosjiri.com" target="_blank"><img src="static/meta/repository-logo.png" alt="Repository logo" /></a>
</p>

## Requirements

- [Node.js](https://nodejs.org/en/) >=18

## Development

1. Install project dependencies:
   ```
   pnpm i
   ```
2. Run the application in the development mode:
   ```
   pnpm run dev
   ```

## Deployment

#### Using providers with SvelteKit support

1. Deploy the application using the provider of your preference with SvelteKit support.
2. Provide required environment variables based on the `.env.example` file.

#### Self-hosting

1. Set up required environment variables based on the `.env.example` file.
2. Follow the SvelteKit's [node server deployment documentation](https://kit.svelte.dev/docs/adapter-node).

## Guides

#### Obtaining Spotify client ID and client secret

- Follow the [official documentation](https://developer.spotify.com/documentation/web-api/concepts/apps).
