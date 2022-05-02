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
        this.previousNext = true;

        this.currentlyVisibleIndex = 0;
        this.originalListSize = this.data.list.length;
        this.listSize = 0;
        this.copyCount = 0;
        this.animationInAction = false;
        this.animationDurationInMiliseconds = 1000;

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
        this.action();
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
        if (typeof this.settings.previousNext === 'boolean') {
            this.previousNext = this.settings.previousNext;
        }
    }

    listHTML() {
        let HTML = '';
        let copyCount = 0;

        for (const key in this.size) {
            if (this.copyCount < this.size[key]) {
                this.copyCount = this.size[key];
            }
        }

        this.originalListSize = this.data.list.length;
        
        const list = [
            ...this.data.list.slice(-this.copyCount),
            ...this.data.list,
            ...this.data.list.slice(0, this.copyCount),
        ];

        for (const item of list) {
            const card = new this.blockCard(item);
            HTML += `<div class="block">${card.render()}</div>`;
        }

        this.listSize = list.length;
        this.currentlyVisibleIndex = this.size.desktop;
        const width = this.listSize / this.size.desktop * 100;
        const trans = 100 / this.listSize * this.currentlyVisibleIndex;

        return `<div class="list-view">
                    <div class="list" 
                         style="transform: translateX(-${trans}%);
                                width: ${width}%;">
                        ${HTML}
                    </div>
                </div>`;
    }

    actionsHTML() {
        if (!this.previousNext) {
            return '';
        }

        let leftAngleHTML = '';
        let rightAngleHTML = '';

        if (this.previousNext) {
            leftAngleHTML = '<i class="angle fa fa-angle-left"></i>';
            rightAngleHTML = '<i class="angle fa fa-angle-right"></i>';
        }

        return `<div class="action">
                    ${leftAngleHTML}
                    ${rightAngleHTML}
                </div>`;
    }

    render() {
        const HTML = this.listHTML() + this.actionsHTML();
        this.movingBlocksDOM.innerHTML = HTML;
    }

    action() {
        const listDOM = this.movingBlocksDOM.querySelector('.list');
        const nextDOM = this.movingBlocksDOM.querySelector('.fa-angle-right');
        const previousDOM = this.movingBlocksDOM.querySelector('.fa-angle-left');

        nextDOM.addEventListener('click', () => {
            if (!this.animationInAction) {
                this.currentlyVisibleIndex++;
                const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                listDOM.style.transform = `translateX(${trans}%)`;

                // teleportas i prieki
                if (this.currentlyVisibleIndex === this.originalListSize + this.copyCount) {
                    setTimeout(() => {
                        listDOM.style.transition = 'all 0s';
                        this.currentlyVisibleIndex = this.copyCount;
                        const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                        listDOM.style.transform = `translateX(${trans}%)`;
                        setTimeout(() => {
                            listDOM.style.transition = 'all 1s';
                        }, 16)
                    }, this.animationDurationInMiliseconds)
                }

                this.animationInAction = true;

                setTimeout(() => {
                    this.animationInAction = false;
                }, this.animationDurationInMiliseconds)
            }
        });

        previousDOM.addEventListener('click', () => {
            if (!this.animationInAction) {
                this.currentlyVisibleIndex--;
                const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                listDOM.style.transform = `translateX(${trans}%)`;

                // teleportas i gala
                if (this.currentlyVisibleIndex === 0) {
                    setTimeout(() => {
                        listDOM.style.transition = 'all 0s';
                        this.currentlyVisibleIndex = this.listSize - 2 * this.copyCount;
                        const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                        listDOM.style.transform = `translateX(${trans}%)`;
                        setTimeout(() => {
                            listDOM.style.transition = 'all 1s';
                        }, 16)
                    }, this.animationDurationInMiliseconds)
                }

                this.animationInAction = true;

                setTimeout(() => {
                    this.animationInAction = false;
                }, this.animationDurationInMiliseconds)
            }
        });
    }
}

export { Carousel }