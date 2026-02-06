const EntryDetails = ({ entry, constrained = true, disabled, onDetails } ) => {
console.log("EntryDetails disabled =", disabled);
    return (
    <div className={constrained ? "max-w-3xl mx-auto" : ""} >
        <div className="p-6 overflow-hidden">
            <h1 style={{fontFamily: "'Caveat', 'Indie Flower', 'Kalam', cursive"}} className="text-3xl font-semibold mb-4"> {entry.title} </h1>
            <div className="italic text-gray-600 text-sm mb-3"> {entry.date} </div>

            <div className="flex flex-col md:flex-row md:gap-3 md:items-start overflow-hidden">
                {(entry.imageUrl) &&
                (<div className="md:w-1/3 pt-2 shrink-0 ">
                    <img src={entry.imageUrl} alt={entry.date} className="w-full h-auto rounded-lg shadow-md "/>
                </div>)}
                <div className={`${entry.imageUrl ? "md:w-2/3" : ""} flex flex-col`}>
                    <div className="leading-relaxed overflow-hidden line-clamp-6">
                        {entry.content}
                    </div>
                </div>

            </div>
           <div className="mt-4 flex gap-3">

           {(!disabled) &&
            (<button
                 onClick={onDetails}
                className="btn btn-warning" >
                Details
            </button>)
           }

                        <button className="btn btn-primary" > Edit   </button>
                        <button className="btn btn-danger"  > Delete </button>
            </div>
        </div>
    </div>
    );
};

export default EntryDetails;
