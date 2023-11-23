<script lang="ts">
  import { onMount } from "svelte";
  let activeMenu: string = "Inicio";

  onMount(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + scrollPosition - 130;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = section.getAttribute("id");
          activeMenu = sectionId ?? "";
          window.history.replaceState(null, "", "#" + sectionId);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });


</script>

<nav class="w-full fixed max-w-5xl mx-auto py-3  z-30 flex justify-between items-center px-10 sm:px-20  bg-white font-kodchasan">
  <ul class=" gap-x-3 flex  group-hover:flex-col ">
    <li class="block  text-black font-semibold">
      <a href="#Inicio">{activeMenu}</a>
    </li>
   
  </ul>
  <div class="flex gap-x-3 items-center">
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
      />
    </svg> -->
    <a
      href="/blog"
      class="text-color_pink1 hover:bg-color_pink2 bg-pink-50 rounded-full px-6 py-3 ease-in-out duration-300 font-kodchasan font-bold  "
    >Blog</a>
  </div>
</nav>