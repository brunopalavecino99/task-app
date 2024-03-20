import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = () => {
return (
  <div>
    <FiltersContainer>
        <ItemsLeft />
        <FilterButtonContainer>
            <FilterButton action={()=>{}} active="All" filter='All' />
            <FilterButton action={()=>{}} active="All" filter='Active' />
            <FilterButton action={()=>{}} active="All" filter='Completed' />
        </FilterButtonContainer>
    </FiltersContainer>
  </div>

)
}

export { TodoFilters }