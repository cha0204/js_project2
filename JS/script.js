// script.js

function showJoinMessage() {
    alert("환경 보호 캠페인에 참여해 주셔서 감사합니다!");
  }
  
  // 사용자 의견 게시판 기능
  function addComment() {
    const commentInput = document.getElementById('userComment');
    const commentsList = document.getElementById('commentsList');
  
    if (commentInput.value.trim() !== "") {
      const newComment = document.createElement('li');
      newComment.textContent = commentInput.value;
      commentsList.appendChild(newComment);
  
      commentInput.value = "";  // 입력창 초기화
    } else {
      alert("의견을 입력해 주세요.");
    }
  }

function addComment() {
  const commentInput = document.getElementById('userComment');
  const commentsList = document.getElementById('commentsList');

  // 의견이 비어 있지 않은 경우에만 추가
  if (commentInput.value.trim() !== "") {
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentsList.appendChild(newComment);

    // 입력창 초기화
    commentInput.value = "";  
  } else {
    alert("의견을 입력해 주세요.");
  }
}
