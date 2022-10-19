<script>

    export let title;
    export let url;
    // export let date;
    export let heroImage;
    export let description;


</script>


<a href={url} class="container border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 no-underline flex flex-row hover:scale-105 transition duration-500 w-full sm:w-3/4">
<!-- <div class="container border-gray-800 border-2 rounded-xl bg-gradient-to-br from-gray-900 bg-gray-800 no-underline flex flex-row hover:scale-105 transition transition-duration-1000 w-full sm:w-3/4"> -->
        <img src={heroImage} class="w-1/2 m-0 rounded-xl object-cover" alt="">
        <div class="container flex flex-col ">
            <h4 id="post-title" class='m-0 ml-4 mt-4 text-lg sm:text-2xl'>{title}</h4>
            <p id="post-title" class="m-0 ml-4 mt-1 text-gray-400 text-xs sm:text-base hidden sm:inline">{description}</p>
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