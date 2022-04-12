const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

fetch(API_URL)
.then((response) => response.json())
.then(user => {
	const lista = document.getElementById('lista');
	lista.innerHTML = `
	<li>Nombre: ${user.name}</li>
	<li>Email: ${user.email}</li>
	<li>Ciudad: ${user.address.city}</li>
	<li>Telefono: ${user.phone}</li>
	`
})
