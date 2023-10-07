import "./CardSelect.css";

function CardSelect({ title, defaultOption, options})
 {
    const handleSeleccionarOpcion = (e) => {
        const opcionSeleccionada = e.target.value;
  
    
        // Aquí puedes ejecutar la acción que desees con la opción seleccionada
        console.log("Opción seleccionada:", opcionSeleccionada);
      };


  return (
    <div>
      <label htmlFor={title}></label>
     <select
              id={title}
              onChange={handleSeleccionarOpcion}
            //   value={formData.genero}
            //   onChange={handleChange}
            >
            <option value={defaultOption}>{defaultOption}</option>

            {options.map((opcion, index) => (
                    <option key={index} value={opcion.link}>
                        {opcion.description}
                    </option>
                    ))}
             
    </select>
      
    </div>
  );
}

export default CardSelect;
