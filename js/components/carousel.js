class Carousel {
    constructor(selector, blockCard, data, settings) {
        this.selector = selector;
        this.blockCard = blockCard;
        this.data = data;
        this.settings = settings;
        this.movingBlocksDOM = null;

        this.size = {
            mobile: 1,
            tablet: 1,
            desktop: 1,
        }

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return [true, 'ERROR'];
        }
        if (!this.isValidData()) {
            return [true, 'ERROR'];
        }
        if(!this.findTargetElement()) {
            return [true, 'ERROR'];
        }

        this.updateDefaultSettings();

        this.render();
    }

    isValidSelector() {
        return typeof this.selector === 'string' && this.selector !== '';
    }

    isValidData() {
        if (!this.isObject(this.data)
        || !Array.isArray(this.data.list)
        || this.data.list.length === 0) {
        return false;
    }
    return true;
    }

    findTargetElement() {
        this.movingBlocksDOM = document.querySelector(this.selector);
        return this.movingBlocksDOM ? true : false;
    }

    isObject(obj) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    updateDefaultSettings() {
        if (!this.isObject(this.settings)) {
            return false;
        }

        if (this.isObject(this.settings.size)) {
                if (Number.isInteger(this.settings.size.mobile) 
                    && this.settings.size.mobile > 0) {
                    this.size.mobile = this.settings.size.mobile;
                }
                if (Number.isInteger(this.settings.size.tablet) 
                    && this.settings.size.tablet > 0) {
                    this.size.tablet = this.settings.size.tablet;
                }
                if (Number.isInteger(this.settings.size.desktop) 
                    && this.settings.size.desktop > 0) {
                    this.size.desktop = this.settings.size.desktop;
                }
        }
    }

    
    listHTML() {
        let HTML = '';
        let copyCount = 0;

        for (const key in this.size) {
            if (copyCount < this.size[key]) {
                copyCount = this.size[key];
            }
        }
        
        const list = [
            ...this.data.list.slice(-copyCount),
            ...this.data.list,
            ...this.data.list.slice(0, copyCount),
        ];

        for (const item of list) {
            const card = new this.blockCard(item);
            HTML += `<div class="block">${card.render()}</div>`;
        }

        const width = list.length / this.size.desktop * 100;
        const trans = 100 / list.length * this.size.desktop;
        
        return `<div class="list-view">
                    <div class="list" 
                         style="transform: translateX(-${trans}%);
                                width: ${width}%;">
                        ${HTML}
                    </div>
                </div>`;
    }

    render() {
        const HTML = this.listHTML();
        this.movingBlocksDOM.innerHTML = HTML;
    }
}

export { Carousel }



