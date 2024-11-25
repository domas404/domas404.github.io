const technicalSkillMap = [
    { skill: 'html', score: 4 },
    { skill: 'css', score: 4 },
    { skill: 'javascript', score: 4 },
    { skill: 'typescript', score: 3 },
    { skill: 'react', score: 3 },
    { skill: 'next', score: 3 },
    { skill: 'php', score: 2 },
    { skill: 'sql', score: 4 },
    { skill: 'python', score: 3 },
    { skill: 'figma', score: 3 },
];

const generalSkillMap = [
    { skill: 'problem', score: 2 },
    { skill: 'research ', score: 3 },
    { skill: 'detail', score: 1 },
    { skill: '???', score: 4 },
    { skill: '???', score: 2 },
];

class SkillPanel {
    tab = 'technical';
    skillTypeMap = technicalSkillMap;
    page = 1;

    constructor() { 
        this.skillLabels = document.querySelectorAll('.skill-label');
        this.skillBars = document.querySelectorAll('.skill-bar');
        this.maxPages = {
            technical: Math.ceil(technicalSkillMap.length / 5),
            general: Math.ceil(generalSkillMap.length / 5)
        }
    }

    changeContent() {
        const jMin = (this.page-1) * 5;
        const jMax = this.skillTypeMap.length < this.page*5 ? this.skillTypeMap.length : this.page*5;
        let j = jMin;
        for (let i=0; i<5; i++) {
            this.skillLabels[i].innerHTML = '' + this.skillTypeMap[j].skill;

            const classes = Array.from(this.skillBars[i].classList);
            const classToRemove = classes.filter((item) => item.startsWith('bar'));
            this.skillBars[i].classList.remove(classToRemove[0]);
            this.skillBars[i].classList.add(`bar-${this.skillTypeMap[j].score}`);

            if (j < jMax)
                j++;
        }
    }

    updateTabStyle() {
        const generalTab = document.querySelector('#general-tab');
        const technicalTab = document.querySelector('#technical-tab');
        if (technicalTab.classList.contains('tab-selected')) {
            technicalTab.classList.remove('tab-selected');
            generalTab.classList.add('tab-selected');
        } else {
            generalTab.classList.remove('tab-selected');
            technicalTab.classList.add('tab-selected');
        }
    }

    addClass(element, className) {
        if (!element.classList.contains(className))
            element.classList.add(className);
    }

    removeClass(element, className) {
        if (element.classList.contains(className))
            element.classList.remove(className);
    }

    updateArrows() {
        const arrowBack = document.querySelector('#arrow-back');
        const arrowForward = document.querySelector('#arrow-forward');

        if (this.page === 1) {
            this.addClass(arrowBack, 'no-actions');
            if (this.page === this.maxPages[this.tab]) {
                this.addClass(arrowForward, 'no-actions');
            } else {
                this.removeClass(arrowForward, 'no-actions');
            }
        } else {
            this.removeClass(arrowBack, 'no-actions');
            if (this.page === this.maxPages[this.tab]) {
                this.addClass(arrowForward, 'no-actions');
            } else {
                this.removeClass(arrowForward, 'no-actions');
            }
        }
    }

    changeTab(tab) {
        if (this.tab === tab) {
            return;
        }
        else {
            this.tab = tab;
            this.page = 1;
            this.skillTypeMap = tab === 'technical' ? technicalSkillMap : generalSkillMap;
            this.changeContent();
            this.updateTabStyle();
            this.updateArrows();
        }
    }

    moveToNextPage() {
        if (this.page < this.maxPages[this.tab]) {
            this.page++;
            this.changeContent();
            this.updateArrows();
        }
    }

    moveToPreviousPage() {
        if (this.page > 1) {
            this.page--;
            this.changeContent();
            this.updateArrows();
        }
    }
}

const skills = new SkillPanel('technical', 1);

function switchToGeneral() {
    skills.changeTab('general');
}

function switchToTechnical() {
    skills.changeTab('technical');
}

function moveToNextPage() {
    skills.moveToNextPage();
}

function moveToPreviousPage() {
    skills.moveToPreviousPage();
}
