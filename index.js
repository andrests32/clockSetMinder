const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

const messageMind = [
  "Cree en ti mismo: La confianza en uno mismo es la base del éxito. Ten fe en tus habilidades y en tu capacidad para alcanzar tus metas.",

  "Persigue tus sueños: No importa cuán grandes o pequeños sean tus sueños, ve tras ellos con pasión y determinación. No te rindas ante los obstáculos.",

  "Aprende de los errores: Los errores son parte del aprendizaje y del crecimiento. No temas cometerlos, sino que utilízalos como oportunidades para mejorar.",

  "Rodéate de personas positivas: La compañía que frecuentas influye en tu estado de ánimo y en tu actitud. Rodéate de personas que te apoyen, te inspiren y te motiven a alcanzar tus metas.",

  "Mantén una actitud positiva: La actitud es todo. Enfócate en lo positivo, incluso en los momentos difíciles. Una actitud positiva te ayudará a superar los obstáculos y a alcanzar tus metas.",

  "Nunca te rindas: El camino hacia el éxito no siempre es fácil, pero nunca te rindas. Sigue adelante con perseverancia y eventualmente alcanzarás tus metas.",

  "Celebra tus logros: Es importante reconocer y celebrar tus logros, no importa cuán pequeños sean. Esto te ayudará a mantenerte motivado y a seguir avanzando.",

  "Sal de tu zona de confort: No tengas miedo de probar cosas nuevas y salir de tu zona de confort. Es ahí donde se encuentra el verdadero crecimiento.",

  "Aprende continuamente: El mundo está en constante cambio, por lo que es importante seguir aprendiendo y desarrollando nuevas habilidades. Esto te ayudará a mantenerte competitivo y a alcanzar tus metas.",

  "Disfruta el viaje: El camino hacia el éxito es tan importante como el destino final. Disfruta el proceso y aprende de cada experiencia."
];

let currentMessageIndex = 0;
let previousHours = -1;

setInterval(() => {
  let currentTime = new Date();
  hours.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  console.log(
    `CurrentMessageIndex: ${currentMessageIndex}, CurrentTime: ${currentTime}`
  );

  if (currentTime.getHours() !== previousHours) {
    previousHours = currentTime.getHours();
    const currentMessage = messageMind[currentMessageIndex];
    console.log(`Retrieved Message: ${currentMessage}`);
    message.textContent = currentMessage;
    currentMessageIndex =
      (currentMessageIndex + 1) % messageMind.length;
  }
}),
3600000;

if (localStorage.getItem("message") === null) {
  localStorage.setItem("message", JSON.stringify(messageMind));
}
