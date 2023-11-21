<script lang="ts">
  import Modal from "./Modal/Modal.svelte"

	// export let handleModal:any;
  let showModal = false;

const handleModal = ()=> (showModal = !showModal);

</script>

<button on:click={handleModal} 
class="flex items-center gap-x-3 bg-color_pink2 px-2 py-1 rounded-lg font-dm-sans font-medium cursor-pointer select-none text-color_pink1"
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
<div class=" rounded-lg px-2 border-[1.4px] border-color_pink1 text-sm">Ctrl k</div>
</button>


<Modal bind:showModal>
  <h2 slot="header">
    modal
    <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
  </h2>

  <ol class="definition-list">
    <li>of or relating to modality in logic</li>
    <li>
      containing provisions as to the mode of procedure or the manner of taking effect —used of a
      contract or legacy
    </li>
    <li>of or relating to a musical mode</li>
    <li>of or relating to structure as opposed to substance</li>
    <li>
      of, relating to, or constituting a grammatical form or category characteristically indicating
      predication
    </li>
    <li>of or relating to a statistical mode</li>
  </ol>

  <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
</Modal>