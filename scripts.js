document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById('blog-posts');
    const posts = ['post1.md', 'post2.md']; // Agrega más posts aquí

    posts.forEach(post => {
        fetch(`blog/${post}`)
            .then(response => response.text())
            .then(data => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `<h2>${post.replace('.md', '')}</h2><p>${data}</p>`;
                blogContainer.appendChild(postElement);
            });
    });
});
