importScripts('./utils.js')

chrome.windows.onCreated.addListener(async () => {
    const { today: isFirst } = await storage.get(['today'])
    const today = new Date().toLocaleDateString()
    if (isFirst !== today) {
        const { urls: text } = await storage.get(['urls'])
        const urls = (text || '').split('\n')
        urls.forEach(item => {
            if (item)
                chrome.tabs.create({
                    url: item
                })
        });
        await storage.set({
            today
        })
    }
})