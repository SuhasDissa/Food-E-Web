<script lang="ts">
    export let data;
    import Header from "../../components/Header.svelte";
</script>

<Header>
    <div class="flex flex-row items-center justify-between">
        <a
            href="#additiveIndex"
            class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
        >
            Statistics
        </a>
    </div>
</Header>
<div class="flex flex-col p-6">
    <p class="text-xl sm:text-3xl fond-bold text-gray-950 dark:text-gray-200">
        Additive Statistics
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Total Additives
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.all}
            </p>
        </div>
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Halal Additives
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.halal}
            </p>
        </div>
    </div>
    <p class="text-xl sm:text-3xl fond-bold text-gray-950 dark:text-gray-200">
        Additive Health Rating
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4">
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Good
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.good}
            </p>
        </div>
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Normal
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.normal}
            </p>
        </div>
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Bad
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.bad}
            </p>
        </div>
        <div
            class="p-4 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        >
            <p
                class="text-lg sm:text-xl font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            >
                Unknown
            </p>
            <p class="text-4xl text-gray-600 dark:text-gray-200 text-end">
                {data.statistics.unknown}
            </p>
        </div>
    </div>
</div>
