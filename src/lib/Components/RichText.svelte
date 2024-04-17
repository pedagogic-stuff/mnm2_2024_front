<script>
    export let blocks = [];
</script>


{#if blocks }
    {#each blocks as block}

        {#if block.type === "paragraph" }
            <p>
                {#each block.children as child}
                    {#if child.bold  }
                        <span class="bold">{@html child.text}</span>
                    {:else}
                        {@html child.text}
                    {/if}
                {/each}
            </p>
        {:else if block.type === "heading" }
            {#each block.children as child}
                {#if child.type === "text" }
                    {#if block.level === 1}
                        <h1>{@html child.text}</h1>
                    {:else if block.level === 2}
                        <h2>{@html child.text}</h2>
                    {:else if block.level === 3}
                        <h3>{@html child.text}</h3>
                    {/if}
                {/if}
            {/each}

        {/if}
    {/each}
{/if}
<style>


    h1, h2, h3 {
        color: inherit;
    }
    h2 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
    .bold {
        font-weight: 900;
    }
</style>