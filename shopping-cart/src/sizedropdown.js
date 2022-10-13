import props from './store'


function Sizedropdown (props) {
    return (
        <div>
                <select name='Size' value={props.setValue}>
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