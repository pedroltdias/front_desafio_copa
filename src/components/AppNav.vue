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
				<a class="navbar-item">
					Partidas
				</a>
				<a class="navbar-item">
					Times
				</a>
				<a class="navbar-item">
					Jogadores
				</a>
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
