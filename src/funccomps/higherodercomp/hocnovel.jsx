import React from 'react';
import HocTitle from './hoctitle';
import HocAuthor from './hocauthor';
import HocDescription from './hocdescription';
import HocType from './hoctype';
//This is a high order component that pull in other components to create
//This component is a function that takes components as
//its parameters and then returns a more complex component. 
function HocNovel({title, author, description, type}){
    return (
        <div className='novel-Post'>
            <h2>High order component</h2>
            <HocTitle title={title} />
            <HocAuthor author={author} />
            <HocDescription description={description} />
            <HocType type={type} />
        </div>
    )
}   

export default HocNovel;