import React,{useState} from 'react';
import Container from './Container';
import Input from './Input';
import WordResult from './WordResult';
import '../styles.css';
import axios from 'axios'

function App() {
    const [data, setData] = useState({});
    const [searchWord, setSearchWord] = useState();
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false);

    async function callApi(){
        try{
            setError(false)
            setLoading(true)
            let response = await axios(`https://owlbot.info/api/v4/dictionary/${searchWord}`,{
                headers:{
                    Authorization:"Token 75b267053a5ae018e55dc361c9c4cd1af0dfa8e4"
                }
            })
            setLoading(false)
            const api = response.data;
            setData(api)
        }
        catch(err){
            setError(true);
            setData({});
            setLoading(false);
        }
    }    
   
    return (
        <Container>
            <h1>🦉Owl Dictionary🦉</h1>
            <Input searchWord={searchWord} setSearchWord={setSearchWord} callApi={callApi} setError={setError} />
            {
                loading ? <h1>Loading...</h1> : 
                error ? <h1>{searchWord} not found!</h1> : Object.keys(data).length === 0 ? '' :
                <WordResult data={data} setData={setData} />

            }
        </Container>
    )
}

export default App
