// Função para buscar dados da API
async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.json();
}


function createTableRow(user) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.maidenName}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
    `;
    return row;
}


async function main() {
    const apiURL = 'https://dummyjson.com/users';
    const tableBody = document.querySelector('table tbody');
  
   
    tableBody.innerHTML = '';

    try {
        
        const loadingMessage = document.createElement('tr');
        loadingMessage.innerHTML = '<td colspan="7">Carregando...</td>';
        tableBody.appendChild(loadingMessage);

        const data = await fetchData(apiURL);

        tableBody.removeChild(loadingMessage);

        data.users.forEach(user => {
            const row = createTableRow(user);
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}


main();
