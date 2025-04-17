import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.DATABASE_URL,
    process.env.SUPABASE_ANON_KEY
)

/**
 * Method to get overview information of used cars
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export default async function handler(req, res) {
    try {

        //get all the used cars overview
        let { data: used_cars_overview, error } = await supabase
            .from('used_car')
            .select('*')

        //if any error, return the error message
        if(error)
            return res.status(400).json({error: error.message})

        const usedCarsOverviewWithImage = []
        //for each used car retrieved, get its image presentation
        //that's the first one in its corresponding folder
        for (const used_car_overview of used_cars_overview) {
            //get the first car image
            const { data: files, error } = await supabase.storage
                .from('car-images')
                .list(used_car_overview.id, { limit: 1 })

            let imageUrl;
            //if there isn't any error and the image is returned
            if(!error && files?.length > 0){
                const file = files[0];

                //get the image url
                imageUrl = supabase.storage
                    .from('car-images')
                    .getPublicUrl(used_car_overview.id + '/' + file.name).data.publicUrl
            }

            //add the image to the corresponding car
            usedCarsOverviewWithImage.push({
                ...used_car_overview,
                image: imageUrl
            })
        }

        //return data about used cars
        res.status(200).json({used_cars_overview: usedCarsOverviewWithImage})

    } catch(error) {
        //handle errors
        return res.status(400).json({error: error.message})
    }
}