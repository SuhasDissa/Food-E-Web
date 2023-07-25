<script>
    let open = false;
    import AppLogo from "./AppLogo.svelte";
    import Dropdown from "./Dropdown.svelte";
    import DropdownLink from "./DropdownLink.svelte";
    let auth = false;
</script>

<nav>
    <div
        class="z-20 fixed top-0 left-0 right-0 bg-white/75 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 backdrop-blur-md"
    >
        <!-- Primary Navigation Menu -->
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Hamburger -->
                    <div class="pl-2 pr-4 flex items-center sm:hidden">
                        <button
                            on:click={() => (open = !open)}
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                        >
                            {#if open}
                                <span class="material-symbols-rounded">
                                    menu_open
                                </span>
                            {:else}
                                <span class="material-symbols-rounded">
                                    menu
                                </span>
                            {/if}
                        </button>
                    </div>
                    <!-- Logo -->
                    <a href="/additives" class="flex items-center pl-2">
                        <AppLogo class="block h-9 w-auto" />
                        <p
                            class="text-2xl sm:text-3xl text-black dark:text-white"
                        >
                            Food E
                        </p>
                    </a>
                </div>

                {#if auth}
                    <!-- Settings Dropdown -->
                    <div class="flex items-center ml-6">
                        <Dropdown>
                            <button
                                slot="trigger"
                                class="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-full focus:outline-none"
                            >
                                <div
                                    class="w-12 h-12 rounded-full hover:rounded-lg overflow-hidden"
                                >
                                    <img
                                        src="https://avatars.githubusercontent.com/SuhasDissa?size=128"
                                        alt=""
                                    />
                                </div>
                            </button>
                            <div slot="content">
                                <DropdownLink href="/profile">
                                    Profile
                                </DropdownLink>

                                <!-- Authentication -->
                                <form method="POST" action="logout">
                                    <DropdownLink
                                        href="/logout"
                                        onclick="event.preventDefault();
                                            this.closest('form').submit();"
                                    >
                                        Log Out
                                    </DropdownLink>
                                </form>
                            </div>
                        </Dropdown>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <aside
        class="{open
            ? 'translate-x-0'
            : '-translate-x-full'} h-full fixed left-0 top-0 pt-16 w-64 z-10 transition-transform sm:translate-x-0 border-r border-gray-100 dark:border-gray-700"
        aria-label="Sidebar"
    >
        <div
            class="h-full px-4 py-6 overflow-y-auto bg-gray-50 dark:bg-gray-800"
        >
            <ul class="space-y-2 font-medium">
                <li>
                    <a
                        href="/additives"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <span class="material-symbols-rounded">
                            nutrition
                        </span><span class="flex-1 ml-3 whitespace-nowrap"
                            >All Additives</span
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="/statistics"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <span class="material-symbols-rounded">
                            analytics
                        </span>
                        <span class="ml-3">Statistics</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</nav>
