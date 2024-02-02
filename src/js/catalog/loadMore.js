import listPoufs from "./loadMorePoufs/itemPoufs";

const existingUl = document.querySelector('.catalog-list');
const loadMoreBtn = document.querySelector('.btn-loadMore');

const itemsToShow = 8;
let itemShow = 0;

function showMoreTems() {
    const additionalItems = listPoufs.slice(itemShow, itemShow + itemsToShow);

    const itemsAdd = listPoufs.map(item => {
        const li = document.createElement('li');
        li.className = 'catalog-item';

        const article = document.createElement('article');
        article.innerHTML = `
    <img
    srcset="${item.srcset}"
    sizes="${item.sizes}"
    src="${item.src}"
    alt="${item.alt}"
  />
    `;

        li.appendChild(article);
        return li;
    });

    existingUl.append(...itemsAdd);

    itemShow += itemsToShow;

    if (itemShow >= listPoufs.length) {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', showMoreTems);



