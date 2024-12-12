<script lang="ts">
	import { onMount } from 'svelte';
	import { bounceIn, bounceOut, cubicOut, elasticOut, expoOut, quartOut } from 'svelte/easing';
    import {fade, fly, scale} from 'svelte/transition'

    let BUTTONS = ['about', 'skills', 'experience', 'contact', 'resume']
    let buttonsVisible = $state(false);
    onMount(() => {
    // set buttons to visible when component mounts.
    buttonsVisible = true;

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollPos = window.scrollY;
    const navbar = document.getElementById("navbar");
    if(navbar){
        window.onscroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos)
            navbar.style.transform = "translateY(0)";
        else navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;

        prevScrollPos = currentScrollPos;
    };

    // show navbar when hover over
    onmousemove = (e) => {
        if (e.clientY < navbar.offsetHeight)
            navbar.style.transform = "translateY(0)";
    };
    }
    
  });

     // Custom 3D "fly-in" and "scale" transition function
    function flyAndScale(
        node: HTMLElement,
        { delay = 0, duration = 500, easing = cubicOut, scaleStart = 0 }
    ) {
        return {
            delay,
            duration,
            easing,
            css: (t: number) => `
                transform: scale(${scaleStart + t * (1 - scaleStart)}) translateZ(${(1 - t) * 100}px);
         
            `,
        };
    }
</script>

<nav id="navbar" class="flex items-center gap-4 px-6 lg:px-10 top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blue-md shadow-md fixed w-full z-50">
    
    <img class="w-10 h-10" src="assets\images\Jlogo.jpg" alt="Jimmy Van Logo">
     <a href="/#home" data-aos="flip-up" class="nav-text-home">Jimmy Van</a>

    <div  class="ml-auto">
        {#each BUTTONS as button, index}
            {#if buttonsVisible}
                <button 
                    transition:flyAndScale="{{ duration: 500 + index * 100, delay: index * 100 }}"
                    class="m-5 capitalize">
                    <span>{button}</span>
                </button>   
            {/if}
        {/each}
    </div>
       
  
</nav>

<style>
    #navbar {
        transition: transform 0.3s; /* Transition effect when sliding down (and up) */
    }
</style>