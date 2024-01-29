import listPoufs from './loadMorePoufs/itemPoufs';

const btnLoadMore = document.querySelector('.btn-loadMore');
const addListPoufs = document.querySelector('.catalog-list');

btnLoadMore.addEventListener('click', function () {
    addListPoufs.computedStyleMap.display = 'block';
    const newListTest = document.createElement('ul');
    newListTest.innerHTML = listPoufs;
    addListPoufs.appendChild(newListTest);
})