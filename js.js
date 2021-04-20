function calculator(string){
    let isRoman = 0
    let secator = string.split(' ');
    let pattern = /[^IVX*+-\/0-9]/g;
    let nu = /[IVX]/
    let hg = /[^\+\/\*-]/
    let roman = {
    'I': 1,
    'II' : 2,
    'III' : 3,
    'IV': 4,
    'V': 5,
    'VI': 6,
    'VII': 7,
    'IIX': 8,
    'IX': 9,
    'X': 10
    };
    let roman1 = new Map ([
    ['I', 1],
    ['II' , 2],
    ['III' , 3],
    ['IV', 4],
    ['V', 5],
    ['VI', 6],
    ['VII', 7],
    ['IIX', 8],
    ['IX', 9],
    ['X', 10]
    ]);
    let roman2 = [
    [' ', 0],
    ['I', 1],
    ['II' , 2],
    ['III' , 3],
    ['IV', 4],
    ['V', 5],
    ['VI', 6],
    ['VII', 7],
    ['IIX', 8],
    ['IX', 9],
    ['X', 10]
    ];
    
    

    calculate(secator);
    
    function throws(){
    if (String(secator).match(pattern) != null || String(secator[1]).match(hg) != null ){
    throw new Error('Ошибка! Недопустимые символы');
    }
    else if(secator.length != 3){
    throw new Error('Ошибка! Недопустимая длина');
    }
    else if(secator[0] > 10 || secator[2] > 10 || secator[0] == 0 || secator[2] == 0 ){
        throw new Error('Ошибка! Недопустимые цифры');
        }
    
    else if(roman1.has(secator[0]) == true && roman1.has(secator[2]) == false || roman1.has(secator[0]) == false && roman1.has(secator[2]) == true  ){
        console.log(secator[2])
        throw new Error('huec')
    }
    }
    function toRoman(secator){
    secator[0] = roman[secator[0]];
    secator[2] = roman[secator[2]];
    reshenie();
    }
    function reshenie (){
    let o = Number(secator[0]);
    let n = Number(secator[2]);
    if(secator[1] == '+'){
    string = o + n;
    }
    else if(secator[1] == '-'){
    string = o - n;
    }
    else if(secator[1] == '/'){
    string = o / n;
    string = Math.trunc(string)
    }
    else if(secator[1] == '*'){
    string = o * n;
    }
    }
    function toRoman1 (){
        let res = 'X'.repeat(String(string)[0]) + roman2[Number(String(string)[1])][0]
        if(String(string)[0] == 4){
            res = 'XL'+ roman2[Number(String(string)[1])][0]
        }
        else if(String(string)[0] >= 5){
            res = 'L'+ 'X'.repeat(String(string)[0] - 5) + roman2[Number(String(string)[1])][0]
        }
        
        

       

    }
    function lCheck(){
    
        
    if(string <= 0 && isRoman == 1){
    string = ''
    
    }
    else if(isRoman == 1 && string <= 10){
    string = roman2[string][0]
    }
    else if(string > 10 && isRoman == 1){
        toRoman1()

    }
    }    
    function calculate(secator){

    throws();
    if (roman1.has(secator[0]) && roman1.has(secator[2])){
    isRoman +=1
    toRoman(secator);
    reshenie();
    }
    reshenie(secator);
    lCheck()
    }
    
    if (string.length < 1){
        return ''
    }
    else{
    return String(string)}
    }
    
    console.log(calculator('VII * IIX'))
    
