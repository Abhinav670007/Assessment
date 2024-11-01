let users = [];
let isSortedAsc = true;

async function fetchData() {
    const response = await fetch("data.json");
    users = await response.json();
    displayUsers(users);
}

function displayUsers(userList) {
    const userCards = document.getElementById("userCards");
    userCards.innerHTML = "";

    userList.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "bg-white p-6 rounded-lg shadow-md";

        userCard.innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${user.image}" alt="${user.name}" class="w-16 h-16 rounded-full mr-4">
                <div class="text-left">
                    <h3 class="text-xl font-semibold">${user.name}</h3>
                    <p class="text-gray-500 text-sm">${user.age} / ${user.gender}</p>
                </div>
            </div>
            <p class="text-black mb-2"><strong>Occupation:</strong> ${user.occupation}</p>
            <p class="text-black mb-2"><strong>Location:</strong> ${user.location}</p>
            <p class="text-gray-500 text-sm mb-4 font-bold">${user.joinedDate}</p>
            <div class="text-left">
                <p class="font-semibold">User Traits</p>
                <div class="flex flex-wrap gap-2 mt-2">
                    ${user.traits.map(trait => `<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">${trait}</span>`).join('')}
                </div>
            </div>
        `;

        userCards.appendChild(userCard);
    });
}
  //filter function
function filterUsers() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query));
    displayUsers(filteredUsers);
}
  
  //sorting function
  
function toggleSort() {
    isSortedAsc = !isSortedAsc;
    const sortedUsers = [...users].sort((a, b) => {
        const dateA = new Date(a.joinedDate);
        const dateB = new Date(b.joinedDate);
        return isSortedAsc ? dateA - dateB : dateB - dateA;
    });
    displayUsers(sortedUsers);
}

fetchData();