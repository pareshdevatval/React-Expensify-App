// Object Destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Panguin'
    }
}

const { name: PublihserName = 'Self-Published' } = book.publisher;

console.log(PublihserName);

// Array Destructuring

const address = ['A203 Veer Saverkar heights', 'Ahmedabad', 'Gujarat', '380047'];

const [, city, state, ] = address;

console.log(`You are in ${city} ${state}.`);