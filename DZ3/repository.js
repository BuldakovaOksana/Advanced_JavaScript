const reviewsKey = 'reviews';

function addReview(product, id, review){
    const reviews = JSON.parse(localStorage.getItem(reviewsKey));
    if (localStorage.getItem(reviewsKey)){
        const result = findByProductName(reviews, product);
        if (result === null){
            reviews.push({[product]:[{id, review}]});
            localStorage.setItem(reviewsKey, JSON.stringify(reviews));
        }else{
            result.push({id, review});
            localStorage.setItem(reviewsKey, 
                JSON.stringify(reviews));
        }
    }else{
        localStorage.setItem(reviewsKey, JSON.stringify([{[product]:[{ id, review}]}]));
    }
}


function getAllReviews(){
    return JSON.parse(localStorage.getItem(reviewsKey));
}

function removeReviewById(product, id){
    product = product.trim();
    let reviews = JSON.parse(localStorage.getItem(reviewsKey));
    for  (let i = 0; i < reviews.length; i++){
        if (reviews[i][product]){
            let temp = {};
            reviews[i][product].forEach(item => {
                if(item.id === +id)
                    temp = item;
            });
            reviews[i][product] = reviews[i][product].filter((e) => e.id !== +id); 
            clearElement(reviews)
            localStorage.setItem(reviewsKey, JSON.stringify(reviews));
        }
    }
}

function clearElement(reviews){
    reviews.forEach(el => {
        if (el[Object.keys(el)[0]].length === 0){
            reviews.splice(reviews.indexOf(el), 1)
        }
    });
    return reviews;
}

function findByProductName(reviews, product){
    let set = new Set;
    reviews.forEach(el => {
        for (let key in el){
            if (key === product){
                set.add(el[key]);
            }
        }
    })
    if (set.size > 0) {
        let temp = [];
        set.forEach(el => {temp.push(el)});
        console.log(temp[0])
        return temp[0];
    }
    else return null;
}

function getReviewsByProductName(product){
    const temp = [];
    const reviews = JSON.parse(localStorage.getItem(reviewsKey));
    outer:for(let i = 0; i < reviews.length; i++) {
        for(let key in reviews[i]){
            if(key === product){
                temp.push(reviews[i][key]);
                break outer;
            }
        }
    }
    return temp[0];
}

function findProductById(id){
    let temp = [];
    const reviews = JSON.parse(localStorage.getItem(reviewsKey));
    outer:for(let i = 0; i < reviews.length; i++) {
        for(let key in reviews[i]){
            console.log(reviews[i][key])
            if(key.id === id){
                temp.push(reviews[i][key]);
                break outer;
            }
        }
    }
    return temp[0]; 
}