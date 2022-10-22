<script>
    import Tag from '../components/tag.svelte';

    // props
    export let title;
    export let url;
    // export let date;
    export let heroImage;
    export let description;
    export let characterCount;
    export let tags;

    function lengthOfPostInMinutes(){
        if(characterCount != null){
            return Math.ceil(characterCount / 265);
        }
        else {
            return null
        }
    }
    console.log(tags);


</script>


<a href={url} class="container flex flex-col md:flex-row md:grid-cols-2 border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 hover:scale-105 transition duration-500 w-full lg:w-4/6 sm:pb-0 pb-4 overflow-hidden h-auto md:max-h-64">
<!-- <div class="container border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 no-underline flex flex-row hover:scale-105 transition transition-duration-1000 w-full sm:w-3/4"> -->
        <img src={heroImage} class="md:w-1/2 w-full m-0 rounded-xl rounded-r-none object-cover" alt="">
        <div class="container flex flex-col ">
            <h4 id="post-title" class='m-0 ml-4 mr-4 mt-4 text-lg sm:text-2xl'>{title}</h4>
            {#if characterCount != null}
            <h2 id="post-title" class='m-0 ml-4 mr-4 sm:text-sm text-xs text-gray-400'>{lengthOfPostInMinutes()} minute read</h2>
            {/if}
            <p id="post-title" class="m-0 ml-4 mr-4 mt-4 mb-2 lg:mb-0 text-sm md:text-base sm:text-lg">{description}</p>


            {#if tags != undefined}
            <div id="post-title" class=" pl-4 pr-4 mt-auto mb-1 sm:mb-2 container flex flex-row gap-2 flex-wrap justify-start">
                {#each tags || '' as tag}
                    <Tag title={tag}></Tag>
                {/each}
            </div>
            {/if}
        </div>
        <!-- <div class="not-prose container flex flex-row gap-2 flex-wrap justify-start">
					{tags && tags.map((tag) => (
						<Tag title={tag}></Tag>
					))}
				</div> -->
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