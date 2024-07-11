// @/app/utils/auth.ts
import crypto from "crypto";
import fs from "fs";
import path from "path";

// Correctly resolve the path to the users.json file
const usersFilePath = path.resolve(process.cwd(), "app/users.json");

/**
 * Reads users from the JSON file.
 */
function readUsersFromFile() {
  try {
    const fileContent = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
}

/**
 * Writes users to the JSON file.
 * @param users The users array to write to the file.
 */
function writeUsersToFile(users: any) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));  
  } catch (error) {
    console.error('Error writing users file:', error);
  }
  
}

/**
 * Registers a new user.
 * @param username The username of the new user.
 * @param password The password of the new user.
 */
export function register(username: string, password: string) {
  const users = readUsersFromFile();

  // Check if the user already exists
  if (users.find((user: any) => user.username === username)) {
    throw new Error("User already exists");
  }

  // Hash the password
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  // Add user to users array
  users.push({ username, password: hash, token: "" });

  // Save users to the file
  writeUsersToFile(users);
}

/**
 * Logs in a user.
 * @param username The username of the user.
 * @param password The password of the user.
 * @returns The generated user token.
 */
export function login(username: string, password: string) {
  const users = readUsersFromFile();

  // Hash the provided password
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  // Check if the user exists in the store
  const user = users.find(
    (user: any) => user.username === username && user.password === hash
  );

  if (!user) {
    throw new Error("Invalid user");
  }

  // Generate a token
  const token = crypto.randomBytes(16).toString("hex");
  user.token = token;

  // Save users to the file
  writeUsersToFile(users);

  return token;
}

/**
 * Authenticates a user token.
 * @param token The user token to authenticate.
 * @returns The authenticated user.
 */
export function authenticate(token: any) {
  const users = readUsersFromFile();
  const user = users.find((user: any) => user.token === token);

  if (!user) {
    throw new Error("Invalid token");
  }

  return user;
}

