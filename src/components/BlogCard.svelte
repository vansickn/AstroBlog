<script>

    export let title;
    export let url;
    // export let date;
    // export let image;


</script>


<a href={url}>
<div class="container border-grey-200 border-2 rounded-xl w-full bg-grey-900 no-underline">

        <h2 id="post-title" class='m-0 mt-2 mb-4 ml-3 no-underline'>{title}</h2>

        
        
    </div>
</a>



<style>

    @font-face {
			font-family: FuturaBold;
			src: url('FuturaHeavyfont.ttf');
		}

		#post-title {
			font-family: FuturaBold;
			animation: slideFromTopFade;
			animation-duration: 800ms;
			animation-timing-function: ease-in-out;
            text-decoration-line: none;
		}

</style>