<script context="module">
  export async function preload(page, session) {
    const { application, profile, playlists } = session;

    return {
      application,
      profile,
      playlists,
    };
  }
</script>

<script>
  import { setContext } from "svelte";
  import Header from "../components/header/Header.svelte";

  export let application;
  export let profile;
  export let playlists;

  setContext("application", application);
  setContext("profile", profile);
  setContext("playlists", playlists);
</script>

<style global lang="scss">
  @import "../styles/reset.scss";
  @import "../styles/general.scss";
</style>

<Header />

<main>
  <slot />
</main>
