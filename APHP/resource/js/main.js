window.addEventListener("copy", (e) => {
  e.preventDefault();
  alert('복사하기는 허용되지 않습니다.');
  e.clipboardData.clearData("Text"); // 클립보드에 저장된 컨텐츠 삭제
});

// 오른쪽 클릭 방지
document.oncontextmenu = function() 
{
  alert('우클릭은 허용되지 않습니다.');
  return false;
}

// 드래그 방지
var omitformtags = ["input", "textarea", "select"]
omitformtags = omitformtags.join("|")

function disableselect(e) {
  if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1)
      return false
}

function reEnable() {
  return true
}

if (typeof document.onselectstart != "undefined")
  document.onselectstart = new Function("return false")
else {
  document.onmousedown = disableselect
  document.onmouseup = reEnable
}