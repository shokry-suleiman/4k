<template>
	<div id="app" class="bg-dark">
		<header class="p-3 bg-dark text-white">
			<div class="container">
				<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<img src="../assets/icons/4k.png" alt="" class="max-60 w-100">
					</a>
					<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mrs-8">
						<li><a href="#" class="nav-link px-2 text-white">Home</a></li>
					</ul>
					<div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 position-relative d-flex align-items-center">
						<div class="search">
							<input class="input" type="text" placeholder="Titles, people, genres"
								:class="{ toggle: isActive }" v-on:keyup="onSearch" v-model="search">
							<img src="../assets/icons/search.png" alt="" class="max-20 w-100 search-box__icon"
								@click="isActive = !isActive">
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>
<script>

export default {
    name:'TvHeader',
	data: function () {
		return {
			isActive: false,
			search: null
		}
	},
	created: function () {
	},
	methods: {
		onSearch: function () {
			this.$router.push({ path: '/', query: { 'search': this.search}}).catch(() => {})
		}
	
	}
}
</script>
<style lang="scss">
.search {
	right: 15px;
	position: absolute;
	display: inline-block;

	input {
		width: 0px;
		height: 34px;
		background-color: #121212;
		box-shadow: none;
		color: #fff;
		border: 1px solid transparent;
		outline: none;
		padding-left: 35px;
		font-size: 16px;
		transition: 0.3s ease all;

		&.toggle {
			width: 240px;
			border-color: #fff;
		}
	}

	img {
		width: 18px;
		left: 8px;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
	}
}
</style>
