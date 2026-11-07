// 사진 표시: ?photo=off → 숨김, ?photo=on → 인쇄(PDF)에도 표시. 기본은 화면에만 표시.
(function () {
  const v = new URLSearchParams(location.search).get('photo');
  if (v === 'on' || v === 'off') document.body.dataset.photo = v;
})();
