function displayUsers(userList) {
    const userCards = document.getElementById('userCards');
    userCards.innerHTML = '';
  
    userList.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = "bg-white p-6 rounded-lg shadow-md text-center";
  
      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.name}" class="w-20 h-20 rounded-full mx-auto mb-4">
        <h3 class="text-xl font-semibold mb-2">${user.name}</h3>
        <p class="text-gray-600"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-600"><strong>Occupation:</strong> ${user.occupation}</p>
        <p class="text-gray-600"><strong>Status:</strong> ${user.status}</p>
        <p class="text-gray-600"><strong>Joined Date:</strong> ${user.joinedDate}</p>
        <p class="text-gray-600"><strong>Location:</strong> ${user.location}</p>
        <div class="flex flex-wrap justify-center gap-2 mt-3">
          ${user.traits.map(trait => `<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">${trait}</span>`).join('')}
        </div>
      `;
  
      userCards.appendChild(userCard);
    });
  }