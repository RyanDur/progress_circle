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
    var sibling = function (elem) {
        return function (that) {
            return that.parentElement.querySelector(elem)
        }
    };

    var checkboxes = document.querySelectorAll(".check");
    forEach(checkboxes, on('change', resetChecked(sibling('.cmn-toggle'))));
})();
