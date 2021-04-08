[![Mixtapes](static/meta/repository-logo.png)](https://mixtapes.bartosjiri.com)

## Development

#### Project initialization

1. Install project dependencies:
   ```sh
   yarn
   ```
2. Setup environment variables in the `.env` file following the `.env.example` template:
	- Relevant keys can be obtained through [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/applications)
3. Configure the application through YAML files in the `/configuraton` folder following the instructions in individual files.

#### Local server

To start developing or managing content on local machine:
1. Start up the application in development environment:
    ```sh
    npm run start
    ```
2. The site will be running at `http://localhost:8000` with hot-reloading enabled.
   
## Deployment

#### Initial setup

1. Create a new Netlify site.
2. Setup environment variables in the *Build & deploy -> Environment* section of settings.
3. Follow steps in the next section.

#### Site deployment

1. Push changes to the main/master branch.
2. Wait for Netlify to build and deploy the site.