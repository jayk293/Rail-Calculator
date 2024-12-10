<script lang="ts">
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

<div class="grid grid-cols-1 gap-4 mt-8">
  <div class="flex items-center">
    <input
      id="number-input1"
      type="number"
      bind:value={value1}
      class="w-20 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-500 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    />
    <span class="ml-2 text-sm">kph</span>
  </div>

  <div class="flex items-center">
    <input
      id="number-input2"
      type="number"
      bind:value={value2}
      class="w-20 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-100 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    />
    <span class="ml-2 text-sm">m</span>
  </div>

  <div class="flex items-center">
    <input
      id="number-input3"
      type="number"
      bind:value={value3}
      class="w-20 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-100 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    />
    <span class="ml-2 text-sm">mm</span>
  </div>
</div>

<div class="flex justify-center space-x-4">
  <button
    onclick={clear}
    class="mt-4 w-full px-4 py-3 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white rounded-lg font-semibold text-base transition duration-500 ease-in-out transform"
  >
    Clear
  </button>
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
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #e0e0e0; /* Light gray background */
    color: #666; /* Darker text color */
  }

  button:disabled:hover {
    background-color: #d9d9d9; /* Slightly darker on hover */
  }
  input[type="number"] {
    -webkit-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
