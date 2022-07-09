var btn_congs = document.getElementsByClassName('btn-cong')
for (var i = 0; i < btn_congs.length; i++) {
    btn_congs[i].addEventListener('click', function() {
        var amount = this.parentElement.getElementsByClassName('soluong')[0].value
        this.parentElement.getElementsByClassName('soluong')[0].value = parseInt(amount) + 1
        var dongia = this.parentElement.parentElement.getElementsByClassName('dongia')[0].innerHTML
        this.parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText = convertToPrice((convertToDigit(dongia) * (parseInt(amount) + 1)).toString())
        CapnhatGia()
    })
}

var btn_trus = document.getElementsByClassName('btn-tru')
for (var i = 0; i < btn_trus.length; i++) {
    btn_trus[i].addEventListener('click', function() {
        var amount = this.parentElement.getElementsByClassName('soluong')[0].value
        if (amount > 0) {
            this.parentElement.getElementsByClassName('soluong')[0].value = parseInt(amount) - 1
            if (amount <= 1)
                this.parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText = '0đ'
            else {
                var dongia = this.parentElement.parentElement.getElementsByClassName('dongia')[0].innerHTML
                this.parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText = convertToPrice((convertToDigit(dongia) * (parseInt(amount) - 1)).toString())
            }
        }
        CapnhatGia()
    })
}

function updateamount(element) {
    if (element.value != 0) {
        var dongia = element.parentElement.parentElement.getElementsByClassName('dongia')[0].innerHTML
        element.parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText = convertToPrice((convertToDigit(dongia) * parseInt(element.value)).toString())
    } else
        element.parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText = '0đ'
    CapnhatGia()
}

function CapnhatGia() {
    var total = 0
    for (var i = 0; i < btn_congs.length; i++) {
        var tonggia = btn_congs[i].parentElement.parentElement.getElementsByClassName('tonggia')[0].innerText
        if (tonggia != '0đ')
            total += convertToDigit(tonggia)
    }
    if (total != 0)
        document.getElementsByClassName('total')[0].innerText = convertToPrice(total.toString())
    else
        document.getElementsByClassName('total')[0].innerText = '0đ'
}

function convertToDigit(str) {
    str = str.replaceAll('.', '')
    str = str.replaceAll('đ', '')
    return parseInt(str)
}

function convertToPrice(total_price) {
    var str = ""
    var dem = 0
    for (var i = total_price.length - 1; i >= 0; i--) {
        if (dem % 3 == 0 && dem != 0) {
            str = total_price[i] + '.' + str
        } else {
            str = total_price[i] + str
        }
        dem += 1
    }
    str += 'đ'
    return str
}

function myFunction() {
    alert("Đặt tour thành công! \nChúng tôi sẽ liên hệ cho quý khách sớm nhất có thể!");
}