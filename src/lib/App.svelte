<script lang="ts">
  import Calculation from "./Calculation.svelte";

  let activeTab = $state("Plus");

  function addition(value1: number, value2: number) {
    return value1 + value2;
  }
  function minus(value1: number, value2: number) {
    return value1 - value2;
  }
  function power(value1: number, value2: number) {
    return Math.pow(value1, value2);
  }
</script>

<nav class="tab-nav">
  <button class="tab-button" on:click={() => (activeTab = "Plus")}>+</button>
  <button class="tab-button" on:click={() => (activeTab = "Minus")}>-</button>
  <button class="tab-button" on:click={() => (activeTab = "Powers")}>^</button>
</nav>

<main class="content">
  {#if activeTab === "Plus"}
    <Calculation calculate={addition}></Calculation>
  {:else if activeTab === "Minus"}
    <Calculation calculate={minus}></Calculation>
  {:else if activeTab === "Powers"}
    <Calculation calculate={power} />
  {/if}
</main>

<style>
  .tab-nav {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px 0 0 10px;
  }

  .tab-button {
    background-color: #e0e0e0;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .tab-button:hover {
    background-color: #cccccc;
  }

  .tab-button.active {
    background-color: #007bff;
    color: white;
  }

  main {
    padding: 20px;
    min-height: calc(100vh - 60px);
    overflow-y: auto;
  }
</style>
