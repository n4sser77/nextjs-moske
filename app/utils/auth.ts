// @/app/utils/auth.ts
import crypto from "crypto";
import dbConnect from "../api/dbConnect";

async function readUsersFromDb() {
  const db = await dbConnect();
  const collection = db.collection("users");
  return await collection.find().toArray();
}

async function writeUserToDb(user: any) {
  const db = await dbConnect();
  const collection = db.collection("users");
  await collection.insertOne(user);
}

async function updateUserInDb(user: any) {
  const db = await dbConnect();
  const collection = db.collection("users");
  await collection.updateOne({ username: user.username }, { $set: user });
}

/**
 * Registers a new user.
 * @param username The username of the new user.
 * @param password The password of the new user.
 */
export async function register(username: string, password: string) {
  const users = await readUsersFromDb();

  // Check if the user already exists
  if (users.find((user: any) => user.username === username)) {
    throw new Error("User already exists");
  }

  // Hash the password
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  // Create the new user object
  const newUser = { username, password: hash, token: "" };

  // Save the new user to the database
  await writeUserToDb(newUser);
}

/**
 * Logs in a user.
 * @param username The username of the user.
 * @param password The password of the user.
 * @returns The generated user token.
 */
export async function login(username: string, password: string) {
  const users = await readUsersFromDb();

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

  // Update the user in the database
  await updateUserInDb(user);

  return token;
}

/**
 * Authenticates a user token.
 * @param token The user token to authenticate.
 * @returns The authenticated user.
 */
export async function authenticate(token: string) {
  const users = await readUsersFromDb();
  const user = users.find((user: any) => user.token === token);

  if (!user) {
    throw new Error("Invalid token");
  }

  return user;
}
