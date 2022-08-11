const storage = {
    get(value) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(value, (result) => {
                resolve(result)
            });
        })
    },
    set(data) {
        chrome.storage.sync.set(data);
    }
}