import EntryDetails from "./EntryDetails";

const EntryCard = ({entry, onClick, removeEntry, editEntry}) => {
    return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <EntryDetails entry={entry} constrained={true} disabled={false} onDetails={(event) => onClick(entry)} removeEntry={(event) => removeEntry(entry)} editEntry={(event) => editEntry(entry)}/>
    </div>
)};

export default EntryCard;
