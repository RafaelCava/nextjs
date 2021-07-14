import { useState } from "react";

const teste = () =>{
    const [searchText, setSearchText] = useState('');
    const handleQuestion = async ()=>{
        if(searchText !== ''){
           const result = await fetch(`https://opentdb.com/api.php?amount=${searchText}`) 
           const json = await result.json();
           console.log(json)
           return <h1>{json[0]}</h1>
        }
    }
    return (
        <div>
            <main>
                <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
                <button onClick={handleQuestion}>Escolha</button>
            </main>
        </div>
    )
}

export default teste