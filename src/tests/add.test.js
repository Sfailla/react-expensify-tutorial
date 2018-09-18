const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should return hello mike', () => {
	const result = generateGreeting('Mike');
	expect(result).toBe('Hello Mike');
});

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('should generate greeting fot no name', () => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous');
});
