<script lang="ts">
  import Modal from "./Modal/Modal.svelte";
  import Fuse from "fuse.js";
 
  interface Post {
    title: string;
    author: string;
    topic: string;
    description: string
  }

  export let posts:Post[] = [];
  let searches: Post[] = []; 

  let showModal = false;

  const options = {
    keys: ['title', 'description'],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  };

  let query = '';

  let fuse = new Fuse(posts, options);;

  function handleOnSearch(event:any) {
    query = event.target.value;
    if (query.length > 1) {
      searches = fuse.search(query).map((result:any) => result.item).slice(0, 5);
    } else {
      searches = [];
    }
  }


const handleModal = () => (showModal = !showModal);

</script>

<button
  on:click={handleModal}
  class="flex items-center gap-x-3 bg-color_pink2 px-2 py-1 rounded-lg font-dm-sans font-medium cursor-pointer select-none text-color_pink1 outline-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-4 h-4"
  >
    <path
      fill-rule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
      clip-rule="evenodd"
    />
  </svg>
  <p>Buscar</p>
  <div class=" rounded-lg px-2 border-[1.4px] border-color_pink1 text-sm">
    Ctrl k
  </div>
</button>

<Modal bind:showModal>
  <search  class="flex justify-between  items-center border-b py-2">
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5 text-gray-400 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="search"
        bind:value={query} 
        on:input={handleOnSearch}
        class=" w-full p-1 outline-none text-color_pink1 selection:text-color_pink1"
        placeholder="Buscar artículos"
      />
      <button   class="bg-color_pink2 rounded-md text-xs p-1 font-semibold text-color_pink1 flex items-center justify-center">ESC</button>
  </search>
  
  
  <section class="flex flex-col gap-y-3 my-3">
    

    {#if searches.length === 0 }
  <p class="py-5 border-b">No hay artículo a mostrar</p>
{:else}
{#each searches as topic }
<a href={`/blog/${topic.topic}`}>
  <article class="border-b hover:bg-color_pink2 cursor-default ease-in-out duration-200">
    <div class="relative">
     <h3 class="text-lg font-bold pr-5">{topic.title}</h3>
     <span class="top-0 absolute right-0 text-color_pink1 ">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width={2}
         stroke="currentColor"
         class="w-6 h-6"
       >
         <path
           stroke-linecap="round"
           stroke-linecap="round"
           d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
         />
       </svg>
     </span>
    </div>
     <p>{topic.description}</p>
  
   </article>
</a>
{/each}
{/if}
   
  </section>
</Modal>
