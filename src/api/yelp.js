import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer YHZ5MWGRONqPqMPlmXsNoig_y6cY6H79W1w9IjQHdvymZ6mpOc0O_tHggcV_hLv7H-wFhOojWMnzDgFoLIL2916Gm78b3f8E6gDNyOG7LpRccKaM6Nc_FEZEN8QyYHYx'
    }
})