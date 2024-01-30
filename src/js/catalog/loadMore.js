import listPoufs from './loadMorePoufs/itemPoufs';

const poufContainer = document.querySelector('.pouflist');

const itemsToShow = 4;
let itemsShow = 0;

function showMoreItems() {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = listPoufs;

    // Конвертуємо NodeList у масив
    const additionalItems = Array.from(tempContainer.children).slice(itemsShow, itemsShow + itemsToShow);

    additionalItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'catalog-item';
        li.innerHTML = item.innerHTML; // Використовуємо innerHTML для отримання HTML-коду елемента
        poufContainer.appendChild(li);
    })

    itemsShow += itemsToShow;

    if (itemsShow >= listPoufs.length) {
        document.querySelector('.btn-loadMore').style.display = 'none';
    }
}

document.querySelector(".btn-loadMore").addEventListener('click', showMoreItems);