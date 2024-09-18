import conf from "../conf/conf"
import {Client, Databases, Storage, Query } from "appwrite"

const client = new Client()

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('');

