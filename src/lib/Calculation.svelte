<script lang="ts">
  /**
   * @typedef {Object} Props
   * @property {number} [value1]
   * @property {number} [value2]
   * @property {import('svelte').Snippet<[any]>} [children]
   */

  /** @type {Props} */
  let { value1 = $bindable(0), value2 = $bindable(0), children } = $props();
</script>

<input
  id="number-input1"
  type="number"
  bind:value={value1}
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>

<input
  id="number-input2"
  type="number"
  bind:value={value2}
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>

{#if children}{@render children({ value1, value2 })}
{:else}
  <p>
    The sum is {value1 + value2}
  </p>{/if}

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
