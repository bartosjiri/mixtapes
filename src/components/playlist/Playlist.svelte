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
    height: 100vh;
    width: 100%;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;

    &.active {
      opacity: 1;
    }

    span {
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .container {
      position: relative;
      display: flex;
      justify-content: center;
      height: 75vh;
      width: 80vw;
      z-index: 1;

      figure {
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
</style>

{#if image}
  <Inview
    let:inView
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
        <figure>
          <a
            href={`https://open.spotify.com/playlist/${id}`}
            target="_blank"
            rel="external">
            <img src={image} alt={name} />
          </a>
        </figure>
      </div>
    </article>
  </Inview>
{/if}
