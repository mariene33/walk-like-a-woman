import React, { useState } from "react";
import "./Profile.css";
import profileImage from "../../assets/imagenes/profile-image.svg";
import { useNavigate } from "react-router-dom";

function FormularioInscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    genero: "",
    descripcion: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profieImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/aventurate");
  };

  return (
    <div className="formulario-inscripcion">
      <div className="upload-profile-image">
        <label htmlFor="profileImage" className="custom-file-label">
          <img src={profileImage} alt="Profile image" />
        </label>
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          accept="image/*"
          required
          onChange={handleImageChange}
        />
      </div>
      <div className="card">
        <h2 className="titulo-formulario"></h2>
        {/* Agregar el botón para cargar la foto de perfil */}

        <form className="form custom-form" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre"></label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="apellido"></label>
            <input
              type="text"
              id="apellido"
              placeholder="Apellidos"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="fechaNacimiento"></label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="genero"></label>
            <select
              id="genero"
              name="genero"
              placeholder="Genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="descripcion"></label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Algo sobre ti"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />

            <div className="campo checkbox">
              <input
                type="checkbox"
                id="mantenerseInformada"
                name="mantenerseInformada"
                checked={formData.mantenerseInformada}
                onChange={handleChange}
              />
              <label htmlFor="mantenerseInformada">
                Quiero mantenerme informada
              </label>
            </div>

            <div className="campo checkbox">
              <input
                checked={formData.aceptarTerminos}
                onChange={handleChange}
                type="checkbox"
                id="aceptarTerminos"
                name="aceptarTerminos"
                required
              />
              <label htmlFor="aceptarTerminos">
                Acepto los términos y condiciones
              </label>
            </div>

            <button className="button-register" type="submit">
              REGISTRARSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioInscripcion;
