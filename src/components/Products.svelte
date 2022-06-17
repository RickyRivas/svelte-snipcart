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

<style>
	h2 {
		text-align: center;
	}
	#products {
		width: 100%;
		display: grid;
		grid-gap: 1em;
		place-items: center;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>
