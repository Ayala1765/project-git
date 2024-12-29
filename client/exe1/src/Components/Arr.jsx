const Arr=()=>{
    const arr=["ירושלים","בני ברק"]
    return(<>
    {arr.map((e,index)=>{  
           return<h1 style={{color: 'firebrick',backgroundColor: 'pink'}}>{e}</h1>
    })}
    </>)
}

export default Arr