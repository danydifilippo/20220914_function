

function resultAge() {
    let a,b;
    a= Number(document.getElementById('age1').value);
    b= Number(document.getElementById('age2').value);
    let result
    result=a-b;

if (result>=0) {
    //document.getElementById('vecchio').style.visibility=visibility
    document.write('si')
} else {
    //document.getElementById('giovane').style.display = inline
    document.write('no')
}
}
