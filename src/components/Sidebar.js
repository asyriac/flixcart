const Sidebar = () => {
    return (
        <div className="sidebar sticky-sidebar pt-1">
            <fieldset className="mb-sm">
                <legend>Sort</legend>
                <div className="flex flex-col small-text">
                    <label className="pb-sm">
                        <input type="radio" name="sort" />
                        Low to high
                    </label>
                    <label className="pb-sm">
                        <input type="radio" name="sort" />
                        High to low
                    </label>
                </div>
            </fieldset>
            <fieldset className="mb-sm">
                <legend>Filter</legend>
                <div className="flex flex-col small-text">
                    <label className="pb-sm">
                        <input type="checkbox" />
                    Exclude out of stock
                </label>
                    <label className="pb-sm">
                        <input type="checkbox" />
                        Fast delivery only
                    </label>
                </div>
            </fieldset>
        </div>
    )
}

export default Sidebar;