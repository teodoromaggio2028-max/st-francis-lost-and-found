document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productGrid = document.querySelector('.product-grid');
    const submissionFormContainer = document.getElementById('submission-form-container');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior

            const filterValue = button.getAttribute('data-filter');

            // 1. Update active state on filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Handle Display Logic (Show Grid OR Show Form)
            if (filterValue === 'submit') {
                // HIDE the product grid and SHOW the form
                productGrid.classList.add('hidden');
                submissionFormContainer.classList.remove('hidden');

            } else {
                // SHOW the product grid and HIDE the form
                productGrid.classList.remove('hidden');
                submissionFormContainer.classList.add('hidden');

                // 3. Filter products (only applies to product grid)
                productCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            }
        });
    });

    // Handle form submission (MOCKUP ONLY - data will NOT be saved)
    const submissionForm = document.getElementById('submission-form');
    submissionForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default submission behavior

        // You would typically send this data to a server here!
        const itemName = document.getElementById('item-name').value;
        
        alert(`Thank you! Item "${itemName}" has been submitted for review. (Data was NOT saved as this is a static site mockup.)`);
        
        submissionForm.reset(); // Clear the form after submission
        
        // Switch back to the All Items view after submitting
        document.querySelector('[data-filter="all"]').click();
    });
});