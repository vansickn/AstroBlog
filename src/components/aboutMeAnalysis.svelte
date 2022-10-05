<script>
    import { Rive } from '@rive-app/canvas';
    import { onMount } from 'svelte';
    // import aboutMeAnimation from '.../public/portfolio_animations.riv';

    let canvas;
    let scroll;
    let canvasWidth = 2000;
    let canvasHeight = 1000;

    let hoveringOnVisit = false;

    function handleClick(){
        console.log("Function Fired");
        if(hoveringOnVisit){
            console.log("Can travel");
            location.href = "/about";
        }else{
            console.log("Cannot Travel"); 
        }
    }

    function handleScroll(){
        console.log(scroll);
        console.log("onScroll");
    }

    // initialize r before I set it in the onMount function. Then, can access.
    var r = null;
    onMount(()=>{
        r = new Rive({
            src: "/aboutMeAnimation.riv",
            canvas: canvas,
            autoplay: true,
            artboard: 'about_me_card',
            stateMachines: 'State Machine 1', 
            onLoad: (_) => {
                const inputs = r.stateMachineInputs('State Machine 1');
                const onVisible = inputs.find(i => i.name === 'onVisible');
            },
            onStateChange: (_) => {
                console.log("Changed State");
                const inputs = r.stateMachineInputs('State Machine 1');
                const onVisitedHover = inputs.find(i => i.name === 'onVisitPlanetHover');
                if(onVisitedHover.value){
                    hoveringOnVisit = true;
                    document.getElementById("retina-canvas").style.cursor = 'pointer';
                }else{
                    hoveringOnVisit = false;
                    document.getElementById("retina-canvas").style.cursor = 'default';
                }

            }
        });
    })

    $: if (scroll > 400) {
        // 400 is a default value for now, in the future need to make calculate exact point.
        console.log(scroll);
        const inputs = r.stateMachineInputs('State Machine 1');
        const onVisible = inputs.find(i => i.name === 'onVisible');
        // start onVisible animation
        onVisible.value = true;
    }

   

</script>


<svelte:window bind:scrollY={scroll}/>

<canvas id="retina-canvas" on:scroll={handleScroll} on:click={handleClick} bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>

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