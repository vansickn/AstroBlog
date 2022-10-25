<script>
  import { bind } from "svelte/internal";

    let screenWidth;
    let screenHeight;

</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}></svelte:window>

<!-- <body class="m-auto"> -->

<!-- width div -->
  <div id="main-area" class="w-full sm:h-800 justify-center items-center m-auto relative block"> 


    <img id="sun" src="/avatar.png" alt="avatar" class="w-48 m-auto bg-yellow-500 rounded-full">
    <a href="/about">
        <div id="inner" class="bg-gradient-to-l from-blue-500 to-blue-300 h-14 w-14 rounded-full hidden sm:inline">
    
          <div class="bg-gradient-to-l from-gray-900 to-gray-700 w-5/6 h-5/6 rounded-full left-0 right-0 top-0 bottom-0 m-auto absolute"></div>
          <div id="aboutIcon" class="w-full h-full m-auto text-white relative block">
    
            <svg id="aboutIconSVG" class="w-2/4 h-2/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
            </svg>
            <!-- aboutIcon -->
          </div> 
          <!-- inner -->
        </div>
    </a>
    
    <a href="/testing">
        <div id="middle" class="bg-gradient-to-t from-yellow-700 to-yellow-300 h-16 w-16 rounded-full hidden sm:inline">
          <div class="bg-gradient-to-t from-gray-900 to-gray-700 w-5/6 h-5/6 rounded-full left-0 right-0 top-0 bottom-0 m-auto absolute"></div>
          <div id="workIcon" class="w-full h-full m-auto text-white relative block">
            <svg id="workIconSVG" class="w-1/2 h-1/2 inset-0 m-auto absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <!-- workIcon -->
          </div>
          <!-- middle -->
        </div>
    </a>

    <a href="/blog">
        <div id="outer" class="bg-gradient-to-b from-red-700 to-red-300 w-20 h-20 rounded-full hidden sm:inline">
          <div class="bg-gradient-to-b from-gray-900 to-gray-700 w-5/6 h-5/6 rounded-full left-0 right-0 top-0 bottom-0 m-auto absolute"></div>
          <div id="blogIcon" class="w-full h-full m-auto text-white relative block">
            <svg id="blogIconSVG" class="w-4/6 h-4/6 inset-0 left-2 bottom-1 m-auto absolute" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
              <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
            </svg>
            <!-- blogIcon -->
          </div>
          <!-- outer -->
        </div>
    </a>


  <!-- <div id="innerOrbit" class="border-2 inset-0 absolute m-auto rounded-full"></div>
  <div id="middleOrbit" class="border-2 inset-0 absolute m-auto rounded-full"></div>
  <div id="outerOrbit" class="border-2 inset-0 absolute m-auto rounded-full"></div> -->
  </div>

<!-- </body> -->
<style>

    #inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  animation: OrbitInner;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 4;

  /*   box-shadow: 0px 0px 20px 0px #93c5fd; */
  /* in order: x offset, y offset, blur size, spread size, color */
}

#inner:hover {
  cursor: "select";
  animation-play-state: paused;
}

#innerOrbit {
  width: 100px;
  height: 100px;
  opacity: 50%;
}
#middleOrbit {
  width: 300px;
  height: 300px;
  opacity: 50%;
}
#outerOrbit {
  width: 500px;
  height: 500px;
  opacity: 50%;
}

#middle {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  animation: OrbitMiddle;
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 3;
  /*   box-shadow: 0px 0px 20px 0px #fde047; */
  /* Note: I have omitted the vendor prefix code for sake of brevity */
  /*   transform: rotate(45deg) translateX(150px) rotate(-45deg); */
}

#middle:hover {
  cursor: "select";
  animation-play-state: paused;
}

#outer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  animation: OrbitOuter;
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 2;
  /*   box-shadow: 0px 0px 20px 0px #ef4444; */
  /* Note: I have omitted the vendor prefix code for sake of brevity */
  /*   transform: rotate(45deg) translateX(150px) rotate(-45deg); */
}

#outer:hover {
  cursor: pointer;
  animation-play-state: paused;
}

#sun {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  box-shadow: 0px 0px 30px 10px #eab308;
  /*   width: 100px; Need a specific value to work */
  /*   left: 10px; */
}

#aboutIcon {
  animation: aboutIconRotate 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#aboutIcon:hover {
  animation-play-state: paused;
  cursor: pointer;
}

#workIcon:hover {
  animation-play-state: paused;
  cursor: pointer;
}
#blogIcon:hover {
  animation-play-state: paused;
  cursor: pointer;
}

#aboutIconSVG {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#workIcon {
  animation: aboutIconRotate 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#blogIcon {
  animation: aboutIconRotate 35s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#main-area {
    animation: fadeIn 3s;
}

@keyframes OrbitInner {
  from {
    transform: rotate(0deg) translateX(140px);
  }
  to {
    transform: rotate(360deg) translateX(140px);
  }
}

@keyframes aboutIconRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes OrbitMiddle {
  from {
    transform: rotate(0deg) translateY(200px);
  }
  to {
    transform: rotate(360deg) translateY(200px);
  }
}

@keyframes OrbitOuter {
  from {
    transform: rotate(0deg) translateY(-275px);
  }
  to {
    transform: rotate(360deg) translateY(-275px);
  }
}

@keyframes fadeIn {
    0%{
        opacity: 0%;
        scale: 75%;
    }
    100%{
        opacity: 100%;
        scale: 100%;
    }
}


</style>