const productList = document.querySelector('.product_list');
let message = 'показать отзывы';

const reviews = getAllReviews();

if (reviews){
    reviews.forEach(review => {
        let product = getProductNameByReview(review);
        renderProductContentHtml(product);
    });
}

function renderProductContentHtml(product){
    const productId = Date.now();
    productList.innerHTML += `
        <li id="${productId}" class="product">
            <h4 id="product_${productId}" class="product__title">${product}
               
            </h4>
            <button id="toggle_${productId}" class="product__toggle">${message}</button>
        </li>
        <li id="li_${productId}" >.............................................................................................................................</li>
    `
    const reviewByProductName = getReviewsByProductName(product)
    reviewByProductName.forEach(el => {
        renderRaviewByProductName(product, productId, el.review, el.id)
    })
}

function renderRaviewByProductName(product, id, review, reviewId){
    document.getElementById(`product_${id}`).innerHTML += `
        <div hidden id="review_${reviewId}" class="review__content">
            <p class="review__id" hidden>id: ${reviewId}</p>
            <p class="review__comment">Комментарий:</p>
            <p class="review__text">${review}</p>  
            <button id="clear_${reviewId}" class="clear">Удалить отзыв</button>
            <p>.....................................................</p>  
        </div> 
    `
}

function getProductNameByReview(review){
    let temp = [];
    for(let key in review){
        temp.push(key);
    } 
    return temp[0];
}

function getProductNameByIdReview(id){
    const review = document.getElementById(id)
    const productId = review.parentNode.parentNode.getAttribute('id');
    let product = document.getElementById(`product_${productId}`).firstChild;
    return product.textContent;
}

document.querySelectorAll('.clear').forEach(el => {
    el.addEventListener('click', (e) => {
        let idBtn = e.target.id;
        let elId = idBtn.trim().split('_')[1];
        let product = getProductNameByIdReview(`review_${elId}`);
        let productEl = document.getElementById(`review_${elId}`);
        removeReviewById(product, elId);
        deleteHtml(productEl, e.target.id);
    });
});

document.querySelectorAll(".product__toggle").forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.textContent === message ? 
            e.target.textContent = 'скрыть отзывы' :
            e.target.textContent = message;

        let elId = el.id.trim().split('_')[1];
        elId = `product_${elId}`;
    
        document.getElementById(elId).querySelectorAll('div').forEach(item =>{
            document.getElementById([item.id]).classList.toggle('active');
        });
    });
});


function deleteHtml(product, id){
    let titleId = product.parentNode.getAttribute('id');
    let productId = titleId.trim().split('_')[1];
    let titleClassName = document.getElementById(titleId).className;
    let titleEl = document.getElementById(titleId)
    if (titleEl.querySelectorAll('div').length === 1){
        const li =  document.querySelector(`#li_${productId}`);
        document.getElementById(productId).remove();
        li.remove();
    }else{
        let elId = id.trim().split('_')[1];
        elId = `review_${elId}`;
        document.getElementById(elId).remove();
    }
}