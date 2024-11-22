<script lang="js">
    import Textfield from '@smui/textfield';
	import { onMount } from 'svelte';

    export let value1 = 0;
    export let value2 = 0;

    function handleChange1(event) {
        const newValue = event.target.value;
        console.log('Value 1:', value1);

        // Custom validation for numbers only
        if (/^-?\d+$/.test(newValue)) {
            value1 = newValue;
        }
  }

  function handleChange2(event) {
    const newValue = event.target.value;
    console.log('Value 2:', value2);

    // Custom validation for numbers only
    if (/^-?\d+$/.test(newValue)) {
      value2 = newValue;
    }
  }

  function handleBlur() {
    console.log('Value 1:', value1);
    console.log('Value 2:', value2);
  }

  onMount(() => {
    const inputElement1 = document.querySelector('#input1');
    const inputElement2 = document.querySelector('#input2');
    
    if (inputElement1 && inputElement2) {
      // Handle mobile browsers
      inputElement1.addEventListener('input', (event) => {
        const newValue = event.target.value;
        
        // Custom validation for numbers only
        if (/^-?\d+$/.test(newValue)) {
          event.target.value = newValue;
        } else {
          event.preventDefault();
        }
      });

      inputElement2.addEventListener('input', (event) => {
        const newValue = event.target.value;
        
        // Custom validation for numbers only
        if (/^-?\d+$/.test(newValue)) {
          event.target.value = newValue;
        } else {
          event.preventDefault();
        }
      });
      
      // Add event listener for paste event
      inputElement1.addEventListener('paste', (event) => {
        const pastedValue = event.clipboardData.getData('text');
        
        // Custom validation for numbers only
        if (/^-?\d+$/.test(pastedValue)) {
          event.preventDefault();
        }
      });

      inputElement2.addEventListener('paste', (event) => {
        const pastedValue = event.clipboardData.getData('text');
        
        // Custom validation for numbers only
        if (/^-?\d+$/.test(pastedValue)) {
          event.preventDefault();
        }
      });
    }
  });
</script>

<Textfield bind:value={value1} label="Number" id="input1" type="number" on:change={handleChange1} on:blur={handleBlur}/>
<Textfield bind:value={value2} label="Number" id="input2" type="number" on:change={handleChange2} on:blur={handleBlur}
/>
<slot {value1} {value2}><p>The sum is {value1 + value2}</p></slot>
