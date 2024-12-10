<script lang="ts">
  let { calculate } = $props();

  function clear() {
    value1 = "";
    value2 = "";
  }
  let value1 = $state();
  let value2 = $state();
  let result = $state();
</script>

<input
  id="number-input1"
  type="number"
  bind:value={value1}
  placeholder="Enter number..."
  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-500 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
/>

<input
  id="number-input2"
  type="number"
  bind:value={value2}
  placeholder="Enter number..."
  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-100 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
/>
<div class="flex justify-center space-x-4">
  <button
    disabled={!value1 || !value2}
    onclick={() => (result = calculate(value1, value2))}
    class="mt-4 w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white rounded-lg font-semibold text-base transition duration-500 ease-in-out transform"
  >
    Calculate
  </button>

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
  <p>Result:</p>
  <p>{result}</p>
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
