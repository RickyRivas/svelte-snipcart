<script>
	import Product from './Product.svelte';
	export let productsList;
</script>

<h2>Our Products</h2>
<section id="products">
	{#each productsList as product}
		<Product {product} />
	{/each}
</section>

<style lang="scss">
	h2 {
		text-align: center;
		@media only screen and (min-width: 1024px) {
			margin-top: 1em;
		}
	}
	#products {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 1em;
		max-width: 1200px;
		margin: auto;

		@media only screen and (max-width: 47.975em) {
			font-size: 3.2vw;
			/* mintab 480w */
		}

		@media only screen and (min-width: 48em) {
			font-size: 1.7vw;
			/* mintab 480w */
		}

		@media only screen and (min-width: 61.25em) {
			font-size: inherit;
			/* custom opt-out 979oo */
		}
	}
</style>
