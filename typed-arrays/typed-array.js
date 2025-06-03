// A byte is 8 bits. That means it can store 2⁸ = 256 different values.
// But how we interpret those 256 values depends on
// whether the byte is signed or unsigned.

/* notice that 8 and 16 in Int8Array & Int16Array are the bits number
they are whether 1 or 2 byte values 
*/

// Signed Bytes -> -128 to 127
const signed = new Int8Array(2);
signed[0] = -200; // out of range -> not precise
signed[1] = -100;
console.log(signed);

// Unsigned Bytes -> 0 to 225
const unsigned = new Uint8Array(2);
unsigned[0] = 200;
unsigned[1] = 400;
console.log(unsigned);
