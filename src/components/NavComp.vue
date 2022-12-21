<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<div class="is-flex is-size-1 has-text-weight-bold">
					<h1>MEU</h1>
					<h1 class="time">TIME</h1>
				</div>
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
				data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div class="navbar-menu">
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">
					Partidas
				</router-link>
				<router-link to="/teams" class="navbar-item">
					Times
				</router-link>
				<router-link to="/players" class="navbar-item">
					Jogadores
				</router-link>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<a class="navbar-item">
						Usuário
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
	name: "NavComp"
})


</script>

<style>
.navbar{
	background-color: #121219;
}
.navbar-item{
	color: #fff;
}
.time{
	color: #f5760f;
}

</style>