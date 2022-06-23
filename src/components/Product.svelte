<script>
	import Product from './Product.svelte';
	export let product;
</script>

<div class="product ">
	<div class="img-container">
		<div class="in-stock {product.inStock ? '' : 'oos'}">
			{#if product.inStock == 0}
				<p>Out of stock</p>
			{:else}
				<p>{product.inStock} Left in stock!</p>
			{/if}
		</div>
		<img src={product.imageUrl} alt="" />
	</div>

	<h3>{product.name}</h3>
	<div class="btns">
		<a href={`/products/` + product.id}>View Item</a>
		<button
			class="snipcart-add-item"
			disabled={product.inStock ? '' : 'disable'}
			data-item-id={product.id}
			data-item-price={product.price}
			data-item-description={product.description}
			data-item-image={product.imageUrl}
			data-item-name={product.name}
		>
			{#if product.inStock == 0}
				Out of Stock
			{:else}
				Quick Add
			{/if}
		</button>
	</div>
</div>

<style lang="scss">
	@import '../scss/global.scss';

	.product {
		width: 100%;
		max-width: 20em;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		border-radius: 1em;
		margin: 1%;
		padding: 1em;
		position: relative;

		&:hover {
			.img-container {
				background-color: #e9ecef;
			}
		}
		@media only screen and (min-width: 1024px) {
			margin: 1em;
		}

		.img-container {
			border-radius: 1em;
			background-color: #f8f9fa;
			padding: 1em;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			transition: all 0.5s;

			img {
				max-width: 15em;
				max-height: 8em;
			}

			.in-stock {
				background: linear-gradient(45deg, #56ccf2, #2f80ed);
				position: absolute;
				top: 1em;
				left: 1em;
				padding: 0.2em 0.5em;
				border-radius: 0.5em;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 0.8em;
				&.oos {
					background: #e5383b;
				}
			}
		}

		.btns {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		h3 {
			font-weight: 400;
		}
		a,
		button {
			width: 10em;
			height: 3em;
			text-decoration: none;
			display: flex;
			justify-content: center;
			align-items: center;
			border: none;
			margin: 0.5em;
			font-size: 0.8em;
			cursor: pointer;
			transition: all 0.5s;
		}
		button {
			color: #fff;
			position: relative;
			overflow: hidden;
			z-index: 1;
			background-color: #000;
			&::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: #004e98;
				transform: scaleX(0);
				transition: all 0.5s;
				z-index: -1;
			}

			&:disabled {
				background-color: #595a5c;
				pointer-events: none;
			}
			&:hover {
				&::before {
					transform: scaleX(1);
				}
			}
		}
		a {
			color: #000;
			background-color: #f8f9fa;
			position: relative;
			z-index: 1;
			&::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: #004e98;
				transform: scaleX(0);
				transition: all 0.5s;
				z-index: -1;
			}
			&:hover {
				color: #fff;
				&::before {
					transform: scaleX(1);
				}
			}
		}
	}
</style>
