<script lang="ts">
    import type { Additive } from "$lib/server/database/types";
    import Header from "../../components/Header.svelte";
    import Search from "../../components/Search.svelte";
    export let data: { additives: Additive[] };
    let additives = data.additives;

    let searchTerm = "";
    let filteredAdditives = [];

    function searchAdditives() {
        filteredAdditives = additives.filter((additive) => {
            let title = additive.title.toLowerCase();
            let e_code = additive.e_code.toLocaleLowerCase();
            return (
                title.includes(searchTerm.toLowerCase()) ||
                e_code.includes(searchTerm.toLowerCase())
            );
        });
    }
</script>

<Header>
    <div class="flex flex-row items-center justify-between">
        <a
            href="./"
            class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
        >
            All Additives
        </a>
        <div class="flex flex-row items-center">
            <Search
                bind:searchTerm
                on:input={searchAdditives}
                class="mt-1 block w-full"
            />
        </div>
    </div>
</Header>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">
    {#each searchTerm.length == 0 ? additives : filteredAdditives as additive}
        <div class="p-4">
            <a href="additive/{additive.id}">
                <div class="additive-card">
                    <p class="title">
                        {additive.title}
                    </p>
                    <p class="subtitle">{additive.e_code}</p>
                </div>
            </a>
        </div>
    {/each}
</div>
