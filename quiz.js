function check() {
    var c = 0;
    var spm1 = document.quiz.spm1.value;
    var spm2 = document.quiz.spm2.value;
    var spm3 = document.quiz.spm3.value;
    var spm4 = document.quiz.spm4.value;
    var spm5 = document.quiz.spm5.value;
    var spm6 = document.quiz.spm6.value;
    var spm7 = document.quiz.spm7.value;
    var spm8 = document.quiz.spm8.value;
    var resultat=document.getElementById("resultat");

    if (spm1 == "alt_1") {c++}
    if (spm2 == "alt_3") {c++}
    if (spm3 == "alt_2") {c++}
    if (spm4 == "alt_1") {c++}
    if (spm5 == "alt_4") {c++}
    if (spm6 == "alt_3") {c++}
    if (spm7 == "alt_2") {c++}
    if (spm8 == "alt_4") {c++}

    resultat.textContent=`${c}`;

}
