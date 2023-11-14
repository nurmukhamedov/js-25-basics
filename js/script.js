const postContainer = document.querySelector('.postContainer');

async function createPost() {
    const firstName = document.querySelector('.firstName').value.trim();
    const lastName = document.querySelector('.lastName').value.trim();
    const userID = new Date().getMilliseconds();


    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;  charset=UTF-8'
        },
        body: JSON.stringify({ firstName, lastName, userID })
    });



    if (response.ok) {
        const newPost = await response.json();
        console.log(newPost);
        const postWrapper = document.createElement('div');

        const name = document.createElement('h2');
        name.textContent = newPost.firstName;

        const lastNameElement = document.createElement('h3');
        lastNameElement.textContent = newPost.lastName;

        postWrapper.appendChild(name);
        postWrapper.appendChild(lastNameElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        postWrapper.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        postWrapper.appendChild(deleteButton);

        postContainer.appendChild(postWrapper);

        editButton.addEventListener('click', () => {
            editPost(newPost.id, name, lastNameElement);
        });

        deleteButton.addEventListener('click', () => {
            deletePost(newPost.id, postWrapper);
        });
    }

}

async function deletePost(postId, postElement) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        postContainer.removeChild(postElement);
    } else {
        console.log(`${postId} bilan o'chirishda xatolik ro'y berdi`);
    }
}

async function editPost(postId, nameElement, lastNameElement) {
    const updatedFirstName = prompt('Enter updated first name:', nameElement.textContent);
    const updatedLastName = prompt('Enter updated last name:', lastNameElement.textContent);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json;  charset=UTF-8'
            },
            body: JSON.stringify({ firstName: updatedFirstName, lastName: updatedLastName })
        });

        if (response.ok) {
            const updatedPost = await response.json();
            nameElement.textContent = updatedPost.firstName;
            lastNameElement.textContent = updatedPost.lastName;
        } else {
            console.log(`${postId} bilan tahrirlashda xatolik ro'y berdi`);
        }
    } catch (error) {
        console.log(error);
    }
}
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createPost();

    form.reset();
})