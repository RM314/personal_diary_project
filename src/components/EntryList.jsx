import EntryCard from "./EntryCard";


const EntryList = ({ onClick, entries }) => {

    return (
        <div className="bg-base-200 mx-auto max-w-8xl p-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} onClick={(event) => onClick(entry)} />
            ))}
        </div> );
};

export default EntryList;