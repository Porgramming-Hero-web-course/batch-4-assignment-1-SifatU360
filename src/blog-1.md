The significance of union and intersection types in Typescript:


Union Type:

The union type in TypeScript is used to represent a value that can be one of several specified  types. 

It is denoted by the `|` symbol. 

For example, `string | number` represents a value that can be either a string or a number. Like OR operator.

This is useful when we want to define a function that can accept different types of arguments. 

It's like either/or.

Example:
type Status = "success" | "error";

function printStatus(status: Status) {
    if (status === "success") {
        console.log("Operation was successful!");
    } else if (status === "error") {
        console.log("There was an error with the operation.");
    }
}

// For test 
printStatus("success"); // Output: "Operation was successful!"
printStatus("error");   // Output: "There was an error with the operation."





Intersection Type:

The intersection type in TypeScript is a way to combine multiple types into one, creating a new type that has all properties from each of the types involved. 

It is denoted by the `&` symbol.

It's like AND operator

This is useful when we want to define a function that can accept multiple types of arguments and require that the all argument.

Example:
type Name = {
    firstName: string;
    lastName: string;
};

type Address = {
    district: string;
    thana: string
};

// intersection type 
type NameAndAddress = Name & Address;

function personInfo(person: NameAndAddress): void {
    console.log(`Full Name: ${person.firstName} ${person.lastName}`);
    console.log(`Address: ${person.district}, ${person.thana}`);
}