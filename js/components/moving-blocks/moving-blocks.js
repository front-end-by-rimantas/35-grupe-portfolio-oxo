/*
function renderBlocks(selector, data){
    // susirasome privalomus ir neprivalumus raktus objekte
    const privalomi = ['className', 'decript', 'ceoName', 'title']
    const neprivalomi = ['icon']
    // pasidarom masyva, kur israsyti privalomi ir neprivalomi laukai
    const objektoRaktai = [...privalomi, ...neprivalomi];
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
        // sukuriam cikla, ir einame per objekta, kuri gavome. Tikriname ar gauti raktai objekte turi jam priklausyti
        let teisingasObjektas = true;
        for (const vienasRaktas of raktai) {
            if (!objektoRaktai.includes(vienasRaktas)) {
                teisingasObjektas = false;
                break;
            }
        }
        //ir galiausiai, jei nera teisingas objektas tada continue, mes ji ignoruojame
        if (!teisingasObjektas) {
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
        if (typeof item.className !== 'string' || item.className.trim() === '') {
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

        //Jei gauname visiskai bloga masyva: html liek turcias, mes sakom kad yra klaida
        if (HTML === '') {
            return [true, 'Duomenyse nerasta nei vieno teisingo objekto'];
        }
        
    DOM.innerHTML = HTML;
    // Ka spausdinti kai yra gerai, naudojam error first
    return [false, 'OK'];

}
export { renderBlocks };
*/

class BlockCard {
    constructor(data) {
        this.data = data;
    }

    isValidData() {
        if (typeof this.data !== 'object'
            || this.data === null
            || Array.isArray(this.data)
            || typeof this.data.icon !== 'string'
            || this.data.icon === ''
            || typeof this.data.decript !== 'string'
            || this.data.decript === ''
            || typeof this.data.ceoName !== 'string'
            || this.data.ceoName === ''
            || typeof this.data.title !== 'string'
            || this.data.title === '') {
                return false;
            }
        return true;
    }

    render() {
        return `<div class="blockCard block-box">
                    <i class="fa fa-${this.data.icon} block-quote" aria-hidden="true"></i>
                    <p class="block-description">${this.data.decript}</p>
                    <h4 class="block-h4-title sm">${this.data.ceoName}</h4>
                    <p class="block-CEO">${this.data.title}</p>
                </div>`
    }
}

export { BlockCard }