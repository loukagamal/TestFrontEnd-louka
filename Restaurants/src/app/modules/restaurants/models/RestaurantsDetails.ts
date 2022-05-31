export interface RestaurantsDetails{
   

    data: {
        restaurant: {
            id: string,
            restaurant_id: string,
            theme_code: string,
            sub_theme_code: string,
            favourited_count: string,
            name:string,
            description:string,
            logo:string,
            phone: string,
            email: string,
            country: {
                id: string,
                country_id: string,
                name: string
            },
            governorate: {
                id: string,
                governorate_id: 4,
                name: string
            },
            region: {
                id: string,
                region_id: string,
                name: string
            },
            address: string,
            branchType: {
                id: string,
                branch_id: string,
                name: string,
                address: string,
                phone: string,
                email: string,
                times_of_week: string
            },
            times_of_week: [
                {
                    to: string,
                    day: string,
                    from: string
                },
             
                
            ],
            is_fav: boolean,
            rate: string,
            rate_count: string,
            open: boolean,
            link_google_play: string,
            link_apple_store: string,
            qr_image:string,
            lat:string,
            lng: string,
            service_types: [
                {
                    id: string,
                    service_type_id: string,
                    name: string
                },
                
            ]
        },
        most_wanted_products: [],
        menu: [
            {
                id: string,
                menu_id: string,
                code: string,
                image:string,
                name: string,
                subcategories: [
                    {
                        id: string,
                        sub_category_id: string,
                        image: string,
                        name: string
                    }
                ],
                products: [
                    {
                        id: string,
                        product_id: string,
                        name: string,
                        description: string,
                        price: string,
                        video:string,
                        icon:string,
                        images:string,
                        sizes: string,
                        is_fav: boolean,
                        rate: string,
                        rate_count: number,
                        model_type: string,
                        qty_cart: number
                    }
                ]
            },

            
           
            
        ],
        offers: [
            {
                id: string,
                offer_id: string,
                name: string,
                price: string,
                video: string,
                images: string,
                restaurant_id: string,
                restaurant_name: string,
                restaurant_logo: string,
                products: [
                    {
                        quantity: string,
                        product_id: string,
                        product: string,
                        icon: string
                    },
                    {
                        quantity: string,
                        product_id: string,
                        product: string,
                        icon: string
                    },
                    {
                        quantity: string,
                        product_id: string,
                        product: string,
                        icon:string
                    }
                ],
                rate: string,
                rate_count: string,
                model_type: string,
                qty_cart: string
            },
            
            
            
        ],
        extras: [
            {
                id: string,
                extra_id: string,
                name: string,
                price: string,
                image:string,
                qty_cart: number
            },  
        ],
      
    },
}