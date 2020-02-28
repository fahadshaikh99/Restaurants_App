import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {

            Authorization: 'Bearer dsOwE7WuqAToZDVaKWyWsWs_EPKmMBTlz0ySrAOZaEqLp4CdOy1YIzgMqxlpoegeI-CGaao1hjQUwA1BpWwUgBt5oaicUNNvBgxWYHWBrhSD-sjC3LMKWlDiobqkXXYx'

        }
});