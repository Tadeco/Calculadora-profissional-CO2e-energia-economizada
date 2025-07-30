function updateChart() {
    const canvas = document.getElementById('emissionsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (wasteData.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }

    // Configurações do gráfico
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 80;

    // Cores para cada tipo de resíduo
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
        '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
        '#BB8FCE', '#85C1E9'
    ];

    // Calcular total
    const totalEmission = wasteData.reduce((sum, item) => sum + item.emission, 0);

    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar gráfico de pizza
    let currentAngle = -Math.PI / 2; // Começar do topo

    wasteData.forEach((item, index) => {
        const percentage = item.emission / totalEmission;
        const sliceAngle = percentage * 2 * Math.PI;

        // Desenhar fatia
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();

        // Contorno
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Desenhar label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);

        if (percentage > 0.05) { // Só mostrar label se for maior que 5%
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${(percentage * 100).toFixed(1)}%`, labelX, labelY);
        }

        currentAngle += sliceAngle;
    });

    // Desenhar legenda
    const legendStartY = 20;
    const legendItemHeight = 25;

    wasteData.forEach((item, index) => {
        const y = legendStartY + (index * legendItemHeight);
        
        // Quadrado colorido
        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(20, y, 15, 15);
        
        // Texto
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        const percentage = ((item.emission / totalEmission) * 100).toFixed(1);
        const text = `${item.name}: ${item.emission.toFixed(1)} kg (${percentage}%)`;
        ctx.fillText(text, 45, y + 2);
    });

    // Título
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Distribuição de Emissões por Tipo de Resíduo', centerX, canvas.height - 25);
}