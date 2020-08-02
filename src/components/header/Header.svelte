<script>
  import { onMount } from "svelte";
  import { getContext } from "svelte";
  import Nav from "../nav/Nav.svelte";

  const application = getContext("application");
  const profile = getContext("profile");

  onMount(async () => {
    let prevPos = window.pageYOffset;
    window.onscroll = () => {
      let currPos = window.pageYOffset;
      if (prevPos > currPos) {
        document.getElementById("header").style.transform = "translateY(0%)";
      } else {
        document.getElementById("header").style.transform = "translateY(-100%)";
      }
      prevPos = currPos;
    };
  });

  let active = false;

  const toggleNav = () => {
    document.body.classList.toggle("noscroll");
    active = !active;
  };
</script>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    width: calc(100vw - 8.8rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 4.4rem;
    z-index: 100;
    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      color: #101010;
    }

    .controls {
      position: relative;
      height: 1.5rem;
      width: 1.5rem;
      padding: 1rem;
      margin-right: -1rem;
      cursor: pointer;

      svg {
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        fill: #101010;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

        &.active {
          opacity: 1;
        }
      }
    }
  }
</style>

<svelte:head>
  <title>
    Mixtapes by {application.name ? application.name : profile.display_name}
  </title>
</svelte:head>

<header id="header">
  <h1>
    Mixtapes by
    <a href={application.url} rel="external">
      {application.name ? application.name : profile.display_name}
    </a>
  </h1>
  <div class="controls" on:click={toggleNav}>
    <svg
      class:active={!active}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15">
      <rect x="12" width="3" height="3" />
      <rect x="6" width="3" height="3" />
      <rect width="3" height="3" />
      <rect x="12" y="6" width="3" height="3" />
      <rect x="6" y="6" width="3" height="3" />
      <rect y="6" width="3" height="3" />
      <rect x="12" y="12" width="3" height="3" />
      <rect x="6" y="12" width="3" height="3" />
      <rect y="12" width="3" height="3" />
    </svg>
    <svg
      class:active
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 357 357"
      width="15"
      height="15">
      <polygon
        points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3
        35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5 " />
    </svg>
  </div>
</header>

<Nav {active} on:toggle={toggleNav} />
