import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.DATABASE_URL,
    process.env.SUPABASE_ANON_KEY
)

/**
 * API to get all the used car information
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export default async function handler(req, res) {
    try {

        const { id } = req.query;

        //get all engine and performance data
        let { data: engine_performance, enginePerformanceError } = await supabase
            .from('engine_and_performance')
            .select('*')
            .eq('id', id)

        //check if any error
        if (enginePerformanceError) {
            console.log(enginePerformanceError)
        }

        //get all emissions and consumption data
        let { data: emissions_consumption, emissionsConsumptionError } = await supabase
            .from('emissions_and_consumption')
            .select('*')
            .eq('id', id)

        //check if any error
        if (emissionsConsumptionError) {
            console.log(emissionsConsumptionError)
        }

        //get all exterior data
        let { data: exterior, exteriorError } = await supabase
            .from('exterior')
            .select('*')
            .eq('id', id)

        //check if any error
        if (exteriorError) {
            console.log(exteriorError)
        }

        //get all comfort and interior data
        let { data: comfort_interior, comfortInteriorError } = await supabase
            .from('comfort_and_interior')
            .select('*')
            .eq('id', id)

        //check if any error
        if (comfortInteriorError) {
            console.log(comfortInteriorError)
        }

        //get all the images of the car
        const { data: files, error: imagesError } = await supabase.storage
            .from('car-images')
            .list(id)

        let imageUrls = [];
        //if no error and there's at least an image
        if (!imagesError && files.length > 0) {
            imageUrls = files.map(file =>
                supabase.storage
                    .from('car-images')
                    .getPublicUrl(id + '/' + file.name).data.publicUrl
            );
        }

        //collect all data together
        const used_car_info = {
            ...engine_performance?.[0],
            ...emissions_consumption?.[0],
            ...exterior?.[0],
            ...comfort_interior?.[0],
            images: imageUrls
        }

        //return all data about used cars
        res.status(200).json({used_car_info: used_car_info})

    } catch(error) {
        //handle errors
        return res.status(400).json({error: error.message})
    }
}