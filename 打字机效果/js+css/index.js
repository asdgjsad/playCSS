let box = document.getElementsByClassName('box')[0]
let str = '朝辞白帝彩云间,千里江陵一日还.两岸猿声啼不住,轻舟已过万重山.'
let str_back = []
let i = 0
let isPush = true

let interval = setInterval(() => {
    if (isPush) {
        str_back.push(str[i])
        box.innerHTML = str_back.join('')
        i++
    } else {
        let new_str_back = str_back.slice(0, i)
        str_back = new_str_back
        box.innerHTML = str_back.join('')
        i -= 2
    }
    if (str.length === str_back.length) {
        isPush = false
    }
    if (str_back.length === 0) {
        isPush = true
    }
}, 150)