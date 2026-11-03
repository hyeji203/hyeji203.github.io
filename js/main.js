// Frontend / Backend 보기 기준 전환
// URL에 ?focus=fe 또는 ?focus=be 를 붙이면 그 기준으로 열린다 (지원 직무별 링크 공유용).
(function () {
  const buttons = document.querySelectorAll('[data-set-focus]');

  function setFocus(value) {
    if (!['all', 'fe', 'be'].includes(value)) value = 'all';
    document.body.dataset.focus = value;
    buttons.forEach((b) => b.classList.toggle('active', b.dataset.setFocus === value));
  }

  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      setFocus(b.dataset.setFocus);
      const url = new URL(location.href);
      if (b.dataset.setFocus === 'all') url.searchParams.delete('focus');
      else url.searchParams.set('focus', b.dataset.setFocus);
      history.replaceState(null, '', url);
    })
  );

  setFocus(new URLSearchParams(location.search).get('focus') || 'all');
})();
