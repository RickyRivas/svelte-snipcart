<script>
	let navState = false;
	function toggleNav() {
		navState = !navState;
		window.document.body.classList.toggle('body-fixed');
	}
</script>

<header>
	<nav>
		<div class="snipdata">
			<button class="snipcart-customer-signin sc">Sign In</button>
			<span class="snipcart-items-count" />
			<span class="snipcart-total-price" />
		</div>

		<div class="navlinks-overlay {navState ? 'is-active' : ''}" on:click={toggleNav} />
		<ul class="nav-links {navState ? 'is-active' : ''}">
			<li class="nav-link active"><a href="/" on:click={toggleNav}>Home</a></li>
		</ul>
		<button
			on:click={toggleNav}
			class="hamburger {navState ? 'is-active' : ''} {navState ? 'fixed' : ''}"
			aria-label="Navigation Toggle"
		>
			<span class="hamburger-inner" />
		</button>
	</nav>
</header>

<style lang="scss">
	@import '../scss/global.scss';
	@import '../scss/nav.scss';
	.snipdata {
		color: #222;
		display: flex;
		justify-content: center;
		align-items: center;

		.snipcart-items-count {
			background-color: #222;
			color: #fff;
			width: 1.5em;
			height: 1.5em;
			border-radius: 0.5em;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 0.3em;
			font-size: 0.9em;
		}
		.snipcart-total-price {
			background-color: #00a5cf;
			color: #fff;
			width: auto;
			height: 1.5em;
			border-radius: 0.5em;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 0.5em;
			font-size: 0.9em;
		}
	}

	button.sc {
		color: #222;
		position: relative;
		overflow: hidden;
		z-index: 1;
		background-color: #f1f1f1;
		width: 9em;
		height: 2em;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		margin: 0.5em;
		font-size: 0.7em;
		cursor: pointer;
		transition: all 0.5s;

		&:disabled {
			background-color: #595a5c;
			pointer-events: none;
		}
		&:hover {
			color: white;
			background-color: #004e98;
		}
	}
</style>
