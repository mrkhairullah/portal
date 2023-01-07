const cardContent = (content) => {
    return (`
        <div class="card border-0 w-100 p-0" style="background-color: var(--bs-gray-800);">
            <div class="card-body py-4 px-3">
                <h6 class="card-title fw-bold text-info text-uppercase">${content.title}</h6>
                <p class="card-text text-light small">${content.description}</p>
            </div>
            <div class="card-footer d-grid p-0">
                <a href="${content.link}" target="_blank" class="small px-3 py-2 link-light d-flex justify-content-between text-decoration-none">
                    Buka tautan
                    <i class="bi bi-chevron-right"></i>
                </a>
            </div>
        </div>
    `)
}

export default cardContent;