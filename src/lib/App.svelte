<script lang="ts">
  import Calculation from "./Calculation.svelte";
  import MaximumSpeedOfACurve from "./MaximumSpeedOfACurve.svelte";

  let tabs = ["+", "-", "x"];
  let activeTab = $state("+");

  function addition(value1: number, value2: number) {
    return value1 + value2;
  }
  function minus(value1: number, value2: number) {
    return value1 - value2;
  }
  function multiply(value1: number, value2: number) {
    return value1 * value2;
  }
</script>

<nav class="tab-nav">
  {#each tabs as tab}
    <button
      class="tab-button"
      onclick={() => (activeTab = tab)}
      class:active={activeTab === tab}
    >
      {tab}
    </button>
  {/each}
</nav>

<main class="content">
  {#if activeTab === "+"}
    <MaximumSpeedOfACurve calculate={addition} />
  {:else if activeTab === "-"}
    <Calculation calculate={minus} />
  {:else if activeTab === "x"}
    <Calculation calculate={multiply} />
  {/if}
</main>

<style>
  .tab-nav {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .tab-button {
    background-color: #e0e0e0;
    border: none;
    padding: 10px 15px;
    border-radius: 30px 30px 0 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }

  .tab-button:hover {
    background-color: #cccccc;
  }

  .tab-button.active {
    background-color: #007bff;
    color: white;
    position: relative;
    z-index: 1;
  }

  .tab-button.active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: white;
    z-index: -1;
  }

  main {
    padding: 20px;
    overflow-y: auto;
  }
</style>
