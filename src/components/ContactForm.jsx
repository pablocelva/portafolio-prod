export default function ContactForm() {
    return (
        <form className="contact-form">
            <label>
                Nombre:
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Tu nombre" 
                    required 
                    className="block w-full border rounded p-2 my-2"
                    />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    placeholder="tuemail@email.com" 
                    required 
                    className="block w-full border rounded p-2 my-2"
                    />
            </label>
            <label>
                Motivo:
                <select 
                    name="reason" 
                    required 
                    className="block w-full border rounded p-2 my-2"
                    >
                    <option value="">Selecciona un motivo</option>
                    <option value="produccion">Producción</option>
                    <option value="mix">Mix</option>
                    <option value="mastering">Mastering</option>
                    <option value="propuesta">Propuesta</option>
                </select>
            </label>
            <label>
                Mensaje:
                <textarea 
                    name="message" 
                    placeholder="Escribe tu mensaje..." 
                    rows="4" 
                    required 
                    className="block w-full border rounded p-2 my-2"
                    />
            </label>
            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Enviar
            </button>
        </form>
    )
}