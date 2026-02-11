// Funcionalidade de busca
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categorySection = document.querySelectorAll('.category-section');
    const linkButtons = document.querySelectorAll('.link-button');

    // Função de busca
    function performSearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        if (term === '') {
            // Mostrar todas as seções e links
            categorySection.forEach(section => {
                section.style.display = 'block';
                const links = section.querySelectorAll('.link-button');
                links.forEach(link => {
                    link.style.display = 'flex';
                });
            });
            return;
        }

        // Esconder todas as seções inicialmente
        categorySection.forEach(section => {
            section.style.display = 'none';
        });

        // Buscar em links
        linkButtons.forEach(link => {
            const linkText = link.textContent.toLowerCase();
            const parentSection = link.closest('.category-section');
            
            if (linkText.includes(term)) {
                link.style.display = 'flex';
                parentSection.style.display = 'block';
            } else {
                link.style.display = 'none';
            }
        });

        // Buscar em títulos de categoria
        categorySection.forEach(section => {
            const categoryTitle = section.querySelector('.category-title').textContent.toLowerCase();
            if (categoryTitle.includes(term)) {
                section.style.display = 'block';
                const links = section.querySelectorAll('.link-button');
                links.forEach(link => {
                    link.style.display = 'flex';
                });
            }
        });

        // Esconder seções vazias
        categorySection.forEach(section => {
            const visibleLinks = section.querySelectorAll('.link-button[style*="flex"]');
            if (visibleLinks.length === 0 && !section.querySelector('.category-title').textContent.toLowerCase().includes(term)) {
                section.style.display = 'none';
            }
        });
    }

    // Event listener para busca em tempo real
    searchInput.addEventListener('input', function(e) {
        performSearch(e.target.value);
    });

    // Limpar busca ao pressionar Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
    });

    // Animação de entrada para as seções
    function animateOnScroll() {
        const sections = document.querySelectorAll('.category-section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = 150;
            
            if (sectionTop < window.innerHeight - sectionVisible) {
                section.classList.add('animate-in');
            }
        });
    }

    // Event listener para scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Executar uma vez no carregamento
    animateOnScroll();

    // Feedback visual para cliques
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    console.log('Ferramentas Administrativas - Regulação em Saúde carregado com sucesso!');
    console.log(`Total de links: ${linkButtons.length}`);
    console.log(`Total de categorias: ${categorySection.length}`);
});
