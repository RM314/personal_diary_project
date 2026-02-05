import EntryCard from "./EntryCard";

<<<<<<< HEAD

const entry = {
    title: "my best experience",
    date: "02. 03. 2025",
    picture: "https://img.fotocommunity.com/wir-ueben-7d4680fd-c687-4001-92a5-3738b1f82e6d.jpg?height=1080",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam "
};

const entries=[{...entry}, {...entry}, {...entry}, {...entry}];

entries[0].date="02. 03. 2025";
entries[1].date="03. 03. 2025";
entries[2].date="04. 03. 2025";
entries[3].date="05. 03. 2025";

entries[2].picture="";

const EntryList = () => {

    return (
        <div className="mx-auto max-w-5xl p-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {entries.map((entry) => (
            <EntryCard key={entry.date} entry={entry} />
            ))}
        </div> );
};

export default EntryList;