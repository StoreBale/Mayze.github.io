var myButton = document.getElementById('myButton');

// 檢查myButton是否為null
if (myButton) {
  // 在元素上添加點擊事件監聽器
  myButton.addEventListener('click', function() {
    console.log('Button clicked!');
  });
} else {
  console.error('Button not found!');
}

function redirectToUrl() {
    window.location.href = "https://www.google.com";
}

