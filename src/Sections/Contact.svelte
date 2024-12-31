<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';

	let formData = $state({ name: '', email: '', message: '' });

	function sendEmail(e: SubmitEvent) {
		e.preventDefault();
		console.log(formData);
		console.log('email sent');
	}
</script>

<section
	id="contact"
	class="flex h-screen w-full flex-row items-center justify-center bg-custom-white-theme dark:bg-[#2a374a]"
>
	<div
		class=" absolute ml-5 mr-5 flex h-fit w-11/12 flex-col items-start justify-center bg-gray-100 shadow-2xl dark:bg-gray-900/90 md:w-fit"
	>
		<div class="absolute ml-5 hidden h-3/6 w-1.5 bg-[#d8b4fe] md:flex"></div>
		<div class="m-10 ml-6 flex w-10/12 flex-col md:ml-14 lg:w-auto lg:flex-row">
			<div class="w-full lg:w-5/12">
				<SectionHeader title="CONTACT ME" />
				<h2 class="w-full lg:w-4/5">
					Shoot me a message and I will get back to you as soon as I can. My emails are
					ngbobshoaun2000@gmail.com and bobshoaun.ng@mail.utoronto.ca
				</h2>
			</div>
			<form class="mt-5 flex w-full flex-col lg:mt-0 lg:w-7/12" onsubmit={sendEmail}>
				<input
					name="name"
					bind:value={formData.name}
					class="form__input"
					type="text"
					placeholder="Your name"
					required
				/>
				<input
					bind:value={formData.email}
					class="form__input"
					type="email"
					placeholder="Your email"
					required
				/>
				<textarea
					bind:value={formData.message}
					rows="10"
					class="form__input"
					placeholder="Tell me what you think!"
					required
				></textarea>
				<button class="button-glow drop-shadow-glow self-end rounded-sm bg-[#d8b4fe] px-3 py-2">
					<i class="fa-regular fa-paper-plane"></i>
					<span>Send</span>
				</button>
			</form>
		</div>
	</div>
</section>

<style>
	/* Target autofilled input and textarea */
	input:-webkit-autofill,
	textarea:-webkit-autofill {
		background-color: #2a374a !important; /* Match your background color */
		color: white !important; /* Match your text color */
		transition:
			background-color 5000s ease-in-out 0s,
			color 5000s ease-in-out 0s; /* Prevent autofill animation */
	}

	/* Default input and textarea styles */
	.form__input {
		margin-bottom: 1rem;
		background-color: #2a374a;
		padding: 0.5rem 1rem;
		border-radius: 2px;
		color: white; /* Text color */
	}

	.form__input::placeholder {
		left: 5px;
		top: 5px;
	}

	.button-glow {
		background-color: #d8b4fe;
		color: white;
		border: 2px solid #e6c6ff;
		padding: 0.5rem 1rem;
		transition: all 0.2s ease-in-out;
	}

	.button-glow:hover {
		transform: scale(1.05);
	}
</style>
