       function rollDice() {
            const diceTypes = [
                { sides: 4, count: parseInt(document.getElementById('countD4').value) || 0 },
                { sides: 6, count: parseInt(document.getElementById('countD6').value) || 0 },
                { sides: 8, count: parseInt(document.getElementById('countD8').value) || 0 },
                { sides: 10, count: parseInt(document.getElementById('countD10').value) || 0 },
                { sides: 12, count: parseInt(document.getElementById('countD12').value) || 0 },
                { sides: 20, count: parseInt(document.getElementById('countD20').value) || 0 },
                { sides: 100, count: parseInt(document.getElementById('countD100').value) || 0 },
            ];
            const modifier = parseInt(document.getElementById('modifier').value) || 0;
            
            let total = 0;
            let resultText = '';
            
            diceTypes.forEach(dice => {
                if (dice.count > 0) {
                    let rolls = [];
                    for (let i = 0; i < dice.count; i++) {
                        const roll = Math.floor(Math.random() * dice.sides) + 1;
                        rolls.push(roll);
                        total += roll;
                    }
                    resultText += `d${dice.sides}: ${rolls.join(', ')}<br>`;
                }
            });
            
            total += modifier;
            
            // Формируем вывод
            if (resultText === '') {
                resultText = 'Бросьте хотя бы одну кость!';
            } else {
                if (modifier !== 0) {
                    resultText += `Модификатор: ${modifier}<br>`;
                }
                resultText += `<b>Итого: ${total}</b>`;
            }
            
            // Выводим результат
            document.getElementById('result').innerHTML = resultText;
        }