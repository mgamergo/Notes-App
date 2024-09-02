import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async signUp({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (user) {
        return this.login({email, password});
      } else {
        return user;
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  async login({ email, password }) {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (user) return user;
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}

const authService = new AuthService();

export default authService;
