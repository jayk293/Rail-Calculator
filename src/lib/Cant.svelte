<script lang="ts">
  import { Button } from "flowbite-svelte";

  function clear() {
    value1 = undefined;
    value2 = undefined;
  }

  function curveEquilibrimCant(
    speedAsKph: number = 0,
    curveRadius: number = 0,
  ) {
    return (11.82 * Math.pow(speedAsKph, 2)) / curveRadius;
  }

  function cantDefiency(curveEquilibriumCant: number = 0, cant: number = 0) {
    return curveEquilibriumCant - cant;
  }
  function roundToNearestDecimal(value) {
    return Number(value.toFixed(1));
  }
  let value1 = $state(undefined);
  let value2 = $state(undefined);
  let value3 = $state(undefined);
  let curveEquilibrimCantResult: number | undefined = $derived.by(() => {
    if (value1 !== undefined && value2 !== undefined) {
      return roundToNearestDecimal(curveEquilibrimCant(value1, value2));
    }
  });
  let cantDefiencyResult: number | undefined = $derived.by(() => {
    if (curveEquilibrimCantResult !== undefined && value3 !== undefined) {
      return roundToNearestDecimal(
        cantDefiency(curveEquilibrimCantResult, value3),
      );
    }
  });
</script>

<h2 class="text-3xl font-bold text-center mb-4">Cant</h2>
<div class="container">
  <div class="input-group">
    <label for="number-input1" class="label">Train Speed</label>
    <input
      id="number-input1"
      type="number"
      bind:value={value1}
      placeholder="Enter number..."
      class="input-field"
    />
    <span class="unit">kph</span>
  </div>

  <div class="input-group">
    <label for="number-input2" class="label">Curve Radius</label>
    <input
      id="number-input2"
      type="number"
      bind:value={value2}
      placeholder="Enter number..."
      class="input-field"
    />
    <span class="unit">m</span>
  </div>

  <div class="input-group">
    <label for="number-input3" class="label">Applied Cant</label>
    <input
      id="number-input3"
      type="number"
      bind:value={value3}
      placeholder="Enter number..."
      class="input-field"
    />
    <span class="unit">mm</span>
  </div>
</div>

<div class="flex justify-center space-x-4">
  <Button
    onclick={clear}
    color="red"
    class="mt-4 w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-white rounded-lg font-semibold text-base transition duration-500 ease-in-out transform"
  >
    Clear
  </Button>
</div>

<div
  class="bg-white dark:bg-gray-900 p-6 mt-8 rounded-lg shadow-md text-2xl font-bold text-center text-gray-800 dark:text-white"
>
  <p>Curve Equilibrium Cant:</p>
  <p>{curveEquilibrimCantResult}</p>
</div>

<div
  class="bg-white dark:bg-gray-900 p-6 mt-8 rounded-lg shadow-md text-2xl font-bold text-center text-gray-800 dark:text-white"
>
  <p>Cant Deficiency:</p>
  <p>{cantDefiencyResult}</p>
</div>

<style>
  input[type="number"] {
    -webkit-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .input-group {
    display: flex;
    align-items: center;
  }

  .label {
    width: 150px;
    margin-right: 8px;
  }

  .input-field {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .unit {
    margin-left: 8px;
  }
</style>
