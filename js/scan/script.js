 document.getElementById('scanButton').addEventListener('click', function() {
    const scannerContainer = document.getElementById('scanner-container');
    const scanner = document.getElementById('scanner');
    const barcodeResult = document.getElementById('barcodeResult');

    // Показать контейнер для сканера
    scannerContainer.style.display = 'block';

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scanner, // сюда будет выводиться видео
            constraints: {
                width: 200,  // Ограничение ширины видеопотока
                height: 100, // Ограничение высоты видеопотока
                facingMode: "environment" // использовать заднюю камеру
            }
        },
        decoder: {
            readers: ["ean_reader"] // Используемый декодер для штрих-кодов EAN
        }
    }, function(err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Инициализация завершена. Готов к сканированию");
        Quagga.start();
    });

    // Обработка найденного штрих-кода
    Quagga.onDetected(function(data) {
        const code = data.codeResult.code;
        barcodeResult.textContent = code;

        // Остановить сканирование после успешного распознавания
        Quagga.stop();
        scannerContainer.style.display = 'none';
    });
}); 

