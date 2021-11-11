var numeroSecreto = parseInt(Math.random() * 20) + 1; // retorna um número entre 1 e 20
var tentativas = 3;

while(tentativas > 0){
  var chute = parseInt(prompt('Digite um número de 0 a 20: '));
  if(numeroSecreto == chute){
    alert('Parabéns, você acertou! O número secreto era ' + numeroSecreto);
    break;
  } else if(chute > numeroSecreto){
    alert('O número secreto é menor...');
    tentativas = tentativas - 1;
  } else if(chute < numeroSecreto){
    alert('O número secreto é maior...');
    tentativas = tentativas - 1;
  } 
}
  if(chute != numeroSecreto){
    document.write('<h2>Infelizmente suas tentativas acabaram :( O número secreto era ' + numeroSecreto + '</h2>');
}