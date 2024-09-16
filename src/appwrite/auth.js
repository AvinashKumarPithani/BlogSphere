import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";





const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);
