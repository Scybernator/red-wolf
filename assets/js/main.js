(function () {
  function ready() {
    var hamburger = document.getElementById('hamburger');
    var drawer = document.getElementById('drawer');
    var overlay = document.getElementById('drawer-overlay');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }

    if (hamburger) {
      hamburger.addEventListener('click', openDrawer);
    }

    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }

    if (drawer) {
      drawer.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          closeDrawer();
        }
      });
    }

    var page = document.querySelector('.page');
    if (page && page.getAttribute('data-floating-footnotes') !== 'disabled') {
      var content = document.querySelector('.content');
      var aside = document.querySelector('.aside');
      var footnoteSection = document.querySelector('.footnotes');

      if (footnoteSection && aside && content) {
        aside.textContent = '';
        aside.appendChild(footnoteSection);

        var FOOTNOTE_MIN_WIDTH = 768;
        var footnoteItems = footnoteSection.querySelectorAll('li[id^="fn:"]');
        Array.prototype.forEach.call(footnoteItems, function (fn) {
          var num = fn.id.replace('fn:', '');
          var prefix = document.createElement('span');
          prefix.className = 'fn-num';
          prefix.textContent = '[' + num + ']\u00A0';
          var p = fn.querySelector('p');
          if (p) p.insertBefore(prefix, p.firstChild);
        });

        function setOffsets() {
          var bottom = 0;
          Array.prototype.forEach.call(footnoteItems, function (fn) {
            var ref = document.querySelector('a.footnote-ref[href="#' + fn.id + '"]');
            if (!ref) return;
            var target = ref.closest('p,li') || ref;
            var asideRect = aside.getBoundingClientRect();
            var targetRect = target.getBoundingClientRect();
            var offset = targetRect.top - asideRect.top;
            if (offset < bottom) offset = bottom;
            bottom = offset + fn.offsetHeight +
              parseInt(getComputedStyle(fn).marginBottom, 10) +
              parseInt(getComputedStyle(fn).marginTop, 10);
            fn.style.position = 'absolute';
            fn.style.top = offset + 'px';
            fn.style.left = '0';
            fn.style.right = '0';
          });
        }

        function clearOffsets() {
          Array.prototype.forEach.call(footnoteItems, function (fn) {
            fn.style.position = '';
            fn.style.top = '';
            fn.style.left = '';
            fn.style.right = '';
          });
        }

        function activateFloat() {
          footnoteSection.classList.add('floating-footnotes');
          setOffsets();
          resizeObserver.observe(content);
        }

        function deactivateFloat() {
          resizeObserver.disconnect();
          clearOffsets();
          footnoteSection.classList.remove('floating-footnotes');
        }

        var resizeObserver = new ResizeObserver(function () {
          setOffsets();
        });

        var checkWidth = (function () {
          var wasWide = false;
          return function () {
            var isWide = window.innerWidth >= FOOTNOTE_MIN_WIDTH;
            if (isWide !== wasWide) {
              if (isWide) activateFloat();
              else deactivateFloat();
              wasWide = isWide;
            }
          };
        }());

        if (document.readyState === 'complete') {
          setTimeout(checkWidth, 1);
        } else {
          window.addEventListener('load', function () {
            setTimeout(checkWidth, 1);
          });
        }

        window.addEventListener('resize', checkWidth);
      }
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(ready, 1);
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }
})();
