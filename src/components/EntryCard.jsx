import { useState } from "react";
import EntryDetails from "./EntryDetails";
import ViewEntryModal from "./ViewEntryModal";
const EntryCard = ({entry}) => {
    const [open, setOpen] = useState(false);
    return (
    <>
        <EntryDetails entry={entry} constrained={true} disabled={false} onDetails={() => setOpen(true)}/>
        {open && (
            <ViewEntryModal onClose={() => setOpen(false)}>
                <EntryDetails entry={entry} constrained={false} disabled={true} />
            </ViewEntryModal>
        )}
    </>
)};

export default EntryCard;