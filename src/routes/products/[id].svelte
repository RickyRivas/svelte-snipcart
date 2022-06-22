<script context="module">
	// importing the products array from stores.js and finding the item with the same id as the params.id
	import { productsList } from '../../stores';
	export async function load({ params }) {
		const id = params.id;
		const foundProd = productsList.find((prod) => prod.id == id);
		return {
			props: {
				product: foundProd
			}
		};
	}
</script>

<script>
	export let product;
</script>

<section>
	<div class="full-card">
		<img src={product.imageUrl} alt="" />
		<div>
			<h1>{product.name}</h1>
			<h2>Price: <span>{product.price}</span></h2>
			<p>{product.description}</p>
			<button
				class="snipcart-add-item"
				data-item-id={product.id}
				data-item-price={product.price}
				data-item-description={product.description}
				data-item-image={product.imageUrl}
				data-item-name={product.name}>Add me to cart</button
			>
		</div>
	</div>
</section>

<style>
	section {
		padding: 1em;
	}
	.full-card {
		width: 100%;
		max-width: 1000px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: auto;
	}
	img {
		width: 400px;
	}
	a,
	button {
		width: 100px;
		height: 30px;
		color: white;
		background-color: orangered;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		margin: 0.5em;
	}
</style>
