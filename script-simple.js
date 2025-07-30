// Fatores de emissão em kg CO2e por kg de resíduo
const emissionFactors = {
    papel: 0.9,        // kg CO2e/kg
    plastico: 3.1,     // kg CO2e/kg
    vidro: 0.7,        // kg CO2e/kg
    metal: 1.8,        // kg CO2e/kg
    organico: 0.5,     // kg CO2e/kg
    eletronico: 12.0,  // kg CO2e/kg
    textil: 5.9,       // kg CO2e/kg
    madeira: 0.4,      // kg CO2e/kg
    oleo: 2.5,         // kg CO2e/kg (por litro)
    bateria: 8.7       // kg CO2e/unidade
};

// Fatores de energia economizada em kWh por kg de resíduo reciclado
const energySavedFactors = {
    papel: 2.8,        // kWh/kg - economia na produção de papel reciclado
    plastico: 5.5,     // kWh/kg - economia na produção de plástico reciclado
    vidro: 0.6,        // kWh/kg - economia na produção de vidro reciclado
    metal: 15.2,       // kWh/kg - economia na produção de alumínio reciclado
    organico: 0.3,     // kWh/kg - economia com compostagem vs aterro
    eletronico: 45.0,  // kWh/kg - economia na reciclagem de componentes
    textil: 8.1,       // kWh/kg - economia na produção de fibras recicladas
    madeira: 1.2,      // kWh/kg - economia no reprocessamento
    oleo: 3.8,         // kWh/L - economia na produção de biodiesel
    bateria: 32.5      // kWh/unidade - economia na recuperação de materiais
};

const wasteNames = {
    papel: 'Papel/Papelão',
    plastico: 'Plástico',
    vidro: 'Vidro',
    metal: 'Metal/Alumínio',
    organico: 'Resíduo Orgânico',
    eletronico: 'Resíduo Eletrônico',
    textil: 'Têxtil',
    madeira: 'Madeira',
    oleo: 'Óleo de Cozinha',
    bateria: 'Baterias'
};

let wasteData = [];
let companyLogo = null;

// Configurar data atual
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reportDate').value = new Date().toISOString().split('T')[0];
    
    // Configurar upload de logo
    document.getElementById('logoUploadArea').addEventListener('click', function() {
        document.getElementById('logoInput').click();
    });

    document.getElementById('logoInput').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert('Arquivo muito grande. Máximo 2MB.');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                companyLogo = e.target.result;
                const logoImg = document.getElementById('companyLogo');
                const placeholder = document.getElementById('logoPlaceholder');
                
                logoImg.src = companyLogo;
                logoImg.style.display = 'block';
                placeholder.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Permitir adicionar com Enter
    document.getElementById('quantity').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addWaste();
        }
    });
});

function addWaste() {
    const wasteType = document.getElementById('wasteType').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const unit = document.getElementById('unit').value;

    if (!wasteType || !quantity || quantity <= 0) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    // Converter para kg se necessário
    let quantityInKg = quantity;
    if (unit === 'ton') {
        quantityInKg = quantity * 1000;
    } else if (unit === 'litro' && wasteType === 'oleo') {
        quantityInKg = quantity; // Para óleo, usamos litros diretamente
    } else if (unit === 'unidade' && wasteType === 'bateria') {
        quantityInKg = quantity; // Para baterias, usamos unidades diretamente
    }

    // Calcular emissão
    let emission = 0;
    if (wasteType === 'oleo' && unit === 'litro') {
        emission = quantity * emissionFactors[wasteType];
    } else if (wasteType === 'bateria' && unit === 'unidade') {
        emission = quantity * emissionFactors[wasteType];
    } else {
        emission = quantityInKg * emissionFactors[wasteType];
    }

    // Calcular energia economizada
    let energySaved = 0;
    if (wasteType === 'oleo' && unit === 'litro') {
        energySaved = quantity * energySavedFactors[wasteType];
    } else if (wasteType === 'bateria' && unit === 'unidade') {
        energySaved = quantity * energySavedFactors[wasteType];
    } else {
        energySaved = quantityInKg * energySavedFactors[wasteType];
    }

    const wasteItem = {
        id: Date.now(),
        type: wasteType,
        name: wasteNames[wasteType],
        quantity: quantity,
        unit: unit,
        quantityInKg: quantityInKg,
        emission: emission,
        energySaved: energySaved,
        factor: emissionFactors[wasteType],
        energyFactor: energySavedFactors[wasteType]
    };

    wasteData.push(wasteItem);
    updateResults();
    clearForm();
}

function removeWaste(id) {
    wasteData = wasteData.filter(item => item.id !== id);
    updateResults();
}

function updateResults() {
    const container = document.getElementById('resultsContainer');
    
    if (wasteData.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Nenhum resíduo adicionado ainda. Adicione um resíduo acima para começar o cálculo.</p></div>';
        return;
    }

    let html = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>Tipo de Resíduo</th>
                    <th>Quantidade</th>
                    <th>CO2e (kg)</th>
                    <th>Energia Economizada (kWh)</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    `;

    let totalEmission = 0;
    let totalEnergySaved = 0;

    wasteData.forEach(item => {
        totalEmission += item.emission;
        totalEnergySaved += item.energySaved;
        
        let factorUnit = 'kg CO2e/kg';
        if (item.type === 'oleo') factorUnit = 'kg CO2e/L';
        if (item.type === 'bateria') factorUnit = 'kg CO2e/unidade';

        html += `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td>${item.quantity} ${item.unit}</td>
                <td><strong>${item.emission.toFixed(2)} kg</strong></td>
                <td><strong>${item.energySaved.toFixed(2)} kWh</strong></td>
                <td>
                    <button class="btn btn-danger" onclick="removeWaste(${item.id})" style="padding: 8px 15px; font-size: 0.9em;">
                        🗑️ Remover
                    </button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        
        <div class="chart-section">
            <div class="chart-main">
                <h3 style="text-align: center; color: #2c3e50; margin-bottom: 20px;">Distribuição de Emissões</h3>
                <canvas id="emissionsChart" width="450" height="300"></canvas>
            </div>
            
            <div class="summary-cards">
                <div class="summary-card co2-card">
                    <h4>🌱 Emissões de CO2</h4>
                    <div class="big-number">${totalEmission.toFixed(2)}</div>
                    <div class="subtitle">kg CO2 equivalente</div>
                    <div class="subtitle">${(totalEmission/1000).toFixed(3)} toneladas</div>
                </div>
                
                <div class="summary-card energy-card">
                    <h4>⚡ Energia Economizada</h4>
                    <div class="big-number">${totalEnergySaved.toFixed(2)}</div>
                    <div class="subtitle">kWh poupados</div>
                    <div class="subtitle">≈ ${(totalEnergySaved * 0.084).toFixed(2)} kg CO2 evitados*</div>
                </div>
            </div>
        </div>
        
        <div class="report-section no-print" style="background: white; border-radius: 15px; margin-top: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <button class="btn btn-report" onclick="generateReport()">📄 Gerar Relatório</button>
            <button class="btn btn-report" onclick="exportToPDF()">📥 Exportar PDF</button>
        </div>
        
        <div class="factor-info" style="margin-top: 15px;">
            <p><strong>*Estimativa de energia:</strong> Baseada no fator médio de 0,084 kg CO2/kWh do Sistema Interligado Nacional (SIN). A energia economizada representa a redução no consumo elétrico necessário para produção de materiais virgens comparado à reciclagem.</p>
        </div>
    `;

    container.innerHTML = html;
    updateChart();
}

function clearForm() {
    document.getElementById('wasteType').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('unit').value = 'kg';
}

function exportToPDF() {
    generateReport();
    setTimeout(() => {
        alert('📄 Para salvar como PDF:\n\n1. Clique com botão direito na página do relatório\n2. Selecione "Imprimir"\n3. Escolha "Salvar como PDF"\n4. Clique em "Salvar"');
    }, 1000);
}