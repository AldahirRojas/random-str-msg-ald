// Definición de una matriz de mensajes de texto con contenido humorístico para "commits" en un sistema de control de versiones
const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];

// Definición de una función que imprime un mensaje humorístico de la matriz 'messages' de manera aleatoria en la consola
const funnyCommit = () => {
  // Se selecciona un elemento aleatorio de la matriz 'messages'
  const message = messages[Math.floor(Math.random() * messages.length)];
  // Se imprime el mensaje en la consola, con un color azul
  console.log(`\x1b[34m${message}\x1b[89m`);
};

// Se exporta la función 'funnyCommit' como un módulo, para que pueda ser utilizada en otros archivos de JavaScript
module.exports = {
  funnyCommit,
};