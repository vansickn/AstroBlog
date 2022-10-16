<script>
    import { Rive } from '@rive-app/canvas';
    import { onMount } from 'svelte';
    // import aboutMeAnimation from '.../public/portfolio_animations.riv';

    let canvas;
    let scroll;
    let canvasWidth = 2000;
    let canvasHeight = 1000;


    // initialize r before I set it in the onMount function. Then, can access.
    var r = null;
    onMount(()=>{
        r = new Rive({
            src: "/aboutMeAnimation.riv",
            canvas: canvas,
            autoplay: true,
            stateMachines: 'orbit_state_machine', 
            animations: [
              'inner_orbit_rotate',
              'about_planet_rotate',
              'outer_orbit_rotate',
              'blog_planet_rotate',
              'middle_orbit_rotate',
              'work_planet_rotate'
            ],
            artboard: 'solar_system',
            onLoad: (_) => {
                // const inputs = r.stateMachineInputs('orbit_state_machine');
                // const about_planet_hover = inputs.find(i => i.name === 'about_planet_hover');
                // console.log(about_planet_hover);
                console.log(r);
            },
            onStateChange: (_) => {
              console.log("state changes");
            },
            
        });
    })

    let hoveringOnAbout = false;
    let hoveringOnWork = false;
    let hoveringOnBlog = false;

    function handleHover(){
      const inputs = r.stateMachineInputs('orbit_state_machine');
      const about_planet_hover = inputs.find(i => i.name === 'about_planet_hover');
      const blog_planet_hover = inputs.find(i => i.name === 'blog_planet_hover');
      const work_planet_hover = inputs.find(i => i.name === 'work_planet_hover');
      // about planet
      if (about_planet_hover.value == true){
        r.pause('inner_orbit_rotate');
        document.getElementById("retina-canvas-orbit").style.cursor = 'pointer';
        hoveringOnAbout = true;
      }else if(blog_planet_hover.value == true){
        r.pause('outer_orbit_rotate');
        document.getElementById("retina-canvas-orbit").style.cursor = 'pointer';
        hoveringOnBlog = true;
      }else if(work_planet_hover.value == true){
        r.pause('middle_orbit_rotate');
        document.getElementById("retina-canvas-orbit").style.cursor = 'pointer';
        hoveringOnWork = true;
      }
      else{
        r.play('inner_orbit_rotate');
        r.play('outer_orbit_rotate');
        r.play('middle_orbit_rotate');
        document.getElementById("retina-canvas-orbit").style.cursor = 'default';
        hoveringOnAbout = false;
        hoveringOnBlog = false;
        hoveringOnWork = false;
      }
    }
    
    function handleClick(){
        if(hoveringOnAbout){
            location.href = "/about";
        }else if(hoveringOnBlog){
            location.href = "/blog";
        }else if(hoveringOnWork){
            location.href = "/testing";
        }
        else{
            console.log("Cannot Travel"); 
        }
    }
   

</script>


<svelte:window bind:scrollY={scroll}/>

<canvas id="retina-canvas-orbit" on:click={handleClick} on:mousemove={handleHover} bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>

<style>


</style>