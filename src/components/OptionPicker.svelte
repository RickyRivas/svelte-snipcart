<script>
	import { onMount } from 'svelte';

	// storageOptions is the array being passed down from parent
	export let storageOptions;

	// activeTabValue is being accessed by parent
	// the first button is active initially
	let activeTabValue = 0;
	export let storageValue;

	// toggling active tabs when button is pushed
	function handleClick(tabValue) {
		if (activeTabValue === tabValue) {
			return;
		} else {
			activeTabValue = tabValue;
			storageValue = activeTabValue;
		}
	}
</script>

<div class="container">
	{#each storageOptions as option, index}
		<button
			class={activeTabValue === index ? 'active option' : 'option'}
			on:click={() => handleClick(index, option)}>{option.amount}</button
		>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10em;
		margin: 0 auto 1em;

		button.option {
			width: 4em;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.7em;
			border-radius: 0.5em;
			background-color: white;
			margin: 0em 0.5em;
			border: 0;
			transition: all 0.5s;
			cursor: pointer;
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			&.active {
				background-color: #fae1dd;
				color: #000;
			}
		}
	}
</style>
