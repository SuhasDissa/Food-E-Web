<script>
    export let searchTerm;
</script>

<input
    bind:value={searchTerm}
    on:input
    type="text"
    placeholder="Search.."
    class="leading-5 w-full py-2 px-3 focus:outline-none border-solid border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gray-500 dark:focus:border-indigo-600 focus:ring focus:ring-gray-300 dark:focus:ring-gray-300 rounded-lg shadow-sm {$$props.class}"
/>
