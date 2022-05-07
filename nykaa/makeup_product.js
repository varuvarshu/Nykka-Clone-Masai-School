const  proteins  = [
    {
        name : "Nykaa SkinShield Anti-Pollution Matte Foundation",
        price: '479',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/5/3/532dca28904245707972_rev1.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Super Stay Full Coverage",
        price: '750',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685784.1_1.jpg',
        rating: '4.5',
    },
    {
        name : "Lakme Absolute Skin Natural Mousse Mattreal ",
        price: '499',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/3/23038_h-8901030462009m_1.jpg',
        rating: '4.8',
    },
    {
        name : "Huda Beauty Fauxfillter ",
        price: '3300',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/3/23303cdhudab00000154_new_1.jpg',
        rating: '4.5',
    },
    {
        name : "Kay Beauty Hydrating ",
        price: '1020',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/d/4db3f418904330902558_1.jpg',
        rating: '4.2',
    },
    {
        name : "e.l.f Cosmetics Flawless ",
        price: '550',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/0/609332813748_1.jpg',
        rating: '4.5',
    },
    {
        name : "Revlon Touch & Glow  ",
        price: '489',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/6/46465cfrev_tngmoisturepowder__1_.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Fit Me ",
        price: '549',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395742203.1_1_1.jpg',
        rating: '4.5',
    },
    {
        name : "M.A.C Studio Fix Powder Plus ",
        price: '2900',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/a/8a6629amac_stufpow_rv__1.jpg',
        rating: '4.5',
    },
    {
        name : "M.A.C Studio Fix Fluid SPF 15",
        price: '290',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/a/5/a5ca29amac_studfixflud_rv__1.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Fit ",
        price: '475',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685845.1_1.jpg',
        rating: '4.5',
    },
    {
        name : "L.A Girl Conceal ",
        price: '695',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554259247-1_1.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Fit Me",
        price: '299',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/e/7eda7a5mny_mplfou_newimg_1.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Fit Me 12Hr",
        price: '129',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/a/6a7b2388901526584079_1.jpg',
        rating: '4.5',
    },
    {
        name : "M.A.C Prep + Prime Fix +",
        price: '1900',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/f/d/fd6c29amac_prmpfx_rv__1.jpg',
        rating: '4.5',
    },
    {
        name : "Lakme 9 to 5 Weightless Matte Mousse ",
        price: '338',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/4/24023_h-8901030654312_1_1.png',
        rating: '4.5',
    },
    {
        name : "Lakme Complexion Care Face CC ",
        price: '269',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/l/a/lakme_ccfcrm.jpg',
        rating: '4.5',
    },
    {
        name : "Maybelline New York Fit me Loose",
        price: '695',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554503036.1_1.jpg',
        rating: '4.5',
    },

    {
        name : "Swiss Beauty Long Lasting Makeup",
        price: '249',
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/3/9/39000098904325001211_1.jpg',
        rating: '4.5',
    },

]

const proteins_str = JSON.stringify(proteins);

localStorage.setItem('proteins_json', proteins_str);

let proteins_local = localStorage.getItem('proteins_json');
proteins_parse = JSON.parse(proteins_local)
console.log(proteins_parse)

div_data = document.getElementById('items');

function showProteins() {
    proteins_parse.forEach(function(product){
        
        let div = document.createElement('div');
        let price_quick = document.createElement('div')

        let p_name = document.createElement('b');
        p_name.innerHTML = product.name;

        let p_price = document.createElement('span')
        p_price.innerHTML = '₹' + product.price;

        let p_image = document.createElement('img')
        p_image.src = product.image;

        let p_rating = document.createElement('span')
        p_rating.innerHTML = '★ '+ product.rating;

        let quick_btn = document.createElement('button')
        quick_btn.innerText = 'Buy';
        quick_btn.style.height = '42px';
        quick_btn.onclick = function () {
            location.href = "checkout.html";
         };

        let wish_btn = document.createElement('button')
         wish_btn.innerText = '♡';
        wish_btn.onclick = function () {
            addtoWish(product)
            wish_btn.style.color = 'red';
         };
        price_quick.append(p_price, quick_btn);
        div.append(wish_btn, p_image, p_name, p_rating, price_quick);

        div_data.append(div)

    });
} showProteins()

if(localStorage.getItem("wish")===null){
    localStorage.setItem("wish", JSON.stringify([]));
}

function addtoWish(p){
     let wish_data = JSON.parse(localStorage.getItem("wish"));
     wish_data.push(p);
     localStorage.setItem("wish", JSON.stringify(wish_data));

}
