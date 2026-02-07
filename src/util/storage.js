const STORAGE_KEY = 'personal_diary_entries';

export function loadDiaryEntries() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        console.error("Failed to load diary entries:", error);
        return [];
    }
}

export function saveDiaryEntries(entries) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
        console.error("Can't save diary entries:", error);
    }
}

export function tryAddToDiary(entry, isEdit) {
    const entries = loadDiaryEntries();

    // adding uuid to the entry
    if (!isEdit) {
        entry.id = crypto.randomUUID();
    }

    // double checking the date, in case UI fails
    const dateExsists = entries.some((d) => d.date === entry.date);
    if (dateExsists && !isEdit) {
        throw new Error(
            "Date already exists! \nChoose a new one or come back tomorrow 💤"
        );
    }
    try {
        if (!isEdit) {
            entries.push(entry);
        } else {
            const i = entries.findIndex(e => e.id === entry.id);
            if (i !== -1) {
                entries[i] = entry;
            }
        }
        saveDiaryEntries(entries);
    } catch (error) {
        console.error("Can't add to Diary", error);
        throw error;
    }
}