<template>
	<section class="box">
		<div class="is-flex is-justify-content-center is-align-items-center">
			<h2 class="is-size-3">{{`${match.date} - ${match.stadium}`}}</h2>
		</div>
		<div class="is-flex is-justify-content-space-between has-text-centered">
			<div class="is-flex is-align-items-center">
				<img class="image is-rounded is-align-items-center is-32x32 mr-4" src="../../assets/placeholder.png"
					alt="Bandeira do Time">
				<h3 class="is-size-5">{{ homeTeam.name }}</h3>
			</div>
			<h3 class="is-size-3 is-centered">X</h3>
			<div class="is-flex is-align-items-center">
				<h3 class="is-size-5">{{ awayTeam.name }}</h3>
				<img class="image is-rounded is-align-items-center is-32x32 ml-4" src="../../assets/placeholder.png"
					alt="Bandeira do Time">
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IMatches from '@/interfaces/IMatches'
import ITeam from '@/interfaces/ITeam';
import http from '@/http';

export default defineComponent({
	name: "MatchesBoxComp",
	props: {
		match: {
			type: Object as PropType<IMatches>,
			required: true
		}
	},
	data() {
		return {
			teams: [] as ITeam[],
			homeTeam: "",
			awayTeam: ""
		}
	},
	methods: {
		async getHomeTeam() {
			try {
				const res = await http.get(`/teams/${this.match.home_team_id}`)
				console.log(res.data)
				this.homeTeam = res.data
			} catch (error) {
				console.error()
			}
		},
		async getAwayTeam() {
			try {
				const res = await http.get(`/teams/${this.match.away_team_id}`)
				console.log(res.data)
				this.awayTeam = res.data
			} catch (error) {
				console.error()
			}
		},
	},
	created () {
		this.getHomeTeam()
		this.getAwayTeam()
	}
})

</script>