function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const result = document.getElementById("result");
    let values=[];
    let images=[];
    let total=0;
    for(let i=0; i<numOfDice; i++){
        const value = Math.round(Math.random() * 5) + 1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice ${value}">`);
        total+=value;
    }
    diceResult.textContent = `dice: ${values.join(",")}`;
    diceImages.innerHTML = images.join('');
    result.textContent = `Total: ${total}`
}