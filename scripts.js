document.addEventListener('DOMContentLoaded', function() {
    const classButtons = document.querySelectorAll('.class-button');
    const scheduleTable = document.getElementById('schedule-table');

    // Функция для отображения расписания
    function updateSchedule(selectedClass) {
        // Скрыть все строки расписания
        const allRows = scheduleTable.querySelectorAll('tbody tr');
        allRows.forEach(row => row.style.display = 'none');

        // Показать строки для выбранного класса
        const selectedRows = scheduleTable.querySelectorAll(`.schedule-${selectedClass}`);
        selectedRows.forEach(row => row.style.display = 'table-row');
    }

    // Обработчик для кнопок
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Сбросить выделение предыдущего класса
            const previousButton = document.querySelector('.class-button.active');
            if (previousButton) {
                previousButton.classList.remove('active');
            }

            // Выделить текущий класс
            this.classList.add('active');

            const selectedClass = this.getAttribute('data-class');
            updateSchedule(selectedClass); // Обновить расписание
        });
    });

    // Вызов функции для отображения расписания по умолчанию (например, для 8А)
    const initialClass = document.querySelector('.class-button.active').getAttribute('data-class');
    updateSchedule(initialClass);
});
