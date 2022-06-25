<script>
	export let qty = 1;
	export let product;
	let maxCount = product.inStock;
	function increment() {
		qty = qty + 1;
	}
	function decrement() {
		qty = qty - 1;
	}
	function checkInput() {
		if (qty <= 0 || qty > maxCount) {
			qty = 1;
		}
	}
</script>

<div class="container">
	<button class="rem" on:click={decrement} disabled={qty <= 1 ? 'true' : ''}>-</button>
	<input class="qty" type="number" bind:value={qty} on:blur={checkInput} />
	<button class="add" on:click={increment} disabled={qty >= maxCount ? 'true' : ''}>+</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 1em;
		width: max-content;
		margin: 0 auto 1em;
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
		button {
			border: 0;
			background-color: black;
			color: #fff;

			&:disabled {
				background-color: #595a5c;
				pointer-events: none;
			}
		}
		.qty {
			width: 5em;
			height: 3em;
			border: 0;
			text-align: center;
		}
		.add,
		.rem {
			width: 3em;
			height: 3em;
			cursor: pointer;
		}
		.rem {
			border-top-left-radius: 2em;
			border-bottom-left-radius: 2em;
			background-color: #e5383b;
		}
		.add {
			border-top-right-radius: 2em;
			border-bottom-right-radius: 2em;
		}
	}
</style>
