
import React from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = React.useState([
    { id: 1, name: "", age: "" }
  ])

  const addFields = () => {
    // const newField = { id: Date.now(), name: "", age: "" };
    const newId = fields.length > 0 ? Math.max(...fields.map(f => f.id)) + 1 : 1;
    setFields([...fields, { id: newId, name: '', age: '' }]);
  }

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  }
  const handleInputChange = (id, fieldName, value) => {
    setFields(fields.map(field => field.id === id ? { ...field, [fieldName]: value } : field));
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  }


  return (
    <div>
      {/* Do not remove the main div */}
      <div className="dynamic-fields-container">
        <form onSubmit={handleSubmit} className="dynamic-fields-form" >
          {fields.map((field, index) => (
            <div key={field.id} className="field-group">

              <div className="field-body" >
                <div className="input-group">
                  <label htmlFor={`name-${field.id}`}>Name:</label>
                  <input
                    id={`name-${field.id}`}
                    type="text"
                    name="name"
                    value={field.name}
                    onChange={(e) => handleInputChange(field.id, 'name', e.target.value)}
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor={`age-${field.id}`}>Age:</label>
                  <input
                    id={`age-${field.id}`}
                    type="number"
                    name="age"
                    value={field.age}
                    onChange={(e) => handleInputChange(field.id, 'age', e.target.value)}
                    placeholder="Enter age"
                    required
                  />
                </div>
                {fields.length > 1 && <button type="button" onClick={() => removeField(field.id)} className="remove-btn" >Remove</button>}

              </div>

            </div>
          ))}

          <div className="button-group">
            <button type="button" onClick={addFields} className="add-button">
              Add Fields
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App
