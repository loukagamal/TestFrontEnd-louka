export interface RestaurantsData{

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
}