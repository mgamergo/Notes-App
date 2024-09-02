import { Client, Account, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf";

export class DataService {
  client = new Client();
  account;
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async addNote({
    Title,
    Content,
    Color = "#030712",
    tags = [],
    isArchived = false,
    isTrashed = false,
    userId
  }) {
    try {
      const result = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          Title,
          Content,
          Color,
          tags,
          isArchived,
          isTrashed,
          userId
        }
      );
      return result;
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  async updateNote(
    $id,
    { Title, Content, Color, tags, isArchived, isTrashed, userId }
  ) {
    try {
      const result = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        $id,
        { Title, Content, Color, tags, isArchived, isTrashed, userId }
      );
      return result;
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  async deleteNote($id) {
    try {
      const result = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        $id
      );
      return result;
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  async getNote($id) {
    try {
      const result = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        $id
      );
      return result;
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  async getAllNotes(userId) {
    try {
      const query = [Query.equal("userId", userId)];
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        query,
      );
      return response.documents;
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}

const dataService = new DataService();

export default dataService;
