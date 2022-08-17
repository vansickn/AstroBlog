
<script>
    export let title;
    export let toCopy;

    let showCopied = false;

    function copyToClipboard(){
        navigator.clipboard.writeText(toCopy);
        showCopied = true;
        setTimeout(()=>{showCopied = false}, 1500);
    }

</script>

<div class="container flex flex-col bg-[#282a36] rounded-xl shadow-xl selection:bg-white selection:text-fuchsia-900 not-prose">
  
  <div class="relative flex flex-row bg-[#282a36] p-2 rounded-xl items-center justify-end gap-5">

    <h1 class="pl-6 text-xs text-gray-200 font-mono absolute left-0">{title}</h1>

    <h1 class="{showCopied === true ? 'text-xs text-gray-200 font-mono opacity-100 transition duration-300' : 'text-xs text-gray-200 font-mono opacity-0 transition duration-300'}">Copied</h1>
    <svg on:click={copyToClipboard} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200 hover:text-gray-100 hover:scale-110 transition duration-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>

  </div>
  <div class="rounded-xl p-2 bg-[#282a36] shadow-xl">
      <slot />
  </div>

</div>