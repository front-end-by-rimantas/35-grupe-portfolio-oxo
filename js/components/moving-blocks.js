function renderBlocks(selector, data){
    // Tikrinu ar slectorius yra stringas ir ar jis yr ne tuscias
    if (typeof selector !== 'string' || selector === '') {
        return [true, 'Selector turi buti stringas ir jis turi buti ne tuscias'];
    }

    const DOM = document.querySelector(selector);
    // Bandome rasti elementa ir paklausti ar ji pavyko rasti is emes DOM = NULL
    if (!DOM) {
        return [true, 'Pagal si selector nepavyko rasti elemento!'];
    }
    // Tikrinam ar pateikti duomenys (data) yra teisingo tipo
    // klausiame ar pateikta data - nera array ir ar masyvas nera tuscias
    if (!Array.isArray(data) || data.length === 0) {
        return [true, 'Duomenys turi buti masyve ir turi buti ne tuscias!'];
    }
 
    let HTML = '';

    for (const item of data) {
        // Tikrinam ar mums paduoti item yra Tikri objektai, ar item nera 'null' ir ar jis nera array
        if (typeof item !== 'object'
            || Array.isArray(item)
            || item === null) {
            continue
        }
        // Kadangi tai yra TIKRAS objectas, pabandome issitraukti raktus masyvo forma (Keys)
        const raktai = Object.keys(item);
        //Tikriname kiek raktazodziu yra objekte ir kurie yra privalomi
        if (raktai.length < 2 || raktai.length > 3) {
            
        }
        
        HTML += `
        <div class="${item.className} block-box">
            <i class="fa fa-${item.icon} block-quote" aria-hidden="true"></i>
            <p class="block-description">${item.decript}</p>
            <h4 class="block-h4-title sm">${item.ceoName}</h4>
            <p class="block-CEO">${item.title}</p>
        </div>`
        }
    DOM.innerHTML = HTML;
    // Ka spausdinti kai yra gerai, naudojam error first
    return [false, 'OK'];

}
export { renderBlocks };