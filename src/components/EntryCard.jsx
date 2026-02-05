import { useState } from "react";
import EntryDetails from "./EntryDetails";

const EntryCard = ({entry}) => {
    const [open, setOpen] = useState(false);
    return (
    <>
        <EntryDetails entry={entry} constrained={true} disabled={false} onDetails={() => setOpen(true)}/>
        {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() =>  {setOpen(false); console.log("doof");}}
        >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
      > Close </button>

          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <EntryDetails entry={entry} constrained={false} disabled={false} />
          </div>
        </div>
      )}
    </>
)};

export default EntryCard;