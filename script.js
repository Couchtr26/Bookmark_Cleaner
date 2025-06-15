document.getElementById('startScan').addEventListener('click', () => {
    const fileInput = document.getElementById('bookmarkFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a bookmark HTML.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = async function (e) {
        const htmlContent = e.target.result;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        const links = Array.from(doc.querySelectorAll('a')).map(a => a.href);
        await scanLinks(links);
    };
    reader.readAsText(file);
});

async function scanLinks(links) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (const url of links) {
        const status = await checkLink(url);
        const result = document.createElement('div');
        result.textContent = `${url} - ${status}`;
        resultsDiv.appendChild(result);
    }
}

async function checkLink(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        return 'Possibly Alive (No Cors)';
    } catch (error) {
        return 'Dead';
    }
}  