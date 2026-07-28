import { getChatGPTUser } from "@/app/chatgpt-auth";
const ADMIN_EMAIL="thomaschoo2011@gmail.com";
export async function requireAdminApi(){const user=await getChatGPTUser();return user?.email.toLowerCase()===ADMIN_EMAIL?user:null}
