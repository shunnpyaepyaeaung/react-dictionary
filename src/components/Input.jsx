import React from 'react'

function Input({searchWord, setSearchWord, callApi, setError}) {
    return (
        <div className="ui left icon input">
            <input type="text" value={searchWord} 
            onChange={(e)=>{
                setError(false)
                setSearchWord(e.target.value)
            }}
            onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    if(searchWord){
                        callApi()
                    }
                }
            }}
            type="text" placeholder="Search word..." />
            <i className="book icon"></i>
        </div>

    )
}

export default Input
