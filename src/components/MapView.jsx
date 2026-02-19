const MapView = ({ is3d }) => {
  return (
    <div className="absolute w-full h-[250px] top-[70px] overflow-hidden border-2 border-[#f8e197] rounded-[22px] z-60">
      {is3d ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1771261447383!6m8!1m7!1sQ_aW5uTLksiSyk1eepOjmA!2m2!1d-6.752200762433427!2d110.8043840310196!3f226.4901181684314!4f-3.902079357988029!5f0.7820865974627469"
          className="w-full h-full rounded-lg pointer-events-auto"
          style={{ border: 0, borderRadius: "22px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.63404937874603!2d110.80440280731321!3d-6.7521906485436824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70dd419a088881%3A0x35da14b0b6579125!2sToko%20Sumber%20Rezeki!5e0!3m2!1sen!2sid!4v1771101256187!5m2!1sen!2sid"
          className="w-full h-full rounded-lg pointer-events-auto"
          style={{ border: 0, borderRadius: "22px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default MapView;
