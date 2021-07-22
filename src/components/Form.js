
const Form = ({inputValue, inputValueHandler, submitFunction, handleClickAddTask}) => {
    return (  
        <>
    <form className='form' onSubmit={submitFunction}>
        <input className='form__input' type='text' placeholder='Type some task ...' onChange={inputValueHandler} value={inputValue}/>
        <button className='form__btn' type='submit' onClick={handleClickAddTask}>
        Add!
        </button>
    </form>
        </>
    );
}
 
export default Form;