import React , {useState} from 'react';


const NewColorForm = ({addColor}) => {

    const INITIAL_STATE = {
        color : '',
        
    }

    const [formData , setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({...formData})
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <h1>Pick a new color!</h1>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="color"></label>
                <input
                id="color"
                type='text'
                name='color'
                placeholder='Color'
                value={formData.color}
                onChange={handleChange}
                />
                {/* <label htmlFor='colorWheel'></label>
                <input 
                id='colorWheel'
                type='color'
                name='colorWheel'
                value={formData.colorWheel}
                onChange={handleChange}
                /> */}
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default NewColorForm