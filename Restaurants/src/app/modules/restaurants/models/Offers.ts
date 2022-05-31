export interface Offers{
   
        
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
      

}

