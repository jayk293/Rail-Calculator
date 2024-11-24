<script lang="ts">
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Calculation from './Calculation.svelte'

  interface Props {
    active?: string;
  }

  let { active = $bindable("Plus") }: Props = $props();

</script>

<TabBar tabs={['Plus', 'Minus', 'Powers']}  bind:active>
    {#snippet children({ tab })}
    <!-- Note: the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
      {/snippet}
</TabBar>
 
  {#if active === 'Plus'}
  <Calculation  >
    {#snippet children({ value1, value2 })}
        <p>{value1} plus {value2} is {value1 + value2}</p>
          {/snippet}
    </Calculation>  
  {:else if active === 'Minus'}
  <Calculation  >
    {#snippet children({ value1, value2 })}
            <p>{value1} minus {value2} is {value1 - value2}</p>
              {/snippet}
        </Calculation>
  {:else if active === 'Powers'}
  <Calculation  >
    {#snippet children({ value1, value2 })}
                <p>{value1} to the power of {value2} is {Math.pow(value1, value2)}</p>
                  {/snippet}
            </Calculation>

  {/if}




