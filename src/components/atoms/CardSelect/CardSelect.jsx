import "./CardSelect.css";
import { useNavigate } from "react-router-dom";


function CardSelect({ title, defaultOption, options})
 {
    const navigate = useNavigate();
    const handleSeleccionarOpcion = (e) => {
        const opcionSeleccionada = e.target.value;
  
    
        navigate("/" + opcionSeleccionada);
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
