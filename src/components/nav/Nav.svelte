<script>
  import { onMount } from "svelte";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let active = false;

  const playlists = getContext("playlists");
  const dispatch = createEventDispatcher();

  const goTo = (slug) => {
    document.getElementById(slug).scrollIntoView();
    dispatch("toggle");
  };
</script>

<style lang="scss">
  @import "../../styles/fluid.scss";

  $itemWidthMax: 250;
  $itemWidthMin: 125;

  $itemWidthX: ($itemWidthMax - $itemWidthMin)/ ($displayWide - $displayNarrow);
  $itemWidthY: $itemWidthMax - $displayWide * $itemWidthX;
  $itemWidth: calc(#{100 * $itemWidthX}vw + #{$itemWidthY}px);

  nav {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    opacity: 0;
    z-index: 99;
    overflow: auto;
    pointer-events: none;
    transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.active {
      opacity: 1;
      pointer-events: initial;
      transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    ul {
      width: 80vw;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($itemWidth, 1fr));
      justify-items: center;
      @include fluid(column-gap, 40, 80);
      row-gap: 5rem;
      padding: 12rem 0 8rem;

      li {
        cursor: pointer;

        img {
          width: 100%;
          max-width: $itemWidth;
          object-fit: contain;
        }
      }
    }
  }
</style>

<nav class:active>
  <ul>
    {#each playlists as playlist}
      {#if playlist.image}
        <li on:click={() => goTo(playlist.slug)}>
          <img src={playlist.image} alt={playlist.id} />
        </li>
      {/if}
    {:else}
      <!-- @TODO: -->
      <p>nothing here</p>
    {/each}
  </ul>
</nav>
