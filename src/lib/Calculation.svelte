<script lang="ts">
  /**
   * @typedef {Object} Props
   * @property {number} [value1]
   * @property {number} [value2]
   * @property {import('svelte').Snippet<[any]>} [children]
   */

  /** @type {Props} */
  let { value1 = $bindable(), value2 = $bindable(), children } = $props();

  let result = $state();

  function calculateSum() {
    const num1 = Number(value1);
    const num2 = Number(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      result = `Sum: ${num1 + num2}`;
    } else {
      console.error("Please enter valid numbers");
    }
  }
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
  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-0 focus:ring-blue-200 text-base font-medium outline-none transition duration-500 ease-in-out transform bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
/>

<button
  onclick={calculateSum}
  class="mt-4 w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white rounded-lg font-semibold text-base transition duration-500 ease-in-out transform"
>
  Calculate Sum
</button>

<div class="bg-white dark:bg-gray-900 p-6 mt-8 rounded-lg shadow-md">
  <p class="text-xl font-bold mb-2">Result:</p>
  <p class="text-2xl font-bold text-center text-gray-800 dark:text-white">
    {result}
  </p>
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
</style>
