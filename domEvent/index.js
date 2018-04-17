const $on = (targetElement, eventName, selector, fn) => {
    if (typeof targetElement === 'string') {
        targetElement = document.querySelector(targetElement);
    }

    if (typeof selector === 'function') {
        fn = selector;
        selector = null;
    }

    if (eventName === 'tap') {
        $on(targetElement, 'touchstart', selector, function (e) {
            this.setAttribute('data-tap-status', +new Date());
        });
        $on(targetElement, 'touchmove', selector, function (e) {
            this.setAttribute('data-tap-status', 0);
        });
        $on(targetElement, 'touchend', selector, function (e) {
            const d = parseInt(this.getAttribute('data-tap-status'));
            if (d && !isNaN(d) && d > 0 && (+new Date() - d) < 150) {
                fn.call(this, e);
            }
        });
        $on(targetElement, 'click', selector, function (e) {
            e.preventDefault();
        });
        return;
    }

    if (!selector) {
        return targetElement.addEventListener(eventName, fn);
    }

    targetElement.addEventListener(eventName, function (event) {
        const possibleTargets = targetElement.querySelectorAll(selector);
        const target = event.target;

        for (let i = 0, l = possibleTargets.length; i < l; i++) {
            let el = target;
            let p = possibleTargets[i];

            while (el && el !== targetElement) {
                if (el === p) {
                    fn.call(p, event);
                    break;
                }

                el = el.parentNode;
            }
        }
    });
};

module.exports = $on;
