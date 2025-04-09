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

        //get all the user cars
        let { data: used_cars, error } = await supabase
            .from('used_car')
            .select('*')

        //if any error, return the error message
        if(error)
            return res.status(400).json({error: error.message})

        //otherwise return data
        res.status(200).json(used_cars)

    } catch(error) {
        return res.status(400).json({error: error.message})
    }
}