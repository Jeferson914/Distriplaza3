

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-linear-180 from-green-900 to-gray-900">
      <h2 className="text-white text-3xl font-bold text-center mb-10">Contáctanos</h2>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input type="text" placeholder="Nombre" className="w-full border p-3 rounded mb-4" required />
        <input type="email" placeholder="Correo" className="w-full border p-3 rounded mb-4" required />
        <textarea placeholder="Mensaje" className="w-full border p-3 rounded mb-4 h-32 resize-none" required />
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-700">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
