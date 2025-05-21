function toggleLike(postId) {
    let likeCountElement = document.getElementById(`like-count-${postId}`);
    let currentLikes = parseInt(likeCountElement.textContent.replace("Likes: ", ""));
    likeCountElement.textContent = `Likes: ${currentLikes + 1}`;
}