(function () {
    var forEach = function (arr, func) {
        for (var i = 0; i < arr.length; i++) func(arr[i]);
    };
    var resetChecked = function (elem) {
        return function (e) {
            if (!e.checked) elem(this).checked = false;
        }
    };
    var on = function (event, func) {
        return function (elem) {
            elem.addEventListener(event, func)
        };
    };
    var sibling = function (sibling) {
        return function (elem) {
            return elem.parentElement.querySelector(sibling)
        }
    };

    var checkboxes = document.querySelectorAll(".check");
    forEach(checkboxes, on('change', resetChecked(sibling('.cmn-toggle'))));
})();
