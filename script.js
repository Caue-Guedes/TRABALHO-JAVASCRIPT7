document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const textDisplay = document.getElementById('text-display');
    const fontSelect = document.getElementById('font-select');
    const colorPicker = document.getElementById('color-picker');
    const applyBtn = document.getElementById('apply-btn');
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
    const formatToggle = document.getElementById('format-toggle');
    const galleryImage = document.getElementById('gallery-image');
    const changeImageBtn = document.getElementById('change-image');
    
    // Estado do relógio
    let is24HourFormat = true;
    let clockInterval;
    
    // Galeria de imagens
    const images = [
        'https://blog.polipet.com.br/wp-content/uploads/2024/01/pato-1110x508.jpeg',
        'https://lh6.googleusercontent.com/OQHAiXJiB-oeqPk0JdNI1mKmXsZlln2aqNHXAV3GzAl0yROhMqq91Knmu0YTZhQv80Sj8YRZqaji1bIb8Kyor4hakydViCoFUQNPbWpnMXT1cszlwiskCcWCIPlXVbowT3ytEjmn'
    ];
    let currentImageIndex = 0;

    // Aplicar estilo de texto
    applyBtn.addEventListener('click', () => {
        textDisplay.style.fontFamily = fontSelect.value;
        textDisplay.style.color = colorPicker.value;
        
        // Efeito visual
        textDisplay.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.02)' },
            { transform: 'scale(1)' }
        ], {
            duration: 200,
            easing: 'ease-out'
        });
    });
    
    // Atualizar relógio
    function updateClock() {
        const now = new Date();
        
        // Formatar hora
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        if (!is24HourFormat) {
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours || 12; // Converter 0 para 12
            timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        } else {
            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
        
        // Formatar data
        dateDisplay.textContent = now.toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    
    // Alternar formato de hora
    formatToggle.addEventListener('click', () => {
        is24HourFormat = !is24HourFormat;
        updateClock();
        
        // Efeito visual
        formatToggle.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
    });
    
    // Trocar imagem
    changeImageBtn.addEventListener('click', () => {
        // Efeito de transição
        galleryImage.style.opacity = 0;
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            galleryImage.src = images[currentImageIndex];
            galleryImage.style.opacity = 1;
            
            // Efeito visual
            galleryImage.animate([
                { transform: 'scale(0.95)' },
                { transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        }, 200);
    });
    
    // Iniciar relógio
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
});
