function showOpskrifter(sectionId) {
    document.querySelectorAll('.opskrifter-1, .opskrifter-2, .opskrifter-3, .opskrifter-4').forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.querySelector(`.${sectionId}`);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}