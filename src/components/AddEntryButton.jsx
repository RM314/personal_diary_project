const AddEntryButton = ({setAddEntry}) => {
  // "/opens the Add Entry Modal using useState()/"
  return (
    <button onClick={() => {setAddEntry(true)}}
      className="btn btn-primary"
    >
    + Add Entry
    </button>
  );
}

export default AddEntryButton;
