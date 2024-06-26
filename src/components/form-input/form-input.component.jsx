import './form-input.styles.css';

const FormInput = ({ label, ...otherprops }) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherprops} />
            <label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInput;
