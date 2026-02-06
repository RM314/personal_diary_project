import EntryCard from "./EntryCard";


const EntryList = ({ onClick, entries }) => {

    return (
        <div className="mx-auto max-w-12xl p-4 grid gap-0 md:grid-cols-2 xl:grid-cols-3">
            {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} onClick={(event) => onClick(entry)} />
            ))}
        </div> );
};

export default EntryList;