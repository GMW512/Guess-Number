const SecretNumber = parseInt(Math.random() * 10);
var attempts = 3;
const button = document.querySelector("button");



button.onclick = VerifyAttempt

function VerifyAttempt() {
    
    const p = document.querySelector("p");
    const guess = document.querySelector("input").value;
    
    while (attempts > 0) {
        if (guess == SecretNumber) {
            p.classList.remove("error");
            p.textContent = "Você Acertou !!!";
            break;
        } else if (guess > SecretNumber) {
            attempts = attempts - 1;
            p.classList.add("error");
            p.textContent = "Você Errrou !!! O número secreto é menor";
            break
        } else if (guess < SecretNumber) {
            attempts = attempts - 1;
            p.classList.add("error");
            p.textContent = "Você Errrou !!! O número secreto é maior";
            break
        }
    }
    if (attempts == 0) {
        p.classList.add("error");
        p.textContent = "Você não tem mais tentativas";
    }

}
