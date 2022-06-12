<script>
	import { page } from '$app/stores';

	let mobileOpen = false;
</script>

<nav class="bg-white shadow">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-20">
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<a on:click={() => (mobileOpen = false)} href="/">
						<img class="block h-12 w-auto" src="/Logo_PayOff.svg" alt="Workflow" />
					</a>
				</div>
				<div class="hidden sm:ml-12 sm:flex sm:space-x-8">
					<a
						href="/"
						class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
						class:border-basico-red={$page.url.pathname === '/'}
						class:font-bold={$page.url.pathname === '/'}
					>
						Home
					</a>
					<a
						href="/questions"
						class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
						class:border-basico-red={$page.url.pathname === '/questions'}
						class:font-bold={$page.url.pathname === '/questions'}
					>
						Questions
					</a>
					<a
						href="/sql"
						class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
						class:border-basico-red={$page.url.pathname === '/sql'}
						class:font-bold={$page.url.pathname === '/sql'}
					>
						SQL
					</a>
					<a
						href="/text"
						class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
						class:border-basico-red={$page.url.pathname === '/text'}
						class:font-bold={$page.url.pathname === '/text'}
					>
						Text
					</a>
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:flex sm:items-center" />
			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-basico-red"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (mobileOpen = !mobileOpen)}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Icon when menu is closed. -->
					<svg
						class="h-6 w-6"
						class:block={!mobileOpen}
						class:hidden={mobileOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<!-- Icon when menu is open. -->
					<svg
						class="hidden h-6 w-6"
						class:block={mobileOpen}
						class:hidden={!mobileOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" class:hidden={!mobileOpen} id="mobile-menu">
		<div class="pt-2 pb-3 space-y-1">
			<a
				on:click={() => (mobileOpen = !mobileOpen)}
				href="/"
				class="text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				class:bg-red-50={$page.url.pathname === '/'}
				class:border-basico-red={$page.url.pathname === '/'}
				class:text-red-700={$page.url.pathname === '/'}
			>
				Home
			</a>
			<a
				on:click={() => (mobileOpen = !mobileOpen)}
				href="/questions"
				class="text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				class:bg-red-50={$page.url.pathname === '/questions'}
				class:border-basico-red={$page.url.pathname === '/questions'}
				class:text-red-700={$page.url.pathname === '/questions'}
			>
				Questions
			</a>
			<a
				on:click={() => (mobileOpen = !mobileOpen)}
				href="/sql"
				class="text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				class:bg-red-50={$page.url.pathname === '/sql'}
				class:border-basico-red={$page.url.pathname === '/sql'}
				class:text-red-700={$page.url.pathname === '/sql'}
			>
				SQL
			</a>
			<a
				on:click={() => (mobileOpen = !mobileOpen)}
				href="/text"
				class="text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				class:bg-red-50={$page.url.pathname === '/text'}
				class:border-basico-red={$page.url.pathname === '/text'}
				class:text-red-700={$page.url.pathname === '/text'}
			>
				Text
			</a>
		</div>
	</div>
</nav>
