document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("save").addEventListener("click", onSave);
    document.getElementById("open").addEventListener("click", onOpen);
});

const textarea = document.getElementById('textarea')

function onSave() {
    storage.set({
        urls: textarea.value
    })
}
function onOpen() {
    const urls = textarea.value.split('\n')
    urls.forEach(item => {
        if (item)
            window.open(item)
    });
}

; (async () => {
    const { urls } = await storage.get(['urls'])
    textarea.value = urls || ''
})()