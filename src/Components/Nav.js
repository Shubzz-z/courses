import React from 'react'

function Nav(probs) {
    let filterData=probs.filterData;
    let setCategory=probs.setCategory;
    let category=probs.category;
    function set(title){
        setCategory(title);
    }
  return (
    <div className='text-white flex flex-wrap gap-4 justify-center items-center m-2'>
        {filterData.map((value)=>{
            return<button type="button" key={value.id} onClick={()=>{set(value.title)}}
                        className={`bg-slate-700 px-2 py-1 rounded-lg hover:bg-slate-800 ${category===value.title ? 'border' : ''}`}
                    >{value.title}
                    </button>
        })}
    </div>
  )
}

export default Nav