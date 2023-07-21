<script>
    let open = false;
</script>

<div class="relative">
    <div on:click="{() => open = !open}">
        <slot name="trigger"/>
    </div>

{#if open}
    <div
            class="absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-right right-0"
            on:click="{() => open = false}">

        <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-700">
            <slot name="content"/>
        </div>
    </div>
    {/if}
</div>
