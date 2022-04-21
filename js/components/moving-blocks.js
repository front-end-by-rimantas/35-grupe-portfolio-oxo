function renderBlocks(selector, data){
    const DOM = document.getElementsByClassName(selector);
    let HTML = '';

    for (const item of data) {
        HTML += `
        <i class="fa fa-${item.icon} block-quote" aria-hidden="true"></i>
        <p class="block-description">${item.decript}</p>
        <h4 class="block-h4-title sm">${item.ceoName}</h4>
        <p class="block-CEO">${item.title}</p>`
    }
    DOM.innerHTML = HTML;
}
export { renderBlocks };