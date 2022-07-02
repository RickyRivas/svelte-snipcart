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
		<div class="navlinks-overlay {navState ? 'is-active' : ''}" on:click={toggleNav} />
		<ul class="nav-links {navState ? 'is-active' : ''}">
			<li class="nav-link active"><a href="/" on:click={toggleNav}>Home</a></li>
		</ul>
		<button
			on:click={toggleNav}
			class="hamburger {navState ? 'is-active' : ''}"
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
