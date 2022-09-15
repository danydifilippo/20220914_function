

function resultAge() {
    let a,b;
    a = Number(document.getElementById('age1').value);
    b = Number(document.getElementById('age2').value);
    let result1 = a-b
    let c,d,e,f;
    c= Number(document.getElementById('eat').value);
    d= Number(document.getElementById('sport').value);
    e= Number(document.getElementById('alcool').value);
    f= document.getElementById('genreF');

        if (f.checked){
            f=1
        }
        else {
            f=0
        };
    let result2 = c+d+e+f;

    if ((result1>=0) || (result2<5)) {
        document.getElementById('gif_age_old').style.visibility="visible";
        document.getElementById('main_').style.display="none";
    } else {
        document.getElementById('gif_age_young').style.visibility="visible";
        document.getElementById('main_').style.display="none";
    }
}

