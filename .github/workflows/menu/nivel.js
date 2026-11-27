
const gradeNiveis = document.getElementById("gradeNiveis");

const totalNiveis = 6;

// Recupera o nível desbloqueado
let desbloqueado = Number(
    localStorage.getItem("dotstudyNivel") || 1
);

// Recupera os níveis concluídos
let concluidos = JSON.parse(
    localStorage.getItem("dotstudyConcluidos") || "[]"
);


function criarNiveis() {

    gradeNiveis.innerHTML = "";

    for (let i = 1; i <= totalNiveis; i++) {

        const nivel = document.createElement("button");

        nivel.classList.add("nivel");

        if (i % 2 === 0) {
            nivel.classList.add("branco");
        }

        if (concluidos.includes(i)) {
            nivel.classList.add("concluido");
        }

        if (i > desbloqueado) {
            nivel.classList.add("bloqueado");
        }

        // Número
        const numero = document.createElement("span");

        numero.classList.add("numero-nivel");

        numero.textContent = String(i).padStart(2, "0");

        nivel.appendChild(numero);


        // Cadeado
        const cadeado = document.createElement("i");

        cadeado.classList.add(
            "fa-solid",
            i > desbloqueado ? "fa-lock" : "fa-lock-open",
            "cadeado-nivel"
        );

        if (i > desbloqueado || !concluidos.includes(i)) {
            nivel.appendChild(cadeado);
        }


        // Clique
        nivel.addEventListener("click", () => {

            if (i > desbloqueado) {
                return;
            }

            if (concluidos.includes(i)) {
                alert("Você já concluiu este nível!");
                return;
            }

            const confirmar = confirm(
                `Deseja concluir o nível ${String(i).padStart(2, "0")}?`
            );

            if (!confirmar) return;

            // Conclui
            concluidos.push(i);

            // Desbloqueia próximo
            desbloqueado = Math.min(i + 1, totalNiveis);

            // Salva
            localStorage.setItem(
                "dotstudyNivel",
                desbloqueado
            );

            localStorage.setItem(
                "dotstudyConcluidos",
                JSON.stringify(concluidos)
            );

            criarNiveis();

        });

        gradeNiveis.appendChild(nivel);
    }
}

criarNiveis();
