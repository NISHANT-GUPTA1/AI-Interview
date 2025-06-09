export const speakText = (text, lang = 'en-US') => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    synth.speak(utter);
};