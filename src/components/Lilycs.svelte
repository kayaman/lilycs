<script lang="ts">
    const { artist, lyrics } = $props();
</script>

<article class="flex flex-col bg-slate-50 pt-2">
    <h2 class="pl-2 pt-1">{lyrics}</h2>
    <p class="self-end pb-2 pr-4">~~{artist}</p>
</article>