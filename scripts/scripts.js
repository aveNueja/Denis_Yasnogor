const createBtn = document.querySelector('.add');
const nftContainer = document.querySelector('.nft-container');

let cards = [];
createBtn.addEventListener('click', () => {
    createCard();
    renderCard();

    console.log(cards);
});


function getRandomNft() {
    const names = ['NFT Submasive'];
    const description = ['Price 1000$'];
    return {
        name: names[Math.floor(Math.random() * names.length - 1) + 1],
        description: description[Math.floor(Math.random() * names.length - 1) + 1],
        cardID: getRandomId(),
        link: 'https://random.imagecdn.app/500/500',
    }
}

function deleteCard(cardID) {

    cards = cards.filter((el) => el.cardID !== cardID)
    renderCard();
}

function createCard() {
    cards.push(getRandomNft());
}

function getRandomId() {
    return Math.floor(Math.random() * 100000);

}
function renderCard() {

    let result = '';
    for (let i = 0; i < cards.length; i++) {
        result += `<div class="nft__card">
                 <div class="nft__card delete">
                        <button class="btn__basket" onclick="deleteCard(${cards[i].cardID})" type="button">
                            <img src="img/basket.png" alt="png">
                         </button>
                      </div>
                    <div class="nft__card__cont">
                    <div class="card__name">${cards[i].name}</div>
                    <img src="${cards[i].link}" alt="">
                    <div class="card__description">${cards[i].description}</div>
                    </div>
                 </div>`
    }

    nftContainer.innerHTML = result;
}