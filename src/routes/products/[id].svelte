<script context="module">
	// importing the products array from stores.js and finding the item with the same id as the params.id
	import { productsList } from '../../stores';
	import QuantityWidget from '../../components/QuantityWidget.svelte';
	// Import Swiper
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	// custom swiper styles
	import swipers from '../../scss/swipers.scss';

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
	// connecting qty to quantity via binding the props
	let quantity;
	let price = product.price;
	let calcedPrice;
	$: {
		calcedPrice = price * quantity;
	}
</script>

<section>
	<div class="card">
		<div class="prod-details">
			<h1>{product.name}</h1>
		</div>
		<div class="wrap">
			<div class="price">
				<p>$<span>{calcedPrice}</span></p>
			</div>
			<Swiper class="prodSwiper" spaceBetween={50} slidesPerView={1} loop={true}>
				<SwiperSlide data-slide="1"><img src={product.images[0]} alt={product.name} /></SwiperSlide>
				<SwiperSlide data-slide="2"><img src={product.images[1]} alt={product.name} /></SwiperSlide>
				<SwiperSlide data-slide="3"><img src={product.images[2]} alt={product.name} /></SwiperSlide>
			</Swiper>
		</div>

		<div class="config">
			<p class="desc">{product.description}</p>
			<QuantityWidget bind:qty={quantity} {product} />
			<div class="btns">
				<a href="/listing">Go back</a>
				<button
					class="snipcart-add-item"
					data-item-id={product.id}
					data-item-price={product.price}
					data-item-description={product.description}
					data-item-image={product.imageUrl}
					data-item-name={product.name}
					data-item-quantity={quantity}
					disabled={product.inStock ? '' : 'disable'}
				>
					{#if product.inStock == 0}
						Out of Stock
					{:else if quantity >= 2}
						Add {quantity} to cart
					{:else}
						Add to Cart
					{/if}
				</button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding: 1em;

		.card {
			width: 100%;
			max-width: 1000px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: auto;
			position: relative;
			.desc {
				margin-bottom: 1em;
			}
			.prod-details {
				width: 100%;
				text-align: center;
			}
			.img-container {
				width: 100%;
				background-color: #e9ecef;
				padding: 1em;
				border-radius: 1em;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 1em;
				position: relative;

				.price {
					height: 2em;
					position: absolute;
					left: 0.5em;
					top: 0.5em;
					background-color: #000;
					color: #fff;
					padding: 0.2em 0.5em;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.5em;
				}
				img {
					max-width: 100%;
					max-height: 15em;
				}
			}
			.config {
				p {
					text-align: justify;
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
				.btns {
					display: flex;
					justify-content: center;
					align-items: center;
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
			}
		}
	}
</style>
