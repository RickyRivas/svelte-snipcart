<script>
	let navState = false;
	function toggleNav() {
		navState = !navState;
	}
</script>

<header>
	<nav>
		<!-- <div class="logo-wrapper">
			<h2>Logo</h2>
		</div> -->
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
</style>
