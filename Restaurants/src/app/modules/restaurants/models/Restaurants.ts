export interface Restaurants{
    id?:string ,
    restaurant_id?: string,
    branch_type_id?: string,
    branch_type_name?: String,
    theme_code?: string,
    sub_theme_code?: string,
    name?: string,
    description?: String,
    logo?:String,
    country?: {
        id?: string,
        country_id?: string,
        name?: string,
    },
    governorate?: {
        id?: string,
        governorate_id?: string,
        name?: string,
    },
    region?: {
        id?: string,
        region_id?: string,
        name?: string
    },
    address?: string,
    is_fav?: boolean,
    rate?: string,
    rate_count?: string,
    open?: boolean,
    link_google_play?: string,
    link_apple_store?: string,
    qr_image?:string,
    lat?: string,
    lng?: string
}