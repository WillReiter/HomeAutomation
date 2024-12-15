document.querySelectorAll('.icon-clock').forEach((icon) => {
    icon.addEventListener('click', () => {
        const device = icon.dataset.device;
        const timeInput = document.getElementById(`${device}-time`);
        timeInput.classList.remove('hidden');
        icon.classList.add('hidden');
        timeInput.focus();

        // When a time is selected, update the display
        timeInput.addEventListener('change', () => {
            const timeDisplay = document.getElementById(`${device}-time-display`);
            timeDisplay.textContent = timeInput.value;
            timeDisplay.classList.remove('hidden');
            timeInput.classList.add('hidden');
        });
    });
});
