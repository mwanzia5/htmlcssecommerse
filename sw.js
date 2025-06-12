self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(
                [
                    "./",
                    "./styles.css",
                    "./images/logoipsum-custom-logo.svg",
                    "./images/cart.png",
                    "./images/menu.png",
                    "./images/Fashion_Show_Elegance-removebg-preview.png",
                    "./images/Elegant High-Heeled Shoe in Luxurious Setting.jpeg",
                    "./images/Luxury Handbag Display.jpeg",
                    "./images/kaitlan-balsam-3q3HlDjKRp8-unsplash.jpg",
                    "./images/Elegant Leather Bags.jpeg",
                    "./images/Red Handbag in Turquoise Seawater.jpeg",
                    "./images/Translucent Green Handbag.jpeg",
                    "./images/Monochromatic Tote Bag Display.jpeg",
                    "./images/latest1.jpg",
                    "./images/latest2.jpg",
                    "./images/latest3.jpg",
                    "./images/latest4.jpg",
                    "./images/latest5.jpg",
                    "./images/latest6.jpg",
                    "./images/latest7.jpg",
                    "./images/latest8.jpg",
                    "./images/create_an_image_with_one_fancy_shoe__one_fancy_hat__and_one_fancy_handbag-removebg-preview.png",
                    "./images/user-1.png",
                    "./images/user-3.png",
                    "./images/user-2.png",
                    "./images/logo-godrej.png",
                    "./images/logo-philips.png",
                    "./images/logo-oppo.png",
                    "./images/logo-coca-cola.png",
                    "./images/logo-paypal.png",
                    "./images/play-store.png",
                    "./images/app-store.png",



                ]
                )
        })
    )
});

self.addEventListener("fetch",e => {
    e.respondWith(
       caches.match(e.request).then(response => {
        return response || fetch(e.request);
       })
    );
})
