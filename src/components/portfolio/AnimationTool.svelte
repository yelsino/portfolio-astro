

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { getTools } from "./server"; 

  const tools = getTools();
  let activeImages:any = []; // Lista de imágenes activas
  let activateAll = true; // Indica si deben activarse todas las imágenes

  const toggleImages = () => {
    if (activateAll) {
      // Activar aleatoriamente una imagen que esté desactivada
      const inactiveImages = Object.keys(tools).filter(
        (key) => !activeImages.includes(key)
      );
      if (inactiveImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * inactiveImages.length);
        const randomKey = inactiveImages[randomIndex];
        const imgElement = document.getElementById(randomKey);

        if (imgElement !== null) {
          imgElement.classList.remove("grayscale-opaque");
          activeImages.push(randomKey);
        } else {
          console.error(`Elemento con ID ${randomKey} no encontrado.`);
        }
      } else {
        activateAll = false; // Todas las imágenes están activas, cambiar a apagar
      }
    } else {
      // Desactivar aleatoriamente una imagen activa
      if (activeImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * activeImages.length);
        const randomKey = activeImages[randomIndex];
        const imgElement = document.getElementById(randomKey);

        if (imgElement !== null) {
          imgElement.classList.add("grayscale-opaque");
          activeImages.splice(randomIndex, 1);
        } else {
          console.error(`Elemento con ID ${randomKey} no encontrado.`);
        }
      } else {
        // Todas las imágenes están apagadas, cambiar a activar de nuevo
        activateAll = true;
        activeImages = [];
      }
    }
  };

  onMount(() => {
    const interval = setInterval(toggleImages, 500); // 
    onDestroy(() => {
      clearInterval(interval);
    });
  });
</script>


<div class="flex flex-wrap gap-x-5 gap-y-2 max-w-md mx-14  w-full place-content-center">
  <!-- hola -->
  {#each Object.entries(tools) as [key, tool]}
    <div title={tool.text}  class="w-12 h-12 flex justify-center items-center overflow-hidden">
      <img id={key} src={tool.url} alt={tool.alt} class="object-contain  grayscale-opaque" width="91%" />
    </div>
  {/each}
</div>



<style>
	/* Aplicar filtro de escala de grises con opacidad */
	.grayscale-opaque {
    filter: grayscale(100%) opacity(0.2); 
  transition: filter 0.3s ease-in-out, opacity 0.5s ease-in-out; 
	}

	/* Eliminar el filtro al hacer hover sobre la imagen */
	.grayscale-opaque:hover {
		filter: none;
	}

	.tippy-box[data-theme~='tomato'] {
  background-color: tomato;
  font-weight: 700;
  color: yellow;
}
</style>