<script lang="ts">
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Calculation from './Calculation.svelte'

    export let active = "Plus";

</script>

<TabBar tabs={['Plus', 'Minus', 'Powers']} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
 
  {#if active === 'Plus'}
  <Calculation let:value1 let:value2>
    <p>{value1} plus {value2} is {value1 + value2}</p>
  </Calculation>  
  {:else if active === 'Minus'}
  <Calculation let:value1 let:value2>
    <p>{value1} minus {value2} is {value1 - value2}</p>
  </Calculation>
  {:else if active === 'Powers'}
  <Calculation let:value1 let:value2>
    <p>{value1} to the power of {value2} is {Math.pow(value1, value2)}</p>
  </Calculation>

  {/if}




