/**
 * Remove accents from a string
 * @param {string} - a string containing accents
 * @return {string} - a new string without accents
 */
module.exports = (str, alphabet = "abcdefghijklmnopqrstuvwxyz", locale = "en") => {
	// map to avoid repeated processing of binary search
	const correspondingCharacters = {};
	isInAlphabet = (character) => {
		appearBefore  = () => character.localeCompare(alphabet[0], locale) < 0;
		appearAfter = () => character.localeCompare(alphabet[alphabet.length - 1], locale) > 0;
		if (!character || !alphabet?.length) return false;
		return !appearBefore() && !appearAfter();
	}
	removeAccentsLower = (character) => removeAccentsLowerRange(character, alphabet.split(''));
	removeAccentsLowerRange = (character, range) => {
		if (correspondingCharacters[character]) return correspondingCharacters[character];
		// use binary search to get corresponding character
		switch(range.length) {
			case 0: return null;
			case 1: {
				correspondingCharacters[character] = range[0];
				return range[0];
			}
			default: {
				const middle = Math.ceil(range.length/2);
				const characterPosition = character.localeCompare(range[middle], locale);
				if (!characterPosition) {
					correspondingCharacters[character] = range[middle];
					return range[middle];
				}
				return removeAccentsLowerRange(character, characterPosition < 0 ? range.slice(0, middle) : range.slice(middle));
			}
		}
	}
	if (!str || !str.length) return str;
	return str.split('').map((character) => {
		const lowerCharacter = character.toLowerCase();
		if (!isInAlphabet(lowerCharacter)) return character;
		const lowerCharacterWithoutAccents = removeAccentsLower(lowerCharacter);
		return character === lowerCharacter ? lowerCharacterWithoutAccents : lowerCharacterWithoutAccents.toUpperCase();
	}).join('');
}