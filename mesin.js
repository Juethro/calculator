// deklarasi variabel 
var screen = document.querySelector(".screen")

// fungsi memasukkan angka ke screen
function angkamasuk(num){
    screen.value += num
}

// fungsi anti dobel operator
function opermasuk(oper){
    last = screen.value[0,screen.value.length-1]
    if(last == "+" || last == "-" || last == "%" || last == "*" || last == "/" ){   
        bckspc();
        screen.value += oper;
    } else{
        screen.value += oper;
    }
}

// fungsi reset value screen
function clr(){
    document.querySelector(".screen").value = ""
}

// fungsi menghapus value terakhir
function bckspc(){
    screen.value = screen.value.slice(0,-1)
}

// fungsi melakukan operasi matematika
function equal(){
    eval(screen.value)
    screen.value = eval(screen.value)
}