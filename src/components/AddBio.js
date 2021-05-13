import propTypes from 'prop-types'
import { useState } from 'react'


const AddBio = () => {
	const [text, setText] = useState('')
    const onSubmit = (e) => {
        
    }
    return (
        <div className = '.component'>
        
        <form onSubmit = {onSubmit}>
            
            <div className = 'input'>
                
                <label className = 'input'> Edit Bio</label>
                
                <input className = 'bio' type='text' placeholder='Add bio' />
            
            </div >

            <input className = 'addText' type = 'submit' value = 'Save Bio' value ={text} onChange={(e) => setText(e.target.value)}></input>

            <div className = 'input'>
                <label className = 'input'>Edit Preferences</label>
                <input className = 'bio' type='text' placeholder='Add Preferences'/>
            </div >
            <input className = 'addText' type = 'submit' value = 'Save Bio' value ={text} onChange={(e) => setText(e.target.value)}></input>
        </form>
        </div>
    )
    }
export default AddBio