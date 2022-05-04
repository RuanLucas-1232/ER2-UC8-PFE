for (let alunos = 0; alunos <= 17; alunos++) {
    if (alunos % 2 == 0 && alunos != 0) {
        console.log(alunos + "É par")
    }
    else if (alunos % 2 == 1) {
        console.log(alunos + "É impar")
    }
    else if (alunos == 0) {
        console.log(alunos + "É zero")
    }
}
