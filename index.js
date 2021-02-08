const removeAccents = (str, alphabet = "abcdefghijklmnopqrstuvwxyz", locale = "en") => {
	// hashmap to avoid repeated processing
	const correspondingCharacters = {};
	isInAlphabet = (character) => {
		isBefore  = () => character.localeCompare(alphabet[0], locale) < 0;
		isAfter = () => character.localeCompare(alphabet[alphabet.length - 1], locale) > 0;
		if (!character || !alphabet?.length) return false;
		return !isBefore() && !isAfter();
	}
	removeAccent = (character) => removeAccentRange(character, alphabet.split(''));
	removeAccentRange = (character, range) => {
		if (correspondingCharacters[character]) return correspondingCharacters[character];
		// perform binary search to map corresponding character
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
				return removeAccentRange(character, characterPosition < 0 ? range.slice(0, middle) : range.slice(middle));
			}
		}
	}
	if (!str?.length) return str;
	return str.split('').map((character) => {
		const lowerCharacter = character.toLowerCase();
		if (!isInAlphabet(lowerCharacter)) return character;
		const lowerCharacterWithoutAccents = removeAccent(lowerCharacter);
		return character === lowerCharacter ? lowerCharacterWithoutAccents : lowerCharacterWithoutAccents.toUpperCase();
	}).join('');
}

module.exports = removeAccents;