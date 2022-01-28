export const VitaminKForm = ({handleVitaminKSubmit, handleChange, child_id}) => {
    const options = ["Select a dose", "First", "Second", "Third", "Fourth", "Fifth"]
    return(
        <form onSubmit = {handleVitaminKSubmit}>
            <label>Clinic Name:<input onChange={handleChange} type="text" name="vitamink-place_given"/></label><br/>
            <label>Date:<input onChange={handleChange} type="date" name="vitamink-date"/></label><br/>
            <label>Dose:<select onChange={handleChange} type="text" name="vitamink-dose">
                {options.map(option => {
                    return(<option key={option} value={option}>{option}</option>)
                })}
                </select>
            </label><br/>
            <label>Given by:
                <input onChange = {handleChange} type="radio" name="vitamink-route" value="Oral"/><label>Mouth</label>
                <input onChange = {handleChange} type="radio" name="vitamink-route" value="Injection"/><label>Injection</label>
            </label><br/>
            <label>Name of Doctor or Nurse: <input type="text" name="vitamink-given_by" onChange={handleChange}/></label><br/>
            <input type="hidden" value={child_id} name="child_id"/>

            <button type="submit">Add</button>
        </form>
    )
}