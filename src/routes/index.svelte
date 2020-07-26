<script>
  import Playlist from "../components/playlist/Playlist.svelte";

  import { getContext } from "svelte";
  const playlists = getContext("playlists");
</script>

{#each playlists as playlist}
  <Playlist data={playlist} />
{:else}
  <p>nothing here</p>
{/each}
