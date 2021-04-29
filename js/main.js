let arr = ['first', 'second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']

for (let i = 0; i <= arr.length; i++)
{
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