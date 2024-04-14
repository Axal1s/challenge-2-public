export default function SortSearchFilter({
  categories,
  search,
  setSearch,
  sort,
  setSort,
  filter,
  setFilter,
}) {
  const searchHandle = (event) => {
    setSearch(event.target.value);
  };
  return (
    <section className="flex flex-row justify-center items-center w-full gap-2">
      <div className="w-1/2">
        <form action="" className="flex flex-row justify-center w-1/2 gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered  input-secondary w-3/4"
            value={search}
            onChange={searchHandle}
          />
        </form>
      </div>
      <div className="w-1/8">
        <select
          className="select select-secondary w-full"
          defaultValue={""}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        >
          <option value={""}>Filter</option>
          {categories.map((el, index) => {
            return (
              <option key={index} value={el.id}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-1/8">
        <select
          className="select select-secondary w-full"
          defaultValue={""}
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option value={""}>Sort</option>
          <option value={"name"}>Name</option>
          <option value={"-price"}>Highest Price</option>
          <option value={"price"}>Lowest Price</option>
        </select>
      </div>
    </section>
  );
}
