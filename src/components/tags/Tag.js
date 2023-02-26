import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag, removeTag } from '../../features/filter/filterSlice';

const Tag = ({tag}) => {
    const dispatch = useDispatch();
    const {selectedTags} = useSelector((state)=>state.filter);

    const isSelected = selectedTags.includes(tag.title) ? true : false;

    const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

    const handleDispatch = (title) =>{
        if(isSelected){
            dispatch(removeTag(title))
        }else{
            dispatch(addTag(title))
        }

    }
    return (
        <div onClick={()=>handleDispatch(tag.title)}  className={style}>
            {tag.title}
        </div>
    //             {/* <!-- selected --> */ }
    // <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    //     redux
    // </div>
    );
};

export default Tag;