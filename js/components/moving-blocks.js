function renderBlocks(selector, data){
    // susirasome privalomus ir neprivalumus raktus objekte
    const privalomi = ['decript', 'ceoName', 'title']
    const neprivalomi = ['icon']
    // suskaiciuojam kiek yra abieju raktu tipu
    const minimalusRaktuSkaicius = privalomi.length;
    const maxRaktuSkaicius = minimalusRaktuSkaicius + neprivalomi.length;

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
        if (raktai.length < minimalusRaktuSkaicius || raktai.length > maxRaktuSkaicius) {
            continue;
        }
        //Tikrinam ar objecte yra visi privalomi raktazodziai
        // 1. Tikrinam ar decript, title ir ceoName yra stringas ir jis nera tuscias, bei uzdedam trim( kad negeneruotu nereikalingo turinio)
        if (typeof item.title !== 'string' || item.title.trim() === '') {
            continue
        }
        if (typeof item.decript !== 'string' || item.decript.trim() === '') {
            continue
        }
        if (typeof item.ceoName !== 'string' || item.ceoName.trim() === '') {
            continue
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