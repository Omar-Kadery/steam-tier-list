<script>
  // @ts-nocheck

  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import * as api from "../constants/api.json";
  import { error } from "@sveltejs/kit";

  export let items = [];
  export let containerWidth = "100vw";
  export let tierHeadingColor;
  export let tierHeadingLevel;

  let randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  const flipDurationMs = 300;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<div class="tier-container">
  <div class="tier-heading" style="background-color: {tierHeadingColor}">
    {tierHeadingLevel}
  </div>
  <section
    style="width:{containerWidth}"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as item (item.id)}
      <div
        class="item"
        title="${item.name}"
        animate:flip={{ duration: flipDurationMs }}
        style={`background-image: url('https://steamcdn-a.akamaihd.net/steam/apps/${item.id}/library_600x900.jpg'), url('/images/steamlogo.png'); background-size: cover`}
      />
    {/each}
  </section>
</div>

<style>
  section {
    background-color: #2e2e2a;
    min-height: 11em;
  }
  .item {
    height: 11em;
    width: 8em;
    display: inline-block;
  }
  .tier-container {
    display: flex;
    flex-direction: row;
    border: 2px solid black;
  }
  .tier-heading {
    width: 5em;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
