// filter

// Просто перемещение блоков
let flex_container = $(".flex_container"),
    filter_btn_title = $(".filter_btn_title"),
    filter_btn__body = $(".filter_btn__body"),
    h1 = $(".questions-top__title")

filter_btn_title.on("click", function () {
    if (flex_container.hasClass("active")) {
        setTimeout(function () {
            h1.fadeIn(500)
        }, 800)
        filter_btn__body.fadeOut(500)
        setTimeout(function () {
            flex_container.removeClass("active")
        }, 800)

    } else {

        h1.fadeOut(500)
        setTimeout(function () {
            flex_container.addClass("active")
            setTimeout(function () {
                filter_btn__body.fadeIn(500)
            }, 250)
        }, 500)

    }
});

// select
let selectAll = $(".select");
selectAll.each(function (index, select) {
    let btn = $(select).find(".select_head__btn"),
        value = $(select).find(".select_head__value"),
        body = $(select).find(".select_body");
    // открываю список

    btn.on("click", function (event) {
        event.preventDefault()
        if ($(select).hasClass("active")) {
            $(select).removeClass("active")
            body.fadeOut()
        } else {
            //закрываю открытие select перед открытие нового 
            selectAll.each(function (index, select) {
                $(select).removeClass("active")
                $(select).find(".select_body").fadeOut()
            });

            $(select).addClass("active")
            $(select).addClass("active")
            body.fadeIn()
        }
    })

    let options = body.find(".select_body_option");

    options.each(function (index, option) {
        let label = $(option).find(".select_label"),
            input = $(option).find(".select_input");

        label.on("click", function () {
            value.html(label.html())
            setTimeout(function () {
                $(select).removeClass("active")
                body.fadeOut()
            }, 250)
            // Клик по каждому input тут можно написать ajax 

            // все значения из форм
            console.log($('#filter').serializeArray())
            // текущие значение input
            console.log(input.val())
        })
    })

    options.each(function (index, option) {
        if ($(option).find(".select_input").is(':checked')) {
            value.html($(option).find(".select_label").html())
        }
    })
})

//  Отслеживание чекбоксов по id

let arr = ['first', 'second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']

for (let i = 0; i <= arr.length; i++) {
    let current = arr[i];

    function hmt_change(e) {

        let $frame = $(`#${current}-deleted`);
        if ($(this).prop("checked"))
            $frame.addClass("delete");
        else
            $frame.removeClass("delete");
    }

    $(`#${current}`).change(hmt_change);
}

// Открытие текущего вопроса

$(document).ready(function () {
    $('tr')
        .click(function (e) {
            window.location.href = '/' + url
        })
        .on('click', 'td.input', function (e) {
            e.stopPropagation();
        });
});






