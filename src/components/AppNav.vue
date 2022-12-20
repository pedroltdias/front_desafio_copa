<template>
	<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
	name: "AppNav"
})


</script>
