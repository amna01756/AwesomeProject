
export const introText = "My name is Amna and I live in Lahore.";
export function isAdult(age) {
  return age >= 18;
}

export function grade(score) {
  return score >= 50 ? "pass" : "fail";
}

export function dayName(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "invalid";
  }
}

export const originalNumbers = [2, 5, 8, 11];
export const doubledNumbers = originalNumbers.map((n) => n * 2);

export const namesList = ["Ali", "Sara", "Omar", "Hina"];
export const longNames = namesList.filter((name) => name.length > 3);

export const userProfile = { name: "Amna", role: "Mobile Intern", city: "Lahore" };
export const userRole = userProfile.role;

export function fullName(user) {
  return `${user.first} ${user.last}`;
}

export function getEvenNumbers() {
  const evens = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens.join(", ");
}

export const numbersList = [10, 20, 5, 40, 15, 8];
export const countOver15 = numbersList.filter((n) => n > 15).length;

export function describe(person) {
  return `${person.name} knows ${person.skills.join(" and ")}.`;
}

export const rawString = "  hello world  ";
export const formattedString = rawString.trim().toUpperCase();

export function sum(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
export const threeUsers = [
  { name: "Amna", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Bilal", city: "Islamabad" },
];
export const onlyNames = threeUsers.map((u) => u.name).join(", ");

export function canLogin(user) {
  return user.isActive === true && user.role === "intern";
}