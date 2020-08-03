<script>
  import Inview from "../inview/Inview.svelte";

  export let data;
  const { id, slug, name, image, color } = data;

  let ref;
  export let active = false;
</script>

<style lang="scss">
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.8s ease-in-out;
    scroll-snap-align: center;
    // will-change: opacity;

    &.active {
      opacity: 1;
    }

    span {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80vw;
      height: 75vmin;
      z-index: 1;

      a {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 640px;
        max-height: 640px;
        z-index: 4;

        .cover {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 93%;
          max-width: 640px;
          max-height: 640px;
          object-fit: contain;
          overflow: hidden;
          border-radius: 1px;
          z-index: 5;
        }
      }

      a:hover + .vinyl {
        transform: translateX(110%);
      }

      .vinyl {
        position: absolute;
        transform: translateX(50%);
        height: 75vmin;
        max-height: 642px;
        object-fit: contain;
        pointer-events: none;
        z-index: 3;
        transition: transform 0.8s ease-in-out;
      }

      .backdrop {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 75vmin;
        max-height: 642px;
        z-index: 2;
      }
    }
  }
</style>

{#if image}
  <Inview
    wrapper={ref}
    on:enter={() => {
      active = true;
    }}
    on:leave={() => {
      active = false;
    }}>
    <article class:active bind:this={ref} id={slug}>
      <span style={`background: ${color}`} />
      <div class="container">
        <a
          href={`https://open.spotify.com/playlist/${id}`}
          target="_blank"
          rel="external">
          <img class="cover" src={image} alt={name} />
        </a>
        <img class="vinyl" src="../vinyl.png" alt="vinyl" />
        <img class="backdrop" src="../backdrop.png" alt="backdrop" />
      </div>
    </article>
  </Inview>
{/if}
