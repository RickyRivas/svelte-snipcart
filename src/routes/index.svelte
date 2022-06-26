<script>
	import { productsList } from '../stores';
	// importing products
	import Products from '../components/Products.svelte';
</script>

<Products {productsList} />
