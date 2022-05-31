export interface Menu
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
        }
 
