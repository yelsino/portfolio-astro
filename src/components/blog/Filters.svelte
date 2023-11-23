<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { getFilters } from "./server";

  const dispatch = createEventDispatcher();

  const filters = getFilters();

  let selectedOption: any = {
    name: "muestra todo",
    id: "1",
  };

  function handleChange(event: any) {
    const selectedId = parseInt(event.target.value);
    selectedOption = filters.find((filter) => Number(filter.id) === selectedId);
    dispatch("change", selectedOption);
  }
</script>

<div class="mb-3 gap-3 flex flex-wrap">
  {#each filters as filter}
    <label for={filter.id} class="flex items-center cursor-pointer">
      <input
        type="radio"
        id={filter.id}
        value={filter.id}
        on:change={handleChange}
        name="filters"
        bind:group={selectedOption.id}
        class="sr-only"
      />
      <span
        class="  font-semibold text-lg text-gray-500"
      >
        {filter.name}
      </span>
      <!-- <span
        class="px-2 py-1 rounded-full border-2 border-color_pink1 hover:bg-color_pink2 hover:border-color_pink1
          {selectedOption.id === filter.id
          ? 'bg-color_pink2 text-color_pink1 '
          : 'bg-white'}"
      >
        {filter.name}
      </span> -->
    </label>
  {/each}
</div>
