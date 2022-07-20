<template>
	<header class="p-3 bg-dark text-white sticky-top">
		<div class="container">
			<div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
				<router-link to="/" exact>
					<a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<img src="../assets/icons/4k.png" alt="" class="max-50 max-md-60 w-100">
					</a>
				</router-link>
				<ul class="nav col-md-auto me-md-auto mb-2 justify-content-center mb-md-0 mrs-8 d-none d-md-block">
					<router-link tag="li" active-class="active" to="/" exact>
						<a class="nav-link px-2 text-white">Home</a>
					</router-link>
				</ul>
				<div class="col-lg-auto mb-3 mb-lg-0 me-lg-3 position-relative d-flex align-items-center">
					<div class="search">
						<input class="input" type="text" placeholder="Titles, people, genres"
							:class="{ toggle: isActive }" v-on:keyup="onSearch" v-model="search">
						<img src="../assets/icons/search.png" alt="" class="max-20 w-100" @click="isActive = !isActive">
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>

export default {
	name: 'AppHeader',
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
			this.$router.push({ path: '/', query: { 'search': this.search } }).catch(() => { })
		}
	}
}
</script>
<style lang="scss">
.search {
	right: -33px;
	position: absolute;
	display: inline-block;

	@media (max-width: 767.98px) {
		right: 0px;
		top: -12px;
	}
}

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

		@media (max-width: 767.98px) {
			width: calc(60vw);
		}
	}
}

.search img {
	width: 18px;
	left: 8px;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
}
</style>
