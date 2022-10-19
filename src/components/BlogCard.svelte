<script>

    export let title;
    export let url;
    // export let date;
    export let heroImage;
    export let description;
    export let characterCount;

    function lengthOfPostInMinutes(){
        console.log(characterCount);
        if(characterCount != null){
            return Math.ceil(characterCount / 265);
        }
        else {
            return null
        }
    }


</script>


<a href={url} class="grid grid-cols-1 md:grid-cols-2 border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 hover:scale-105 transition duration-500 w-full lg:w-4/6 sm:pb-0 pb-4 overflow-hidden">
<!-- <div class="container border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 no-underline flex flex-row hover:scale-105 transition transition-duration-1000 w-full sm:w-3/4"> -->
        <img src={heroImage} class="m-0 rounded-xl object-cover" alt="">
        <div class="container flex flex-col ">
            <h4 id="post-title" class='m-0 ml-4 mr-4 mt-4 text-lg sm:text-2xl'>{title}</h4>
            {#if characterCount != null}
            <h2 id="post-title" class='m-0 ml-4 mr-4 sm:text-sm text-xs text-gray-400'>{lengthOfPostInMinutes()} minute read</h2>
            {/if}
            <p id="post-title" class="m-0 ml-4 mr-4 mt-4 text-sm md:text-base sm:text-lg">{description}</p>
        </div>
    <!-- </div> -->
</a>



<style>

    @font-face {
			font-family: FuturaBold;
			src: url('FuturaHeavyfont.ttf');
		}

		#post-title {
			font-family: FuturaBold;
		}
    a:link {
        text-decoration: none;
    }

</style>