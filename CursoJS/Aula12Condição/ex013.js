var hora = 23
console.log(`Agora são exatamente ${hora} horas`)
if(hora <= 5){
    console.log('Boa Madrugada')
}else if(hora <= 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa Noite!')
}