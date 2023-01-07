const cardContact = (contact) => {
    return (`
        <a href="${contact.link}" target="_blank" class="btn btn-contact text-light">
            <i class="bi bi-${contact.icon}"></i>
        </a>
    `)
}

export default cardContact;