<script>
	export let product;
</script>

<div class="product ">
	<img src={product.imageUrl} alt="" />
	<h1>{product.name}</h1>
	<div class="btns">
		<a href={`/products/` + product.id}>View Item</a>
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

<style lang="scss">
	@import '../scss/global.scss';

	.product {
		max-width: max-content;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.btns {
			display: flex;
		}

		a,
		button {
			width: 100px;
			height: 30px;
			color: $color;
			background-color: green;
			text-decoration: none;
			display: flex;
			justify-content: center;
			align-items: center;
			border: none;
			margin: 0.5em;
		}
		img {
			width: 100%;
			max-height: 400px;
		}
	}
</style>
