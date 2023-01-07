class App {
    // Method: Constructor
    constructor (root = "root") {
        this.root = document.getElementById(root);
    }
    // Method: Update header
    updateHeader () {
        const headerChildren = document.getElementById("header").children;
        const getDataProfile = fetch(`./storage/profile.json`);
        getDataProfile
            .then(responses => responses.json())
            .then(profile => {
                document.title = profile.title;
                headerChildren["avatar"].src = `./storage/${profile.avatar}`;
                headerChildren["avatar"].alt = profile.name;
                headerChildren["name"].innerText = profile.name;
                headerChildren["email"].innerText = profile.email;
                headerChildren["email"].href = `mailto:${profile.email}`;
                headerChildren["email"].target = "_blank";
            });
    }
    // Method: Add attribute
    addAttribute (element, attr) {
        if (attr.id !== undefined) element.setAttribute("id", attr.id);
        if (attr.class !== undefined) element.setAttribute("class", attr.class);
        if (attr.src !== undefined) element.setAttribute("src", attr.src);
        if (attr.text !== undefined) element.innerText = attr.text;
        if (attr.link !== undefined) element.setAttribute("href", attr.link);
    }
    // Method: Create element
    createElement (elementTag, elementTargetId, attr = {
        id : undefined,
        class : undefined,
        src : undefined,
        text : undefined,
        link : undefined
    }) {
        const element = document.createElement(elementTag);
        const target = document.getElementById(elementTargetId);
        target.appendChild(element);
        this.addAttribute(element, attr)
    }
    // Method: Render element
    async updateUI (path, targetId, position, component) {
        let target = document.getElementById(targetId);
        const response = await fetch(path);
        const json = response.json();
        json
            .then(dataSet => {
                if (dataSet.length !== 0) {
                    dataSet.forEach(data => {
                        if (target !== null) {
                            target.insertAdjacentHTML(position, component(data));
                        } else {
                            throw new Error(`Target element: ${target} not found...`);
                        }
                    });
                } else {
                    throw new Error(`${path} not have data...`);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export default App;