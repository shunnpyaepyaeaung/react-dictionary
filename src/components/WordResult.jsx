import React from 'react'

function WordResult({data}) {
    return (
        <div className="ui card">
            <div className="content">
                <div className="row topword" style={{height:"100px", display:'grid'}}>
                    <div className="word resultfont"><h1>{data.word}</h1></div>
                    <div className="pronunciation resultfont" style={{fontSize:'22px'}}>{data.pronunciation}</div>
                </div>

                {
                    data.definitions ? data.definitions.map((e,i)=>(
                        <div className="ui two column row grid">
                    <div className="row">
                        <div className="six wide center aligned column resulttitle"><h4>Definition {data.definitions.length > 1 && i+1}</h4></div>
                        <div className="left aligned column resultfont">{e.definition}</div>
                    </div>
                    <div className="row">
                        <div className="six wide center aligned column resulttitle"><h4>Type</h4></div>
                        <div className="left aligned column resultfont">{e.type}</div>
                    </div>
                    {e.example ? <div className="row">
                        <div className="six wide center aligned column resulttitle"><h4>Example</h4></div>
                        <div className="left aligned column resultfont">{e.example}</div>
                    </div> : ''}

                    {e.emoji ?   <div className="row">
                        <div className="six wide center aligned column resulttitle"><h4>Emoji</h4></div>
                        <div className="left aligned column emoji resultfont">{e.emoji}</div>
                    </div> : ''}
                    
                  {e.image_url ? <div className="row">
                        <div className="six wide center aligned column resulttitle"><h4>Image</h4></div>
                        <div className="left aligned column"><img alt="image" src={e.image_url}></img></div>
                    </div> : ''}
                        <hr></hr>

                </div>
                    )) : ''
                }
                

                
               
            </div>
        </div>

    )
}

export default WordResult
