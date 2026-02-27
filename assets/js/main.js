const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const header = document.querySelector('header.header');

if (scrollY > 80) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}

window.addEventListener('scroll', function () {
    if (this.scrollY > 80) {
        header.classList.add('active');
    } else {
        header.classList.remove('active')
    }
})

const bars = document.querySelector('.header-bars');
const menu = document.querySelector('.menu');

if (bars) {
    bars.onclick = () => {
        menu.classList.toggle('active');
        bars.classList.toggle('active');
    }
}

const accordions = document.querySelectorAll('.faq-accordion');

if (accordions) {
    accordions.forEach((item) => {
        const acc = item.querySelectorAll('.accordion');
        acc.forEach((accItem, accItemID) => {
            const accBtn = accItem.querySelector('.accordion-btn');
            const accBody = accItem.querySelector('.accordion-body__wrap');

            if (accItem.classList.contains('active')) {
                accBody.style.maxHeight = accBody.scrollHeight + 'px';
            }
        
            accBtn.addEventListener('click', () => {
                accItem.classList.toggle('active');
                accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
                acc.forEach((el, elID) => {
                    if (elID != accItemID) {
                        el.querySelector('.accordion-body__wrap').style.maxHeight = null;
                        el.classList.remove('active')
                    }
                })
            });
        })
    });
}

const offerList = document.querySelectorAll('.offer-list__item');
let count = 0;
const offerPrevBtn = document.querySelector('.offer-foot__right .prev-btn')
const offerNextBtn = document.querySelector('.offer-foot__right .next-btn')
const offerFraction = document.querySelector('.offer-foot__text');

if (offerList.length) {
    const activeSlide = (idx) => {
        console.log(count);
        offerList.forEach((item, itemIdx) => {
            if (itemIdx == idx) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
        offerFraction.innerHTML = `<span>${idx+1}</span><b>/</b><span>${offerList.length}</span>`;
    }

    activeSlide(count);

    offerPrevBtn.onclick = () => {
        count--;
        if (count < 0) {
            count = offerList.length - 1;
        }
        activeSlide(count)
    }

    offerNextBtn.onclick = () => {
        count++;
        if (count == offerList.length) {
            count = 0;
        }
        activeSlide(count)
    }
}