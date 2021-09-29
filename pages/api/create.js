import { supabase } from '../../utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res){
    const uuid = uuidv4()
    const host = req.body.userid
    const { data, error } = await supabase.from('gamestates').insert({
        "game_version": 1,
        "game_uid": uuid,
        "active_player": host,
        "secondary_player": '',
        "active_player_rolls": 1,
        "secondary_player_rolls": 0,
        "p1_address": host,
        "p2_address": '',
        "p3_address": '',
        "p4_address": '',
        "p5_address": '',
        "die1_face": 0,
        "die2_face": 0,
        "die3_face": 0,
        "die4_face": 0,
        "die5_face": 0,
        "die6_face": 0,
        "die7_face": 0,
        "die8_face": 0,
        "die1_state": 0,
        "die2_state": 0,
        "die3_state": 0,
        "die4_state": 0,
        "die5_state": 0,
        "die6_state": 0,
        "die7_state": 0,
        "die8_state": 0,
        "die1_location": host,
        "die2_location": host,
        "die3_location": host,
        "die4_location": host,
        "die5_location": host,
        "die6_location": host,
        "die7_location": host,
        "die8_location": host,
        "green_mine": 3,
        "purple_mine": 4,
        "red_mine": 6,
        "blue_mine": 12,
        "black_mine": 60,
        "green_table": 0,
        "purple_table": 0,
        "red_table": 0,
        "blue_table": 0,
        "black_table": 0,
        "green_p1": 0,
        "purple_p1": 0,
        "red_p1": 0,
        "blue_p1": 0,
        "black_p1": 0,
        "green_p2": 0,
        "purple_p2": 0,
        "red_p2": 0,
        "blue_p2": 0,
        "black_p2": 0,
        "green_p3": 0,
        "purple_p3": 0,
        "red_p3": 0,
        "blue_p3": 0,
        "black_p3": 0,
        "green_p4": 0,
        "purple_p4": 0,
        "red_p4": 0,
        "blue_p4": 0,
        "black_p4": 0,
        "green_p5": 0,
        "purple_p5": 0,
        "red_p5": 0,
        "blue_p5": 0,
        "black_p5": 0,
    })
    if (error){ return res.status(400).json({message: error}) }
    res.status(200).json({message: data, uuid: uuid})
}