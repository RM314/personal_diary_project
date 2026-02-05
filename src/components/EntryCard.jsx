import EntryDetails from "./EntryDetails";

const EntryCard = ({ entry }) => {

    return (
    <div>
        <EntryDetails {...entry} />
    </div>
)};

export default EntryCard;   