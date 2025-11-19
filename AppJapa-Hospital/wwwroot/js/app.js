// ===== CONFIGURAÇÃO GERAL =====
const PASSWORD = "080371";

// ===== DADOS – CID =====
const cidItems = [
    ["AMIGDALITE", "J039"],
    ["ANSIEDADE", "F41"],
    ["ARTRITE", "M018"],
    ["ASMA", "J45"],
    ["AVC", "I64"],
    ["BALANOPOSTITE", "N481"],
    ["CERUME IMPACTADO", "H612"],
    ["CERVICALGIA", "M542"],
    ["CEFALEIA", "R51"],
    ["CONJUNTIVITE ALERGICA", "H103"],
    ["CONJUNTIVITE BACTERIANA", "H103"],
    ["CONJUNTIVITE VIRAL", "B30"],
    ["CONSTIPAÇÃO", "K590"],
    ["CRISE DE ASMA", "J45"],
    ["DENGUE", "A90"],
    ["DIP", "N748"],
    ["DISPEPSIA", "K30"],
    ["DOENÇA VENOSA CRÔNICA", "I872"],
    ["DOR ABD", "R104"],
    ["DOR TORACICA", "R074"],
    ["DRGE", "K21"],
    ["GECA", "K529"],
    ["GECAI", "A09"],
    ["GONORREIA", "A54"],
    ["GOTA", "M10"],
    ["HEMORROIDA", "I84"],
    ["HERPES ZOSTER", "B02"],
    ["INFLUENZA", "J11"],
    ["IVAI", "J22"],
    ["IVAS", "J069"],
    ["IAM", "I21"],
    ["LABIRINTITE", "H830"],
    ["LOMBALGIA", "M545"],
    ["MAL ESTAR", "R53"],
    ["MIALGIA", "M791"],
    ["NEURITE VESTIBULAR", "H830"],
    ["OSTEOARTRITE", "M19"],
    ["OTITE EXTERNA", "H60"],
    ["OMA", "H66"],
    ["PARALISIA DE BELL", "G510"],
    ["PNM", "J15.9"],
    ["RINITE", "J30"],
    ["SINUSITE", "J01"],
    ["TOSSE", "R05"],
    ["TUBERCULOSE", "A15"],
    ["URTICÁRIA", "L50"],
    ["VARIZES EM MII", "I83"],
    ["ALERGIA", "T784"],
    ["ENTORSE TORNOZELO", "S934"],
    ["CIATICA", "M543"],
    ["DOR ARTICULAR", "M255"],
    ["JOELHO", "M23"],
    ["DORSALGIA", "M54"],
    ["SÍFILIS", "A539"],
    ["PELE", "L98"],
    ["ENXAQUECA", "G43"],
    ["GRIPE", "J00"],
    ["TVP", "I82"],
    ["MONONEUROPATIA MMSS", "G56"],
    ["MONONEUROPATIA MMII", "G57"],
    ["DST", "A64"]
].sort((a, b) => a[0].localeCompare(b[0]));

// ===== DADOS – CONDUTAS =====
const condutasItems = [
    {
        name: "EX + REAVAL",
        text: `SOLICITO EXAME(S) 
REAVALIAÇÃO APÓS O RESULTADO DE EXAMES OU SE HOUVER PIORA CLÍNICA`
    },
    {
        name: "MED + EX + REAVAL",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
SOLICITO EXAME(S)
REAVALIAÇÃO APÓS A MEDICAÇÃO, RESULTADO DE EXAMES OU SE HOUVER PIORA CLÍNICA`
    },
    {
        name: "MED + REAVAL",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
REAVALIAÇÃO APÓS A MEDICAÇÃO OU SE HOUVER PIORA CLÍNICA`
    },
    {
        name: "MED + REC + ENC + ALTA",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
PRESCREVO TRATAMENTO AMBULATORIAL
SOLICITO ENCAMINHAMENTO AMBULATORIAL PARA ESPECIALIDADE     
ALTA APÓS A MEDICAÇÃO
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "MED + REC + ALTA",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
PRESCREVO TRATAMENTO AMBULATORIAL
ALTA APÓS A MEDICAÇÃO
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "MED + ALTA",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
ALTA APÓS A MEDICAÇÃO
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "MED + ENC + ALTA",
        text: `PRESCREVO MEDICAÇÃO NA UNIDADE 
SOLICITO ENCAMINHAMENTO AMBULATORIAL PARA ESPECIALIDADE 
ALTA APÓS A MEDICAÇÃO
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "ENC + ALTA",
        text: `ENCAMINHAMENTO AMBULATORIAL PARA ESPECIALIDADE 
ALTA
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "REC + ENC + ALTA",
        text: `PRESCREVO TRATAMENTO AMBULATORIAL
SOLICITO ENCAMINHAMENTO AMBULATORIAL PARA ESPECIALIDADE 
ALTA
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "REC + ALTA",
        text: `PRESCREVO TRATAMENTO AMBULATORIAL 
ALTA 
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    },
    {
        name: "ALTA",
        text: `ALTA 
ORIENTO SOBRE TRATAMENTO, SEGUIMENTO E CUIDADOS GERAIS
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS
QUESTIONO E ESCLAREÇO DÚVIDAS, PACIENTE CIENTE E CONCORDANTE`
    }
];

// ===== DADOS – REAVALIAÇÃO =====
const reavaliacaoItems = [
    {
        name: "RV EXAMES + RECEITA + ENCAMINHAMENTO",
        text: `REAVALIO PCT COM EXAMES
ALTA COM TRATAMENTO E ENCAMINHAMENTO AMBULATORIAL
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS, PCT CIENTE E CONCORDANTE`
    },
    {
        name: "RV EXAMES + RECEITA",
        text: `REAVALIO PCT COM EXAMES
ALTA COM TRATAMENTO AMBULATORIAL
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS, PCT CIENTE E CONCORDANTE`
    },
    {
        name: "RV + RECEITA + ENCAMINHAMENTO",
        text: `REAVALIO PCT COM MELHORA CLINICA
ALTA COM TRATAMENTO E ENCAMINHAMENTO AMBULATORIAL
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS, PCT CIENTE E CONCORDANTE`
    },
    {
        name: "RV + RECEITA",
        text: `REAVALIO PCT COM MELHORA CLINICA
ALTA COM TRATAMENTO AMBULATORIAL
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS, PCT CIENTE E CONCORDANTE`
    },
    {
        name: "RV + ORIENTAÇÃO",
        text: `REAVALIO PCT COM MELHORA CLINICA
ALTA COM ORIENTAÇÃO DO TRATAMENTO
ORIENTO PACIENTE SOBRE SINAIS DE ALARME PROCURAR O PS, PCT CIENTE E CONCORDANTE`
    }
];

// ===== DADOS – RECEITAS =====
// AQUI estão apenas alguns exemplos para a resposta caber;
// você deve completar com TODAS as receitas do Python, seguindo o mesmo padrão.
const receitasItems = [
    {
        name: "GECA",
        text: `USO ORAL:

1 - REPOFLOR 200 MG 
TOMAR 01 CP DE 8/8 HORAS POR 03 DIAS.

2 - METOCLOPRAMIDA 10 MG (PLASIL®) 
TOMAR 01 CP DE 8/8 HORAS, SE NÁUSEA OU VÔMITO.

3 - BUSCOPAN COMPOSTO® 10 MG + 250 MG 
TOMAR 01 CP DE 8/8 HORAS, SE DOR ABDOMINAL.

4 - SAIS DE REIDRATAÇÃO ORAL
DILUIR 01 SACHÊ EM 01 LITRO DE ÁGUA E TOMAR A CADA EPISODIO DE DIARREIA OU VÔMITO.`
    },
    {
        name: "HEMORROIDA",
        text: `USO TÓPICO: 

1 - HIDROCORTISONA 10 MG/G 
APLICAR FINA CAMADA NA REGIÃO AFETADA 2 A 3 VEZES POR DIA POR, NO MAXIMO, 2 SEMANAS.
    
USO ORAL:

1 - ÓLEO MINERAL  
TOMAR 15 ML (1 COLHER DE SOPA) NAS REFEIÇÕES.

2 - DIOSMINA + HESPERIDINA 900 + 100 MG 
TOMAR 01 CP UMA VEZ AO DIA DURANTE A REFEIÇÃO.

3 - DIPIRONA 500 MG 
TOMAR 02 CPS DE 6/6 HORAS, SE DOR OU FEBRE.  

4 - IBUPROFENO 300 MG 
TOMAR 02 CPS DE 8/8 HORAS POR 05 DIAS.`
    },
    {
        name: "IVAS",
        text: `USO ORAL:

1 - DIPIRONA 500 MG 
TOMAR 02 CPS DE 6/6 HORAS, SE DOR OU FEBRE.  

2 - ACETILCISTEÍNA EM PÓ (SACHÊ) 
DILUIR 1 SACHÊ EM 200 ML DE ÁGUA E TOMAR DE 8/8 HORAS POR 05 DIAS.

3 - IBUPROFENO 300 MG 
TOMAR 02 CPS DE 8/8 HORAS POR 05 DIAS.

4 - LORATADINA 10 MG 
TOMAR 01 CP PELA MANHÃ POR 07 DIAS. 

3 - PREDNISONA 20 MG
TOMAR 01 CP PELA MANHÃ POR 05 DIAS.

3 - PREDNISONA 20 MG
TOMAR 01 CP DE 12/12 HORAS POR 05 DIAS.`
    },
    {
        name: "DOR MUSCULAR",
        text: `USO ORAL: 

1 - DIPIRONA 500 MG 
TOMAR 02 CPS DE 6/6 HORAS, SE DOR OU FEBRE.  

2 - DICLOFENACO SODICO 50 MG 
TOMAR 01 CP DE 8/8 HORAS POR 03 DIAS. 

3 - CICLOBENZAPRINA 5 MG 
TOMAR 01 CP A NOITE ANTES DE DORMIR POR 05 DIAS.`
    }
    // TODO: adicionar aqui TODAS as demais receitas do código Python,
    // mantendo exatamente o mesmo texto.
].sort((a, b) => a.name.localeCompare(b.name));

// ===== DADOS – FÁRMACOS =====
// Também só alguns exemplos; complete com todos os fármacos do Python.
const farmacosItems = [
    {
        name: "DIPIRONA",
        text: `1 - DIPIRONA 500 MG 
TOMAR 02 CPS DE 6/6 HORAS, SE DOR OU FEBRE.`
    },
    {
        name: "PARACETAMOL",
        text: `1 - PARACETAMOL 500 MG 
TOMAR 02 CPS DE 6/6 HORAS, SE DOR OU FEBRE.`
    },
    {
        name: "TRAMAL EV",
        text: `USO ENDOVENOSO:
        
1 - TRAMADOL 50MG/ML - 2ML 
APLICAR 01 AMP EV + SF 0,9% 100 ML EV AGORA.`
    },
    {
        name: "TRAMAL IM",
        text: `USO INTRAMUSCULAR:
        
1 - TRAMADOL 50MG/ML - 2ML 
APLICAR 01 AMP IM AGORA.`
    },
    {
        name: "TRAMAL VO",
        text: `USO ORAL:
        
1 - TRAMADOL 50 MG  
TOMAR 01 CP DE 8/8 HORAS, SE DOR MUITO INTENSA E REFRATÁRIA.`
    }
    // TODO: adicionar aqui TODOS os demais fármacos do código Python,
    // mantendo exatamente o mesmo texto.
].sort((a, b) => a.name.localeCompare(b.name));

// ===== FUNÇÕES AUXILIARES =====
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        // Fallback para navegadores antigos
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand("copy");
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function showScreen(screenName) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.add("hidden"));

    let id;
    switch (screenName) {
        case "menu":
            id = "screen-menu"; break;
        case "cid":
            id = "screen-cid"; break;
        case "condutas":
            id = "screen-condutas"; break;
        case "reavaliacao":
            id = "screen-reavaliacao"; break;
        case "receitas":
            id = "screen-receitas"; break;
        case "farmacos":
            id = "screen-farmacos"; break;
        case "links":
            id = "screen-links"; break;
        default:
            id = "screen-menu";
    }

    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");
}

// Renderização das listas dinâmicas
function renderCidList() {
    const container = document.getElementById("cid-list");
    container.innerHTML = "";
    cidItems.forEach(([name, text]) => {
        const btn = document.createElement("button");
        btn.className = "btn primary";
        btn.textContent = name;
        btn.addEventListener("click", () => copyToClipboard(text));
        container.appendChild(btn);
    });
}

function renderCondutasList() {
    const container = document.getElementById("condutas-list");
    container.innerHTML = "";
    condutasItems.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "btn primary";
        btn.textContent = item.name;
        btn.addEventListener("click", () => copyToClipboard(item.text));
        container.appendChild(btn);
    });
}

function renderReavaliacaoList() {
    const container = document.getElementById("reavaliacao-list");
    container.innerHTML = "";
    reavaliacaoItems.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "btn primary";
        btn.textContent = item.name;
        btn.addEventListener("click", () => copyToClipboard(item.text));
        container.appendChild(btn);
    });
}

function renderReceitasList() {
    const container = document.getElementById("receitas-list");
    container.innerHTML = "";
    receitasItems.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "btn primary";
        btn.textContent = item.name;
        btn.addEventListener("click", () => copyToClipboard(item.text));
        container.appendChild(btn);
    });
}

function renderFarmacosList() {
    const container = document.getElementById("farmacos-list");
    container.innerHTML = "";
    farmacosItems.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "btn primary";
        btn.textContent = item.name;
        btn.addEventListener("click", () => copyToClipboard(item.text));
        container.appendChild(btn);
    });
}

// Links – abre em novas abas
function openSystemLinks() {
    const links = [
        "https://hospitalarguarulhos.sissonline.com.br/Abertura/Login.aspx",
        "https://shiftlis.afip.com.br/shift/lis/afip/elis/s01.iu.web.Login.cls?config=UNICO",
        "https://onelaudos.mobilemed.com.br/exames",
        "https://app.sinconecta.com/ords/f?p=1500:LOGIN_DESKTOP:11615698316207:::::"
    ];
    links.forEach(url => window.open(url, "_blank", "noopener"));
}

function openPersonalLinks() {
    const links = [
        "http://protectedtext.com/VICTORHOURA",
        "https://whitebook.pebmed.com.br/login/",
        "https://web.whatsapp.com/",
        "https://chatgpt.com/"
    ];
    links.forEach(url => window.open(url, "_blank", "noopener"));
}

// ===== LOGIN =====
function autenticar() {
    const input = document.getElementById("password-input");
    const error = document.getElementById("login-error");
    if (!input) return;

    if (input.value === PASSWORD) {
        document.getElementById("login-overlay").classList.add("hidden");
        document.getElementById("app-root").classList.remove("hidden");
        error.textContent = "";
        showScreen("menu");
    } else {
        error.textContent = "Erro 1997";
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const passwordInput = document.getElementById("password-input");

    if (loginButton) {
        loginButton.addEventListener("click", autenticar);
    }

    if (passwordInput) {
        passwordInput.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                autenticar();
            }
        });
        passwordInput.focus();
    }

    // Botões de cópia diretos no menu principal
    document.querySelectorAll('[data-action="copy"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const text = btn.getAttribute("data-text") || "";
            copyToClipboard(text);
        });
    });

    // Botões que mudam de tela
    document.querySelectorAll('[data-screen]').forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-screen");
            // As listas são renderizadas quando a tela for aberta pela primeira vez
            if (target === "cid") renderCidList();
            if (target === "condutas") renderCondutasList();
            if (target === "reavaliacao") renderReavaliacaoList();
            if (target === "receitas") renderReceitasList();
            if (target === "farmacos") renderFarmacosList();

            showScreen(target);
        });
    });

    // Botões LINKS
    const btnSistema = document.getElementById("btn-links-sistema");
    if (btnSistema) {
        btnSistema.addEventListener("click", openSystemLinks);
    }
    const btnPessoal = document.getElementById("btn-links-pessoal");
    if (btnPessoal) {
        btnPessoal.addEventListener("click", openPersonalLinks);
    }

    // Chave dinâmica
    const btnDynamicKey = document.getElementById("btn-dynamic-key");
    const dynamicOverlay = document.getElementById("dynamic-key-overlay");
    const dynamicClose = document.getElementById("dynamic-key-close");

    if (btnDynamicKey && dynamicOverlay && dynamicClose) {
        btnDynamicKey.addEventListener("click", () => {
            dynamicOverlay.classList.remove("hidden");
        });
        dynamicClose.addEventListener("click", () => {
            dynamicOverlay.classList.add("hidden");
        });
    }

    // ESC sempre volta ao menu principal (equivalente ao bind do Tkinter)
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !document.getElementById("login-overlay").classList.contains("hidden")) {
            // se ainda está no login, não faz nada
            return;
        }
        if (e.key === "Escape") {
            showScreen("menu");
        }
    });
});
