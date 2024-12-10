<script lang="ts">
  function clear() {
    value1 = undefined;
    value2 = undefined;
    value3 = undefined;
  }

  function speed(value: number = 0) {
    return value / 3.6;
  }
  function maxCurve(
    curveRadius: number = 0,
    cant: number = 0,
    maxCantDefiency: number = 0,
  ) {
    return 0.29 * Math.sqrt(curveRadius * (cant + maxCantDefiency));
  }

  function roundToNearestDecimal(value) {
    return Number(value.toFixed(1));
  }
  let value1 = $state(undefined);
  let value2 = $state(undefined);
  let value3 = $state(undefined);
  let maximumCurveResult: number | undefined = $derived.by(() => {
    if (value1 !== undefined && value2 !== undefined && value3 !== undefined) {
      return roundToNearestDecimal(maxCurve(value1, value2, value3));
    }
  });

  let speedResult: number | undefined = $derived.by(() => {
    if (maximumCurveResult !== undefined) {
      return roundToNearestDecimal(speed(maximumCurveResult));
    }
  });
</script>

<h2 class="text-3xl font-bold text-center mb-4">Maximum Speed on a Curve</h2>
<div class="container">
  <div class="input-group">
    <label for="number-input1" class="label">Curve Radius</label>
    <input
      id="number-input1"
      type="number"
      bind:value={value1}
      placeholder="Enter number..."
      class="input-field"
    />
    <span class="unit">m</span>
  </div>

  <div class="input-group">
    <label for="number-input2" class="label">Cant</label>
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
    <label for="number-input3" class="label">Maximum Cant Deficiency</label>
    <input
      id="number-input3"
      type="number"
      bind:value={value3}
      placeholder="Enter number..."
      class="input-field"
    />
    <span class="unit">m</span>
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
  <p>Maximum Curve:</p>
  <p>{maximumCurveResult}</p>
</div>
<div
  class="bg-white dark:bg-gray-900 p-6 mt-8 rounded-lg shadow-md text-2xl font-bold text-center text-gray-800 dark:text-white"
>
  <p>Speed</p>
  <p>{speedResult}</p>
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
