import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchDataAction = data => ({type: FETCH_DATA, data});

export const fetchData = () => async dispatch => {
    const resp = await axios.get('http://localhost:8000/messages');
    dispatch(fetchDataAction(resp.data))
};

export const submitForm = data => async dispatch => {
    await axios.post('http://localhost:8000/messages', data)
};