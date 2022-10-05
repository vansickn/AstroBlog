<script>
    import { Rive } from '@rive-app/canvas';
    import { onMount } from 'svelte';
    // import aboutMeAnimation from '.../public/portfolio_animations.riv';

    let canvas;
    let scroll;
    let canvasWidth = 4000;
    let canvasHeight = 2000;

    let hoveringOnAbout = false;


    // initialize r before I set it in the onMount function. Then, can access.
    var r = null;
    onMount(()=>{
        r = new Rive({
            src: "/aboutMeAnimation.riv",
            canvas: canvas,
            autoplay: true,
            stateMachines: 'orbit_state_machine', 
            artboard: 'solar_system',
            onLoad: (_) => {
                const inputs = r.stateMachineInputs('orbit_state_machine');
                const about_planet_hover = inputs.find(i => i.name === 'about_planet_hover');
                console.log(about_planet_hover);
            },
            onStateChange: (_) => {
              console.log("state changes");
            },
        });
    })

    // $: if (scroll > 400) {
    //     // 400 is a default value for now, in the future need to make calculate exact point.
    //     console.log(scroll);
    //     const inputs = r.stateMachineInputs('State Machine 1');
    //     const onVisible = inputs.find(i => i.name === 'onVisible');
    //     // start onVisible animation
    //     onVisible.value = true;
    // }

   

</script>


<svelte:window bind:scrollY={scroll}/>

<canvas id="retina-canvas" bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>

<style>

    /* #aboutMePlanet {
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
    } */

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