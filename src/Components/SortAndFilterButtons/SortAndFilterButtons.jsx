export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}

      <button onClick={ handleSort() } className="sortByTitleAsc">sortByTitleAsc</button>
      <button onClick={ handleSort() }  className="sortByTitleDesc">sortByTitleDesc</button>
      <button onClick={ handleSort() }  className="sortByPriceAsc">sortByPriceAsc</button>
      <button onClick={ handleSort() }  className="sortByPriceDesc">sortByPriceDesc</button>
    </div>
  );
};
