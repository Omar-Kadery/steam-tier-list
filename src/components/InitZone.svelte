<script>
  // @ts-nocheck

  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";

  export let items = [];
  export let containerWidth = "100vw";

  const flipDurationMs = 300;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<section
  style="width:{containerWidth}"
  use:dndzone={{ items, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  {#each items as item (item.id)}
    <div
      class="item"
      title={item.name}
      animate:flip={{ duration: flipDurationMs }}
      style={`background-image: url('https://steamcdn-a.akamaihd.net/steam/apps/${item.id}/library_600x900.jpg'), url('/images/steamlogo.png'); background-size: cover`}
    />
  {/each}
</section>

<style>
  section {
    background-color: #ffffff;
    min-height: 11em;
  }
  .item {
    height: 11em;
    width: 8em;
    display: inline-block;
  }
</style>
