export const standardize = (item) => {
    const {
        name, art_name,
        image_url, real_info, varitaions,
        sell_nook, sell,
        ...rest
    } = item
    
    return {
        name: item.name.replace("'", "").replace(".", "").toLowerCase() || item.art_name,

        image: item.image_url
            || item.real_info?.image_url 
            || item.variations[0]?.image_url,

        sell: item.sell_nook 
            || item.sell,

        details: rest
    }
}