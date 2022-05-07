
let count = 0;
let images = [];
let time = 3000;

images[0] = 'https://images-static.nykaa.com/uploads/07ad7e75-7d08-4efc-98dd-46c8955f5c0b.jpg?tr=w-1200,pr-true';
images[1] = 'https://images-static.nykaa.com/uploads/267c7b04-d4ac-458e-83b8-20ccbb89a3d6.jpg?tr=w-1200,pr-true';
images[2] = 'https://images-static.nykaa.com/uploads/0d72d5ee-fbcc-4a63-b23d-98356c48aac0.gif?tr=w-1200,pr-true';
images[3] = 'https://images-static.nykaa.com/uploads/af0ba06d-b250-476c-a5eb-0449f2923b95.jpg?tr=w-1200,pr-true';
images[4] = 'https://images-static.nykaa.com/uploads/0d72d5ee-fbcc-4a63-b23d-98356c48aac0.gif?tr=w-1200,pr-true';
images[5] = 'https://images-static.nykaa.com/uploads/0d72d5ee-fbcc-4a63-b23d-98356c48aac0.gif?tr=w-1200,pr-true';
function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1)
  {
    count++
  }
  else
  {
    count = 0;
  }
  setTimeout('slidingShows()', time)

}
window.onload = slidingShows;



const makeup = [
  {
      name : "Nykaa SkinShield Anti-Pollution Matte Foundation",
      price: '479',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/5/3/532dca28904245707972_rev1.jpg',
      rating: '4.5',
      discount: "18% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :393",
  },
  {
      name : "Maybelline New York Super Stay Full Coverage",
      price: '750',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685784.1_1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :600",
  },
  {
      name : "Lakme Absolute Skin Natural Mousse Mattreal ",
      price: '499',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/3/23038_h-8901030462009m_1.jpg',
      rating: '4.8',
      discount: "15% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :424",
  },
  {
      name : "Huda Beauty Fauxfillter ",
      price: '3300',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/3/23303cdhudab00000154_new_1.jpg',
      rating: '4.5',
      discount: "25% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :2475",
  },
  {
      name : "Kay Beauty Hydrating ",
      price: '1020',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/d/4db3f418904330902558_1.jpg',
      rating: '4.2',
      discount: "15% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :867",
  },
  {
      name : "e.l.f Cosmetics Flawless ",
      price: '550',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/0/609332813748_1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :440",
  },
  {
      name : "Revlon Touch & Glow  ",
      price: '489',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/6/46465cfrev_tngmoisturepowder__1_.jpg',
      rating: '4.5',
      discount: "12% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :431",
  },
  {
      name : "Maybelline New York Fit Me ",
      price: '549',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395742203.1_1_1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :441",
  },
  {
      name : "M.A.C Studio Fix Powder Plus ",
      price: '2900',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/a/8a6629amac_stufpow_rv__1.jpg',
      rating: '4.5',
      discount: "15% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :2465",
  },
  {
      name : "M.A.C Studio Fix Fluid SPF 15",
      price: '290',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/a/5/a5ca29amac_studfixflud_rv__1.jpg',
      rating: '4.5',
      discount: "10% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :271",
  },
  {
      name : "Maybelline New York Fit ",
      price: '475',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685845.1_1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :380",
  },
  {
      name : "L.A Girl Conceal ",
      price: '695',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554259247-1_1.jpg',
      rating: '4.5',
      discount: "15% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :591",
  },
  {
      name : "Maybelline New York Fit Me",
      price: '299',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/e/7eda7a5mny_mplfou_newimg_1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :239",
  },
  {
      name : "Maybelline New York Fit Me 12Hr",
      price: '129',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/a/6a7b2388901526584079_1.jpg',
      rating: '4.5',
      discount: "10% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :116",
  },
  {
      name : "M.A.C Prep + Prime Fix +",
      price: '1900',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/f/d/fd6c29amac_prmpfx_rv__1.jpg',
      rating: '4.5',
      discount: "20% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :1520",
  },
  {
      name : "Lakme 9 to 5 Weightless Matte Mousse ",
      price: '338',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/4/24023_h-8901030654312_1_1.png',
      rating: '4.5',
      discount: "11% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :301",
  },
  {
      name : "Lakme Complexion Care Face CC ",
      price: '269',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/l/a/lakme_ccfcrm.jpg',
      rating: '4.5',
      discount: "10% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :242",
  },
  {
      name : "Maybelline New York Fit me Loose",
      price: '695',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554503036.1_1.jpg',
      rating: '4.5',
      discount: "18% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :570",
  },

  {
      name : "Swiss Beauty Long Lasting Makeup",
      price: '249',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/3/9/39000098904325001211_1.jpg',
      rating: '4.5',
      discount: "10% off",
      button: "Add to Bag",
      pricefinal : "Premium Price :224",
  },
{    name : "Kay Beauty Hydrating ",
price: '1020',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/d/4db3f418904330902558_1.jpg',
rating: '4.2',
discount: "15% off",
button: "Add to Bag",
pricefinal : "Premium Price :867",
},
{
name : "e.l.f Cosmetics Flawless ",
price: '550',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/0/609332813748_1.jpg',
rating: '4.5',
discount: "20% off",
button: "Add to Bag",
pricefinal : "Premium Price :440",
},
{
name : "Revlon Touch & Glow  ",
price: '489',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/6/46465cfrev_tngmoisturepowder__1_.jpg',
rating: '4.5',
discount: "12% off",
button: "Add to Bag",
pricefinal : "Premium Price :431",
},
{
name : "Maybelline New York Fit Me ",
price: '549',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395742203.1_1_1.jpg',
rating: '4.5',
discount: "20% off",
button: "Add to Bag",
pricefinal : "Premium Price :441",
},
{
name : "M.A.C Studio Fix Powder Plus ",
price: '2900',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/a/8a6629amac_stufpow_rv__1.jpg',
rating: '4.5',
discount: "15% off",
button: "Add to Bag",
pricefinal : "Premium Price :2465",
},
{
name : "M.A.C Studio Fix Fluid SPF 15",
price: '290',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/a/5/a5ca29amac_studfixflud_rv__1.jpg',
rating: '4.5',
discount: "10% off",
button: "Add to Bag",
pricefinal : "Premium Price :271",
},
{
name : "Maybelline New York Fit ",
price: '475',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685845.1_1.jpg',
rating: '4.5',
discount: "20% off",
button: "Add to Bag",
pricefinal : "Premium Price :380",
},
{
name : "L.A Girl Conceal ",
price: '695',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554259247-1_1.jpg',
rating: '4.5',
discount: "15% off",
button: "Add to Bag",
pricefinal : "Premium Price :591",
},
{
name : "Maybelline New York Fit Me",
price: '299',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/e/7eda7a5mny_mplfou_newimg_1.jpg',
rating: '4.5',
discount: "20% off",
button: "Add to Bag",
pricefinal : "Premium Price :239",
},
{
name : "Maybelline New York Fit Me 12Hr",
price: '129',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/a/6a7b2388901526584079_1.jpg',
rating: '4.5',
discount: "10% off",
button: "Add to Bag",
pricefinal : "Premium Price :116",
},
{
name : "M.A.C Prep + Prime Fix +",
price: '1900',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/f/d/fd6c29amac_prmpfx_rv__1.jpg',
rating: '4.5',
discount: "20% off",
button: "Add to Bag",
pricefinal : "Premium Price :1520",
},
{
name : "Lakme 9 to 5 Weightless Matte Mousse ",
price: '338',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/2/4/24023_h-8901030654312_1_1.png',
rating: '4.5',
discount: "11% off",
button: "Add to Bag",
pricefinal : "Premium Price :301",
},
{
name : "Lakme Complexion Care Face CC ",
price: '269',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/l/a/lakme_ccfcrm.jpg',
rating: '4.5',
discount: "10% off",
button: "Add to Bag",
pricefinal : "Premium Price :242",
},
{
name : "Maybelline New York Fit me Loose",
price: '695',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/4/1/41554503036.1_1.jpg',
rating: '4.5',
discount: "18% off",
button: "Add to Bag",
pricefinal : "Premium Price :570",
},

{
name : "Swiss Beauty Long Lasting Makeup",
price: '249',
image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/3/9/39000098904325001211_1.jpg',
rating: '4.5',
discount: "10% off",
button: "Add to Bag",
pricefinal : "Premium Price :224",
},
]
const makeup_json = JSON.stringify(makeup);
    localStorage.setItem("MyMedicine", makeup_json);
    let med = localStorage.getItem("MyMedicine");
    med = JSON.parse(med);

    function medProduct(){
        let div_data = document.getElementById("data");
        
        med.forEach(function(products) {
            let div = document.createElement('div');
            let pricecart = document.createElement('div');

            let m_name = document.createElement('h4');
            m_name.innerText = products.name;

            let m_price = document.createElement('b');
            m_price.innerText = '₹'+ products.price;

            let m_button = document.createElement('button');
            m_button.innerHTML = "🛒 ADD";
            m_button.onclick = function (){
                addtocart(products);
            };

            let m_discount = document.createElement('h5');
            m_discount.innerText = products.discount;

            let image = document.createElement('img');
            image.src = products.image;

            let m_pricefinal = document.createElement('h6');
            m_pricefinal.innerText = products.pricefinal;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = '★ ' + products.rating;

            pricecart.append(m_price, m_button)
            div.append(image,m_discount,m_name, m_rating, pricecart, m_pricefinal);
            div_data.append(div);

        });
    }

medProduct();


if (localStorage.getItem("cart") === null)
{
  localStorage.setItem("cart", JSON.stringify([]));
}
function addtocart(p) {
  let cart_data = JSON.parse(localStorage.getItem("cart"));
  cart_data.push(p);
  localStorage.setItem("cart", JSON.stringify(cart_data));
}