<script lang="ts">
    import Header from "../../../components/Header.svelte";
    import type { Additive } from "$lib/server/database/types";
    import LinkButton from "../../../components/LinkButton.svelte";
    export let data: { additive: Additive };
    let additive: Additive = data.additive;
    let auth = false;
</script>

<Header>
    <div class="flex flex-row items-center justify-between">
        <h2
            class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
        >
            {additive.e_code}
        </h2>
        {#if auth}
            <LinkButton href="#">Edit</LinkButton>
        {/if}
    </div>
</Header>

<div class="flex flex-col justify-center pt-6 max-w-7xl mx-auto">
    <div class="p-4 flex flex-col sm:flex-row">
        <div
            class="mx-2 py-2 w-full flex flex-row sm:mr-4 justify-between rounded-lg items-center shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800"
        >
            <p
                class="text-xl p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                {additive.title}
            </p>
            <p class="text-lg p-4 text-gray-600 dark:text-gray-200">
                {additive.e_code}
            </p>
        </div>
        <div
            class="mx-2 py-2 w-full flex flex-row mt-8 sm:mt-0 sm:ml-4 justify-between rounded-lg items-center shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800"
        >
            <p
                class="text-xl p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Additive Type
            </p>
            <p class="text-lg p-4 text-gray-600 dark:text-gray-200">
                {additive.e_type}
            </p>
        </div>
    </div>
    <div class="p-4 flex flex-col sm:flex-row">
        <div
            class="mx-2 py-2 w-full flex flex-row sm:mr-4 justify-between rounded-lg items-center shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800"
        >
            <p
                class="text-xl p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Halal Status
            </p>
            <p class="text-lg p-4 text-gray-600 dark:text-gray-200">
                {#if additive.halal_status == 1}
                    Halal
                {:else}
                    Doubtful
                {/if}
            </p>
        </div>
        <div
            class="mx-2 py-2 w-full flex flex-row mt-8 sm:mt-0 sm:ml-4 justify-between rounded-lg items-center shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800"
        >
            <p
                class="text-xl p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Health Rating
            </p>
            <p class="p-2 text-gray-600 dark:text-gray-200">
                {#if additive.health_rating == 1}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 -960 960 960"
                        width="48"
                        ><path
                            fill="currentColor"
                            d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
                        /></svg
                    >
                {:else if additive.health_rating == 2}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 -960 960 960"
                        width="48"
                        ><path
                            fill="currentColor"
                            d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
                        /></svg
                    >
                {:else if additive.health_rating == 3}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 -960 960 960"
                        width="48"
                        ><path
                            fill="currentColor"
                            d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
                        /></svg
                    >
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 -960 960 960"
                        width="48"
                        ><path
                            fill="currentColor"
                            d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z"
                        /></svg
                    >
                {/if}
            </p>
        </div>
    </div>
    <div class="p-4 flex">
        <div
            class="mx-2 py-2 w-full items-center rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800"
        >
            <p
                class="text-xl p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Description
            </p>
            <p class="text-lg p-4 text-gray-600 dark:text-gray-200">
                {additive.info}
            </p>
        </div>
    </div>
</div>
