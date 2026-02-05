const AddEntryButton = ({setAddEntry}) => {
  // "/opens the Add Entry Modal using useState()/"
  return (
    <button onClick={() => {setAddEntry(true); console.log("bloed");}}
      className="btn btn-primary"
    >
    Add
    </button>
  );
}

export default AddEntryButton;
