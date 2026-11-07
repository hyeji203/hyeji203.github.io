// 사진 표시: ?photo=off → 숨김, ?photo=on → 인쇄(PDF)에도 표시. 기본은 화면에만 표시.
(function () {
  const v = new URLSearchParams(location.search).get('photo');
  if (v === 'on' || v === 'off') document.body.dataset.photo = v;
})();

// 스크롤하면 상단 메뉴에 얇은 선과 그림자
(function () {
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// 화면에 들어올 때 부드럽게 나타나기
(function () {
  const targets = document.querySelectorAll(
    '.hero-text, .profile-photo, .section-title, .skill-card, .project-head, .media-row, .point-card, .story, .contact-list'
  );
  if (!('IntersectionObserver' in window)) return;
  targets.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach((el) => io.observe(el));
})();
