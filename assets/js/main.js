(function() {
    function criaCalculadora() {
        return {
        display: document.querySelector('.calculadora__input'),
        
            inicia() {
                this.cliqueBtn();
                this.pressionaBackSpace();
                this.pressionaEnter();
            },

            pressionaBackSpace() {
                this.display.addEventListener('keydown', e => {
                    if (e.keyCode === 8) {
                        e.preventDefault()
                        this.apagarUltimo();
                    }
                })
            },
            
            pressionaEnter() {
                this.display.addEventListener('keyup', e => {
                    if (e.keyCode === 13) {
                        this.btnResultado();
                    }
                });
            },

            btnResultado() {
                let conta = this.display.value;
                
                try {
                    conta = eval(conta);

                    if (!conta) {
                        alert('Calculo incorreto');
                        return;
                    }
                    
                    this.display.value = String(conta);
                } catch(e) {
                    alert('Calculo incorreto')
                    return;
                }
            },

            clearDisplay() {
                this.display.value = '';
            },
            
            apagarUltimo() {
                this.display.value = this.display.value.slice(0, -1);
            },
            
            cliqueBtn() {
                document.addEventListener('click', (e) => {
                    const el = e.target;
                    if (el.classList.contains('num')) {
                      this.btnParaDisplay(el.innerText);
                      this.display.focus();
                    }

                    if (el.classList.contains('calculadora__c')) {
                      this.clearDisplay();
                    };
                    
                    if (el.classList.contains('calculadora__guillemot--esquerdo')) {
                      this.apagarUltimo();
                    }

                    if (el.classList.contains('calculadora__igual')) {
                      this.btnResultado();
                    }
                });
            },

            btnParaDisplay(valor) {
             this.display.value += valor;
            }
        }
    }
    const calculadora = criaCalculadora();
    calculadora.inicia();
})();