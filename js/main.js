// SCROLL-SMOOTH
jQuery(document).ready(function (){
   $("a[rel='m_PageScroll2id']").mPageScroll2id({
      offset:120
   });
});

// Custom-Select
 let select = function () {
   let selectHeader = document.querySelectorAll('.select__header');
   let selectItem = document.querySelectorAll('.select__item');
   let selectCurrent = document.querySelector('.select__current');

   selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
   });

   selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
   });

   function selectToggle() {
      this.parentElement.classList.toggle('is-active');
   }

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

      let itemId = this.getAttribute('id');
      window.location.hash = itemId;
      window.location.reload();  

      // Збереження значення id у localStorage
      localStorage.setItem('selectedItemId', itemId);
   }

   window.addEventListener('DOMContentLoaded', function () {
      let hash = window.location.hash.substring(1);
      if (!hash) {
         // Якщо хеш не встановлено, встановлюємо значення id="ua"
         window.location.hash = 'ua';
         hash = 'ua';
      }

      let selectedItem = document.getElementById(hash);
      if (selectedItem) {
         let selectedText = selectedItem.innerText;
         selectCurrent.innerText = selectedText;
         // Збереження значення id у localStorage при завантаженні сторінки
         localStorage.setItem('selectedItemId', hash);
      } else {
         // Якщо хеш не відповідає жодному елементу select__item, встановлюємо дефолтне значення id
         window.location.hash = 'ua';
         selectCurrent.innerText = 'UA';
         localStorage.setItem('selectedItemId', 'ua');
         window.location.reload();
      }

      for (let key in langArr) {
         document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
         let elem = document.querySelector('.lng-' + key);
         if (elem) {
            elem.innerHTML = langArr[key][hash];
         }
         if (key === undefined) {
            elem.innerHTML = langArr[key][hash];
            window.location.reload();
         }
      }
   });
};
select();

// Sticky-header
(function () {
   const header = document.querySelector('.header');
   window.onscroll = () => {
      if (window.pageYOffset > 50) {
         header.classList.add('header_active');
      }
      else {
         header.classList.remove('header_active');
      }
   };
}());

// servicesTable-change 
(function () {
   const firstTable = document.querySelector('.first');
   const secondTable = document.querySelector('.second');
   const thirdTable = document.querySelector('.third');
   const fourthTable = document.querySelector('.fourth');
   const firstPage = document.querySelector('.page1');
   const secondPage = document.querySelector('.page2');
   const thirdPage = document.querySelector('.page3');
   const fourthPage = document.querySelector('.page4');
   
   firstPage.addEventListener('click', () => {
      firstPage.classList.add('page1-background');
      secondPage.classList.remove('page1-background');
      thirdPage.classList.remove('page1-background');
      fourthPage.classList.remove('page1-background');

      firstTable.classList.remove('first-page');
      firstTable.classList.remove('first');
      secondTable.classList.add('second');
      thirdTable.classList.add('third');
      fourthTable.classList.add('fourth');
   });

   secondPage.addEventListener('click', () => {
      firstPage.classList.remove('page1');
      firstPage.classList.remove('page1-background');
      thirdPage.classList.remove('page1-background');
      fourthPage.classList.remove('page1-background');
      secondPage.classList.add('page1-background');

      secondTable.classList.remove('second');
      firstTable.classList.add('first-page');
      thirdTable.classList.add('third');
      fourthTable.classList.add('fourth');
   });

   thirdPage.addEventListener('click', () => {
      firstPage.classList.remove('page1');
      firstPage.classList.remove('page1-background');
      secondPage.classList.remove('page1-background');
      thirdPage.classList.add('page1-background');
      fourthPage.classList.remove('page1-background');

      thirdTable.classList.remove('third');
      firstTable.classList.add('first-page');
      secondTable.classList.add('second');
      fourthTable.classList.add('fourth');
   });
   
   fourthPage.addEventListener('click', () => {
      firstPage.classList.remove('page1');
      firstPage.classList.remove('page1-background');
      secondPage.classList.remove('page1-background');
      thirdPage.classList.remove('page1-background');
      fourthPage.classList.add('page1-background');

      firstTable.classList.add('first-page');
      secondTable.classList.add('second');
      thirdTable.classList.add('third');
      fourthTable.classList.remove('fourth');
   });
  
}())






