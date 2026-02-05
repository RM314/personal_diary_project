import EntryCard from "./EntryCard";

const EntryList = ({ entries }) => {

    return (
        <div>
            {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default EntryList;