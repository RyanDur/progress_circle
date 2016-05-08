(function () {
    var forEach = function (arr, func) {
        for (var i = 0; i < arr.length; i++) func(arr[i]);
    };

    var checkboxes = document.querySelectorAll(".check");
    forEach(checkboxes, function (elem) {
        elem.addEventListener("change", function (e) {
            if (!e.checked) elem.parentElement
                .querySelector('.cmn-toggle').checked = false;
        });
    });
})();
