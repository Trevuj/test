// data.js

// Replace with environment variable
const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

// Major Cities with Latitude and Longitude
const majorCities = {
    us: [
        { city: 'New York', lat: 40.7128, lng: -74.0060 },
        { city: 'Texas', lat: 31.9686, lng: -99.9018 },
        { city: 'California', lat: 36.7783, lng: -119.4179 },
        { city: 'Georgia', lat: 32.1656, lng: -82.9001 },
        { city: 'Florida', lat: 27.6648, lng: -81.5158 },
        { city: 'Washington', lat: 47.7511, lng: -120.7401 },
        { city: 'Virginia', lat: 37.4316, lng: -78.6569 }
    ],
    ca: [
        { city: 'Toronto', lat: 43.651070, lng: -79.347015 },
        { city: 'Montreal', lat: 45.501689, lng: -73.567256 },
        { city: 'Vancouver', lat: 49.2827, lng: -123.1207 },
    ],
    gb: [
        { city: 'London', lat: 51.5074, lng: -0.1278 }
    ]
};

// First Names
const firstNames = [
    'John', 'Michael', 'David', 'James', 'Robert', 'William', 'Joseph', 'Charles', 'Thomas', 'Daniel',
    'Matthew', 'Anthony', 'Mark', 'Donald', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'Kevin',
    'Brian', 'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary',
    'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Samuel',
    'Frank', 'Gregory', 'Raymond', 'Alexander', 'Patrick', 'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron',
    'Jose', 'Adam', 'Henry', 'Nathan', 'Douglas', 'Zachary', 'Peter', 'Kyle', 'Walter', 'Ethan',
    'Jeremy', 'Harold', 'Keith', 'Christian', 'Roger', 'Noah', 'Gerald', 'Carl', 'Terry', 'Sean',
    'Austin', 'Arthur', 'Lawrence', 'Jesse', 'Dylan', 'Bryan', 'Joe', 'Jordan', 'Billy', 'Bruce',
    'Albert', 'Willie', 'Gabriel', 'Logan', 'Alan', 'Juan', 'Wayne', 'Roy', 'Ralph', 'Randy',
    'Eugene', 'Vincent', 'Russell', 'Elijah', 'Louis', 'Bobby', 'Philip', 'Johnny', 'Bradley', 'Mary',
    'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy',
    'Lisa', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol',
    'Amanda', 'Dorothy', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen',
    'Amy', 'Shirley', 'Angela', 'Helen', 'Anna', 'Brenda', 'Pamela', 'Nicole', 'Samantha', 'Katherine',
    'Emma', 'Ruth', 'Christine', 'Catherine', 'Debra', 'Rachel', 'Carolyn', 'Janet', 'Virginia', 'Maria',
    'Heather', 'Diane', 'Julie', 'Joyce', 'Evelyn', 'Joan', 'Victoria', 'Kelly', 'Christina', 'Lauren',
    'Frances', 'Martha', 'Judith', 'Cheryl', 'Megan', 'Andrea', 'Ann', 'Alice', 'Jean', 'Doris',
    'Kathryn', 'Gloria', 'Teresa', 'Hannah', 'Sara', 'Janice', 'Julia', 'Marie', 'Madison', 'Grace',
    'Judy', 'Theresa', 'Beverly', 'Denise', 'Marilyn', 'Amber', 'Danielle', 'Abigail', 'Brittany', 'Rose'
];

// Last Names
const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
    'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
    'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes',
    'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper',
    'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson',
    'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza', 'Ruiz', 'Hughes',
    'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 'Myers', 'Long', 'Ross', 'Foster', 'Jimenez',
    'Powell', 'Jenkins', 'Perry', 'Russell', 'Sullivan', 'Bell', 'Coleman', 'Butler', 'Henderson', 'Barnes',
    'Gonzales', 'Fisher', 'Vasquez', 'Simmons', 'Romero', 'Jordan', 'Patterson', 'Alexander', 'Hamilton', 'Graham',
    'Reynolds', 'Griffin', 'Wallace', 'Moreno', 'West', 'Cole', 'Hayes', 'Bryant', 'Herrera', 'Gibson',
    'Ellis', 'Tran', 'Medina', 'Aguilar', 'Stevens', 'Murray', 'Ford', 'Castro', 'Marshall', 'Owens',
    'Harrison', 'Fernandez', 'Mcdonald', 'Woods', 'Washington', 'Kennedy', 'Wells', 'Vargas', 'Henry', 'Chen',
    'Freeman', 'Webb', 'Tucker', 'Guzman', 'Burns', 'Crawford', 'Olson', 'Simpson', 'Porter', 'Hunter',
    'Gordon', 'Mendez', 'Silva', 'Shaw', 'Snyder', 'Mason', 'Dixon', 'Munoz', 'Hunt', 'Hicks',
    'Holmes', 'Palmer', 'Wagner', 'Black', 'Robertson', 'Boyd', 'Rose', 'Stone', 'Salazar', 'Fox',
    'Warren', 'Mills', 'Meyer', 'Rice', 'Schmidt', 'Garza', 'Daniels', 'Ferguson', 'Nichols', 'Stephens'
];

// Function to get a random first name
function getRandomFirstName() {
    return firstNames[Math.floor(Math.random() * firstNames.length)];
}

// Function to get a random last name
function getRandomLastName() {
    return lastNames[Math.floor(Math.random() * lastNames.length)];
}

// Function to generate a random birth date
function generateRandomBirthDate(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // Simplified to avoid complex date validation
    return new Date(birthYear, month - 1, day);
}

// Declare addressCount variable
let addressCount = 0;

// Function to generate a random person
async function generateRandomPerson(age, country) {
    if (age < 30 || age > 55) {
        throw new Error("No SSN for this age.");
    }

    if (!country) {
        throw new Error("Please select a country.");
    }

    const cities = majorCities[country];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    // Generate random latitude and longitude within the bounds of the selected city
    const lat = randomCity.lat + (Math.random() * 0.1 - 0.05);
    const lng = randomCity.lng + (Math.random() * 0.1 - 0.05);

    // Generate pre-loaded names only once
    const firstName = getRandomFirstName();
    const lastName = getRandomLastName();
    const name = `${firstName} ${lastName}`;

    // Generate random birth date
    const birthDate = generateRandomBirthDate(age);
    const birthDateFormatted = birthDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

    // Try each API key until one works
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const result = data.results[0];

            // Extract basic info
            const address = result.formatted;
            const city = result.components.city || result.components.town || result.components.village;
            const state = result.components.state;
            const zip = result.components.postcode;

            // Check if any field is undefined
            if (!address || !city || !state || !zip) {
                console.warn('Some fields are undefined. Retrying...');
                await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
                return generateRandomPerson(age, country); // Retry
            }

            addressCount++;
            if (addressCount >= 100) {
                alert('You have reached the maximum number of addresses (100).');
                addressCount = 0;
            }

            return {
                name,
                age,
                country,
                address,
                city,
                state,
                zip
            };
        } else {
            console.error('API response not OK:', response.status, response.statusText);
            const errorData = await response.json();
            console.error('API error details:', errorData);
        }
    } catch (error) {
        console.error('Error fetching data with API key:', apiKey, error);
    }

    throw new Error('All API keys failed to fetch data.');
}