<script>
    import { Rive } from '@rive-app/canvas';
    import { onMount } from 'svelte';
    // import aboutMeAnimation from '.../public/portfolio_animations.riv';

    let canvas;

    let canvasWidth = 4000;
    let canvasHeight = 2000;

    onMount(()=>{
        const r = new Rive({
            src: "/aboutMeAnimation.riv",
            canvas: canvas,
            autoplay: true,
        });
        if(r){
            console.log(r);
        }
    })

   

</script>

<canvas id="retina-canvas" bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>

<style>

    #aboutMePlanet {
        animation: floating 6s ease-in-out 0s infinite;
    }

    #largeOutline {
         box-shadow: 120px 80px 40px 20px #0ff;
    }

    #inspectPlanetFrame {
        animation: fadeIn 0.5s ease-in 1s;
    }

    #planetNumberAbout {
        animation: fadeIn 0.5s ease-in 1s;
    }

    @keyframes floating {
    0% { transform: translate(0,  -1px); }
    50%  { transform: translate(0, 2px); }
    100%   { transform: translate(0, -1px); }   
	}

    @keyframes fadeIn {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

</style>