function dataAtual() {
    const dataAtual = new Date().toLocaleDateString('pt-BR', {weekday: 'long', month: 'numeric', day: 'numeric', year:'numeric'});
    const horaAtual = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute:'numeric'});
    const dataCompleta = `${dataAtual} ${horaAtual}`
    console.log(dataCompleta);
}

dataAtual();