import EntryDetails from "./EntryDetails";

const EntryCard = ({entry, onClick }) => {
    return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <EntryDetails entry={entry} constrained={true} disabled={false} onDetails={(event) => onClick(entry)}/>
    </div>
)};

export default EntryCard;
