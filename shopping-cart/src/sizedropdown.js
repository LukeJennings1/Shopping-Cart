import props from './store'


function Sizedropdown (props) {
    const sizeChoice = (value) => {
        
                props.size(value)
        }

    return (

        <div>
                <select name='Size' onChange={(e) => sizeChoice(e.target.value)}>
                <option value="" selected disabled hidden >Size</option>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                </select>
        </div>
    )
}

export default Sizedropdown;