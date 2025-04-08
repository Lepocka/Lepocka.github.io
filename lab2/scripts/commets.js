document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const nameInput = document.getElementById("username");
    const commentInput = document.getElementById("usercomment");
    const commentList = document.getElementById("comments-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name === "" || comment === "") {
            alert("Будь ласка, заповніть усі поля!");
            return;
        }

        const commentBlock = document.createElement("div");
        commentBlock.classList.add("comment-block");

        const nameElement = document.createElement("strong");
        nameElement.textContent = name;
        nameElement.classList.add("comment-name");

        const commentText = document.createElement("p");
        commentText.textContent = comment;
        commentText.classList.add("comment-text");

        // Розгортання/згортання
        nameElement.addEventListener("click", () => {
            commentText.classList.toggle("hidden");
        });

        // Видалення
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            commentBlock.remove();
        });

        commentBlock.appendChild(nameElement);
        commentBlock.appendChild(commentText);
        commentBlock.appendChild(deleteBtn);
        commentList.appendChild(commentBlock);

        nameInput.value = "";
        commentInput.value = "";
    });
});
