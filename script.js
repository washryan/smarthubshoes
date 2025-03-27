document.addEventListener("DOMContentLoaded", () => {
    const botoesCarrinho = document.querySelectorAll(".btn-carrinho");
    let contador = 0;
    const badgeCarrinho = document.createElement("div");
    
    function atualizarContadorCarrinho() {
        if (!document.querySelector(".contador-carrinho")) {
            badgeCarrinho.className = "contador-carrinho";
            badgeCarrinho.style.position = "fixed";
            badgeCarrinho.style.top = "10px";
            badgeCarrinho.style.right = "10px";
            badgeCarrinho.style.backgroundColor = "#ff4757";
            badgeCarrinho.style.color = "white";
            badgeCarrinho.style.padding = "5px 10px";
            badgeCarrinho.style.borderRadius = "50%";
            badgeCarrinho.style.fontSize = "14px";
            badgeCarrinho.style.fontWeight = "bold";
            badgeCarrinho.style.zIndex = "1000";
            badgeCarrinho.style.display = "none";
            document.body.appendChild(badgeCarrinho);
        }
        
        contador++;
        badgeCarrinho.textContent = contador;
        badgeCarrinho.style.display = "block";
        
        badgeCarrinho.animate([
            { transform: 'scale(1.5)', opacity: 0.7 },
            { transform: 'scale(1)', opacity: 1 }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }

    botoesCarrinho.forEach((botao) => {
        botao.addEventListener("click", function () {
            const nomeProduto = this.parentElement.querySelector("h3").textContent;
            
            const textoOriginal = this.textContent;
            this.textContent = "Adicionado ✓";
            this.style.backgroundColor = "#4CAF50";
            this.disabled = true;
            
            atualizarContadorCarrinho();
            
            setTimeout(() => {
                this.textContent = textoOriginal;
                this.style.backgroundColor = "#1a73e8";
                this.disabled = false;
            }, 1500);
            
            const mensagem = document.createElement("div");
            mensagem.textContent = `${nomeProduto} adicionado ao carrinho!`;
            mensagem.style.position = "fixed";
            mensagem.style.bottom = "20px";
            mensagem.style.right = "20px";
            mensagem.style.backgroundColor = "#4CAF50";
            mensagem.style.color = "white";
            mensagem.style.padding = "10px 20px";
            mensagem.style.borderRadius = "4px";
            mensagem.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
            mensagem.style.zIndex = "1000";
            document.body.appendChild(mensagem);
            
            setTimeout(() => {
                mensagem.style.opacity = "0";
                mensagem.style.transition = "opacity 0.5s ease";
                setTimeout(() => {
                    document.body.removeChild(mensagem);
                }, 500);
            }, 3000);
        });
    });
    
    const produtoCards = document.querySelectorAll(".produto-card");
    produtoCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        });
    });
});