player1_name =localStorage.getItem("player1_name");
player1_score = 0;
player2_name =localStorage.getItem("player2_name");
player2_score = 0;
question_turn="player1";
answer_turn="plyer2";
document.getElementById("player1_name").innerHTML=player1_name+ ";";
document.getElementById("player2_name").innerHTML=player2_name+ ";";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Turno para preguntar - "+player1_name;
document.getElementById("player_answer").innerHTML="Turno para preguntar - "+player2_name;
function send(){
    palabra =document.getElementById("word").value;
    palabra_minuscula =palabra.toLowerCase();
    charAt1=palabra_minuscula.charAt(1);
    divide_2=Math.floor(palabra_minuscula.length/2)
    charAt2=palabra_minuscula.charAt(divide_2);
    minus_2=palabra_minuscula.length-1;
    charAt3=palabra_minuscula.charAt(minus_2);
    remover_charAt1=palabra_minuscula.replace(charAt1,"_");
    remover_charAt2=remover_charAt1.replace(charAt2,"_");
    remover_charAt3=remover_charAt2.replace(charAt3,"_");
    question_word="<h4 id='word_display'> palabra:"+remover_charAt3+"</h4>";
    input_box = "<br><br>Respuesta: <input type='text' id='input_respuesta'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check(){
    get_respuesta = document.getElementById("input_respuesta").value;
    respuesta =get_respuesta.toLowerCase();
    if(respuesta==palabra_minuscula){
        if(answer_turn == "player1"){
            player1_score =player1_score+1;
            document.getElementById(player1_score).innerHTML=player1_score;
          }else{
            player2_score =player2_score+2;
            document.getElementById(player2_score).innerHTML=player2_score;
        
    }
}
if(question_turn== "player1"){
    question_turn="player2",
    document.getElementById("player_question").innerHTML="Turno para preguntar:"+player2_name;
}else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Turno para preguntar:"+player1_name;
}
if(answer_turn== "player1"){
    answer_turn="player2",
    document.getElementById("player_answer").innerHTML="Turno para responder:"+player2_name;
}else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Turno para responder:"+player1_name;
}
}
