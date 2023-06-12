async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.json();
}
